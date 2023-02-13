"use strict";
const { Model } = require("sequelize");
module.exports = (sequelize, DataTypes) => {
	class Post extends Model {
		/**
		 * Helper method for defining associations.
		 * This method is not a part of Sequelize lifecycle.
		 * The `models/index` file will call this method automatically.
		 */
		static associate(models) {
			// define association here
			Post.belongsTo(models.User);
			// Post.belongsTo(models.Comment);
		}
	}
	Post.init(
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
			caption: {
				type: DataTypes.TEXT,
				allowNull: false,
				validate: {
					notNull: {
						msg: "Caption is required",
					},
					notEmpty: {
						msg: "Caption is required",
					},
				},
			},
			image: {
				type: DataTypes.TEXT,
				allowNull: false,
				validate: {
					notNull: {
						msg: "Media is required",
					},
					notEmpty: {
						msg: "Media is required",
					},
				},
			},
			like: {
				type: DataTypes.INTEGER,
				allowNull: false,
				validate: {
					notNull: {
						msg: "Like is required",
					},
					notEmpty: {
						msg: "Like is required",
					},
				},
			},
		},
		{
			sequelize,
			modelName: "Post",
		}
	);
	return Post;
};
