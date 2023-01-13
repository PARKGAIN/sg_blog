const db = require("../config/dbConfig");
const router = require("express").Router();
const sql = require("../config/sql");
router.get("/manage", async (req, res) => {
  db.query(sql.selectAllPostQuery, (error, rows) => {
    if (error) throw error;
    res.send(rows);
  });
});

router.post("/write", async (req, res) => {
  const { title, content } = req.body;
  db.query(sql.insertPostQuery(title, content), (error, rows) => {
    if (error) throw error;
    res.send(rows);
  });
});

router.get("/manage/:unq", async (req, res) => {
  const id = req.params.unq;
  db.query(sql.selectPostQuery(id), (error, rows) => {
    if (error) throw error;
    res.send(rows);
  });
});

router.put("/update", async (req, res) => {
  try {
    const { title, content, unq } = req.body;
    db.query(sql.updateQuery(title, content, unq));
    res.json({ message: "updated!" });
  } catch (error) {
    res.status(500).send("update error");
  }
});

router.delete("/delete", async (req, res) => {
  try {
    const unq = req.query.unq;
    db.query(sql.deletePostQuery(unq));
    res.json({ message: "deleted!" });
  } catch (error) {
    res.status(500).send("delete error");
  }
});

router.get("/numofposts", async (req, res) => {
  db.query(sql.selectNumOfPostQuery, (error, rows) => {
    if (error) throw error;
    res.send(rows);
  });
});
module.exports = router;
