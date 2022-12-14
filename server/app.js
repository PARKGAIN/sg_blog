const express = require("express");
const fs = require("fs");
let cors = require("cors");
const path = require("path");
const bodyParser = require("body-parser");

const app = express();

app.use(cors());
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));
app.use(express.json());

app.listen(3000);

app.use("/posts", require("./routes/postRouter"));
