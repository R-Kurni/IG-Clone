const router = require("express").Router();
const PostController = require("../controllers/postController");

router.get("/", PostController.getPosts);

module.exports = router;
