const connection = require("../dbConfig");
const router = require("express").Router();

router.post("/write", async (req, res) => {
  console.log(req.body);
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
    `select 'index',nickname,password,comment,date_format(created_at,'%Y-%m-%d %H:%i:%s') as created_at from reply where unq=${id}`,
    (error, rows) => {
      if (error) throw error;
      res.send(rows);
    }
  );
});
module.exports = router;
