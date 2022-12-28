const connection = require("../dbConfig");
const router = require("express").Router();

router.post("/write", async (req, res) => {
  const { nickname, password, content, unq } = req.body;
  const sql = `insert into reply(unq,nickname,password,comment) values ('${unq}','${nickname}','${password}','${content}')`;
  connection.query(sql, (error, rows) => {
    if (error) throw error;
    res.send(rows);
  });
});

router.get("/get/:unq", async (req, res) => {
  const id = req.params.unq;
  connection.query(
    `select reply_no,comment,nickname,password,group_number,date_format(created_at,'%Y-%m-%d %H:%i:%s') as created_at from reply where unq=${id}`,
    (error, rows) => {
      if (error) throw error;
      res.send(rows);
    }
  );
});

router.get("/totalnumber", async (req, res) => {
  const sql = "SELECT COUNT(*) count FROM reply";
  connection.query(sql, (error, rows) => {
    if (error) throw error;
    res.send(rows);
  });
});

router.delete("/delete/:index", async (req, res) => {
  const id = req.params.index;
  connection.query(`delete from reply where reply_no=${id}`, (error, rows) => {
    if (error) throw error;
    res.send(rows);
  });
});

module.exports = router;
