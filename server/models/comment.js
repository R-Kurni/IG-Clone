"use strict";
const { Model } = require("sequelize");
module.exports = (sequelize, DataTypes) => {
	class Comment extends Model {
		/**
		 * Helper method for defining associations.
		 * This method is not a part of Sequelize lifecycle.
		 * The `models/index` file will call this method automatically.
		 */
		static associate(models) {
			// define association here
			Comment.belongsTo(models.User);
			Comment.belongsTo(models.Post);
		}
	}
	Comment.init(
		{
			UserId: {
				type: DataTypes.INTEGER,
				allowNull: false,
				validate: {
					notNull: {
						msg: "User is required",
					},
					notEmpty: {
						msg: "User is required",
					},
				},
			},
			PostId: {
				type: DataTypes.INTEGER,
				allowNull: false,
				validate: {
					notNull: {
						msg: "Post is required",
					},
					notEmpty: {
						msg: "Post is required",
					},
				},
			},
			comment: {
				type: DataTypes.TEXT,
				allowNull: false,
				validate: {
					notNull: {
						msg: "Comment is required",
					},
					notEmpty: {
						msg: "Comment is required",
					},
				},
			},
		},
		{
			sequelize,
			modelName: "Comment",
		}
	);
	return Comment;
};
