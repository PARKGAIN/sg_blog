const connection = require("../dbConfig");
const router = require("express").Router();

router.post("/write", async (req, res) => {
  console.log(req.body);
  const { nickname, password, content } = req.body;
  const sql = `insert into reply(nickname,password,comment) values ('${nickname}','${password}','${content}')`;
  connection.query(sql, (error, rows) => {
    if (error) throw error;
    res.send(rows);
  });
});

router.get("/get", async (req, res) => {
  connection.query("select * from reply", (error, rows) => {
    if (error) throw error;
    res.send(rows);
  });
});
module.exports = router;
