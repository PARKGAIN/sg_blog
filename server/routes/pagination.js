const connection = require("../dbConfig");
const router = require("express").Router();

const postPerPage = 6;
router.get("/:page", async (req, res) => {
    const sql =`select * from post limit ${}, 10`

});
