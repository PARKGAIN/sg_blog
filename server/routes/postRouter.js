const postCtrl = require("../controllers/postCtrl");
const router = require("express").Router();

router.route("/").get(postCtrl.getPosts);
router.route("/write").post(postCtrl.postPosts);

module.exports = router;
