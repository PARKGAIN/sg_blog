const connection = require("../dbConfig");
const router = require("express").Router();

router.get("/manage", async (req, res) => {
  connection.query("select *  from post", (error, rows) => {
    if (error) throw error;
    res.send(rows);
  });
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
  connection.query(`select * from post where unq=${id}`, (error, rows) => {
    if (error) throw error;
    res.send(rows);
  });
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

module.exports = router;
