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
    db.query(sql.updateQuery(req.body.title, req.body.content, req.body.unq));
    res.json({ message: "updated!" });
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
});

router.delete("/delete", async (req, res) => {
  try {
    db.query(sql.deletePostQuery(req.query.unq));
    res.json({ message: "deleted!" });
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
});

router.get("/numofposts", async (req, res) => {
  db.query(sql.selectNumOfPostQuery, (error, rows) => {
    if (error) throw error;
    res.send(rows);
  });
});
module.exports = router;
