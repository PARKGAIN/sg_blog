const selectPaginatedQuery = (page) => {
  return `SELECT * FROM post LIMIT ${(parseInt(page) - 1) * 6}, 6`;
};
const selectAllPostQuery =
  "SELECT title,content, DATE_FORMAT(CREATED_AT,'%Y/%M/%D') AS created_at,unq FROM post";
const selectNumOfPostQuery = "SELECT COUNT(*) count FROM post";

const selectPostQuery = (id) => {
  return `SELECT title,content, DATE_FORMAT(CREATED_AT, '%Y/%M/%D %H:%M:%S') AS created_at,unq FROM post WHERE unq=${id}`;
};
const selectReplyQuery = (unq) => {
  return `SELECT reply_no,comment,nickname,password,group_number,DATE_FORMAT(CREATED_AT,'%Y-%M-%D %H:%I:%S') AS created_at FROM reply WHERE unq=${unq}`;
};
const selectNumOfReplyQuery = "SELECT COUNT(*) count FROM REPLY";

const insertReplyQuery = (unq, nickname, password, comment) => {
  return `INSERT INTO reply(unq,nickname,password,comment) VALUES ('${unq}','${nickname}','${password}','${comment}')`;
};
const insertPostQuery = (title, content) => {
  return `INSERT INTO post(title,content) VALUES ('${title}','${content}')`;
};

const updateQuery = (title, content, unq) => {
  return `UPDATE post SET title='${title}', content='${content}' WHERE unq=${unq}`;
};

const deletePostQuery = (unq) => {
  return `DELETE FROM post WHERE unq=${unq}`;
};
const deleteReplyQuery = (unq) => {
  return `DELETE FROM reply WHERE reply_no=${unq}`;
};
module.exports = {
  selectPaginatedQuery,
  selectAllPostQuery,
  selectNumOfPostQuery,
  selectPostQuery,
  selectReplyQuery,
  selectNumOfReplyQuery,
  insertReplyQuery,
  insertPostQuery,
  updateQuery,
  deletePostQuery,
  deleteReplyQuery,
};
