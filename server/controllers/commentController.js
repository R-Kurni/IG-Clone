const { Comment, User } = require("../models");

class CommentController {
	static async getComments(req, res, next) {
		const { id } = req.query;
		try {
			const comments = await Comment.findAll({
				include: [User],
				where: {
					PostId: id,
				},
			});
			res.status(200).json(comments);
		} catch (error) {
			next(error);
		}
	}
}

module.exports = CommentController;
