const express = require("express");
const multer = require("multer");
const path = require("path");
const cors = require("cors");

const app = express();

app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(express.static(path.join(__dirname + "/images")));

app.use(cors());

app.get("/", (req, res) => {
  res.json({ msg: "ok" });
});

const upload = multer({
  storage: multer.diskStorage({
    destination(req, file, cb) {
      cb(null, "images/uploads");
    },
    filename(req, file, cb) {
      const ext = path.extname(file.originalname);
      console.log("file.originalname", file.originalname);
      cb(null, path.basename(file.originalname, ext) + Date.now() + ext);
    },
  }),
});

app.post("/img", upload.single("img"), (req, res) => {
  console.log("전달받은 파일" + req.file);
  console.log(req.file.filename);

  const IMG_URL = `http://localhost:4000/uploads/${req.file.filename}`;
  res.json({ url: IMG_URL });
});

app.listen(4000, () => {
  console.log("4000번 포트");
});
