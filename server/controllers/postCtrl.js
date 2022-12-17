const connection = require("../dbConfig");

const postCtrl = {
  getPosts: async (req, res) => {
    connection.query("select *  from post", (error, rows) => {
      if (error) throw error;
      res.send(rows);
    });
  },

  postPosts: async (req, res) => {
    const { title, content } = req.body;
    const sql = `insert into post(title,content) values ('${title}','${content}')`;
    connection.query(sql, (error, rows) => {
      if (error) throw error;
      res.send(rows);
    });
  },

  updatePosts: async (req, res) => {},
  // 글 상세
  // router.get("/:id", auth, async (req, res) => {
  //   // 'id'라는 프로퍼티
  //   try {
  //     const post = await Post.findById(req.params.id);
  //     res.json(post);
  //   } catch (err) {
  //     res.status(500).send("Server Error");
  //   }
  // }),
};

module.exports = postCtrl;
