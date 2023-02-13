const router = require("express").Router();
const userRouter = require("./userRouter");
const postRouter = require("./postRouter");
const commentRouter = require("./commentRouter");

router.use("/users", userRouter);
router.use("/posts", postRouter);
router.use("/comments", commentRouter);

module.exports = router;
