const db = require("../config/dbConfig");
const router = require("express").Router();
const sql = require("../config/sql");
router.post("/write", async (req, res) => {
  db.query(
    sql.insertReplyQuery(
      req.body.unq,
      req.body.nickname,
      req.body.password,
      req.body.content
    ),
    (error, rows) => {
      if (error) throw error;
      res.send(rows);
    }
  );
});

router.get("/get/:unq", async (req, res) => {
  db.query(sql.selectReplyQuery(req.params.unq), (error, rows) => {
    if (error) throw error;
    res.send(rows);
  });
});

router.get("/totalnumber", async (req, res) => {
  db.query(sql.selectNumOfReplyQuery, (error, rows) => {
    if (error) throw error;
    res.send(rows);
  });
});

router.delete("/delete/:index", async (req, res) => {
  db.query(sql.deleteReplyQuery(req.params.index), (error, rows) => {
    if (error) throw error;
    res.send(rows);
  });
});

module.exports = router;
