const express = require("express");
const app = express();
const fs = require("fs");
let cors = require("cors");
const path = require("path");
const bodyParser = require("body-parser");

app.use(cors());
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));
app.use(express.json());

app.listen(3000, function () {
  console.log("서버ison");
});

app.use("/posts", require("./routes/postRouter"));
app.use("/reply", require("./routes/replyRouter"));
