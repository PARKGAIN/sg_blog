const db = require("../config/dbConfig");
const router = require("express").Router();
const sql = require("../config/sql");

router.get("/:page", async (req, res) => {
  const page = req.params.page;
  db.query(sql.selectPaginatedQuery(page), (error, rows) => {
    if (error) throw error;
    res.send(rows);
  });
});

module.exports = router;
