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
};

module.exports = postCtrl;
