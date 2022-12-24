const connection = require("../dbConfig");
const router = require("express").Router();

router.get("/manage", async (req, res) => {
  connection.query(
    "select title,content, date_format(created_at,'%y/%m/%d') as created_at,unq from post",
    (error, rows) => {
      if (error) throw error;
      res.send(rows);
    }
  );
});

router.post("/write", async (req, res) => {
  const { title, content } = req.body;
  const sql = `insert into post(title,content) values ('${title}','${content}')`;
  connection.query(sql, (error, rows) => {
    if (error) throw error;
    res.send(rows);
  });
});

router.get("/manage/:unq", async (req, res) => {
  const id = req.params.unq;
  connection.query(
    `select title,content, date_format(created_at, '%Y/%m/%d %h:%m:%s') as created_at,unq from post where unq=${id}`,
    (error, rows) => {
      if (error) throw error;
      res.send(rows);
    }
  );
});

router.put("/update", async (req, res) => {
  try {
    const { title, content, unq } = req.body;
    const sql = `UPDATE post SET title='${title}', content='${content}' where unq=${unq}`;
    connection.query(sql);
    res.json({ message: "updated!" });
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
});

router.delete("/delete", async (req, res) => {
  try {
    const sql = `DELETE FROM post WHERE unq=${req.query.unq}`;
    connection.query(sql);
    res.json({ message: "deleted!" });
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
});
const postPerPage = 6;
router.get("/", async (req, res) => {
  let sql = "select * from post";
  connection.query(sql, (err, result) => {
    if (err) throw err;
    const numOfPosts = result.length;
    const numOfPages = Math.ceil(numOfPosts / postPerPage);
    let page = req.query.page ? Number(req.query.page) : 1;
    if (page > numOfPages) {
      res.redirect("/page?=" + encodeURIComponent(numOfPages));
    } else if (page < 1) {
      res.redirect("/page?=" + encodeURIComponent("1"));
    }
    const startingLimit = (page - 1) * postPerPage;
    sql = `select * from post limit ${startingLimit},${postPerPage}`;
    connection.query(sql, (error, result) => {
      if (error) throw error;
      let iterator = page - 5 < 1 ? 1 : page - 5;
      let endingLink =
        iterator + 9 < numOfPages ? iterator + 9 : page + (numOfPages - page);
      if (endingLink < page + 4) {
        iterator -= page + 4 - numOfPages;
      }
      res.send({ result, page, iterator, endingLink, numOfPages });
    });
  });
  // console.log(posts);
});

module.exports = router;
