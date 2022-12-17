// const postCtrl = require("../controllers/postCtrl");
const connection = require("../dbConfig");
const router = require("express").Router();

//메인에서 조회
router.get("/", async (req, res) => {
  connection.query("select *  from post", (error, rows) => {
    if (error) throw error;
    res.send(rows);
  });
});

// router.get("/:id", (req, res) => {
//   res.send(req.params.id);
// });
router.post("/write", async (req, res) => {
  const { title, content } = req.body;
  const sql = `insert into post(title,content) values ('${title}','${content}')`;
  connection.query(sql, (error, rows) => {
    if (error) throw error;
    res.send(rows);
  });
});

router.put("/:id", (req, res) => {});
router.delete(":/id", (req, res) => {});

// router.route("/").get(postCtrl.getPosts);

// router.route("/manage/posts").get(postCtrl.getPosts);

// router.route("/write").post(postCtrl.postPosts);

module.exports = router;
