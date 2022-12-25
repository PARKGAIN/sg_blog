const connection = require("../dbConfig");
const router = require("express").Router();

const postPerPage = 6;
router.get("/:page", async (req, res) => {
  const received = req.params;
  const page = parseInt(received.page);
  const startNumber = (page - 1) * postPerPage;
  const sql = `select * from post limit ${startNumber}, 6`;
  connection.query(sql, (error, rows) => {
    if (error) throw error;
    res.send(rows);
  });
});

module.exports = router;
