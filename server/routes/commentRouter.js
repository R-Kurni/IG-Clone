const router = require("express").Router();
const CommentController = require("../controllers/commentController");

router.get("/", CommentController.getComments);

module.exports = router;
