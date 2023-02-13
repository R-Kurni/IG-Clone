"use strict";
/** @type {import('sequelize-cli').Migration} */
module.exports = {
	async up(queryInterface, Sequelize) {
		await queryInterface.createTable("Comments", {
			id: {
				allowNull: false,
				autoIncrement: true,
				primaryKey: true,
				type: Sequelize.INTEGER,
			},
			UserId: {
				allowNull: false,
				type: Sequelize.INTEGER,
				references: {
					model: "Users",
					key: "id",
				},
				onDelete: "cascade",
				onUpdate: "cascade",
			},
			PostId: {
				allowNull: false,
				type: Sequelize.INTEGER,
				references: {
					model: "Posts",
					key: "id",
				},
				onDelete: "cascade",
				onUpdate: "cascade",
			},
			comment: {
				allowNull: false,
				type: Sequelize.TEXT,
			},
			createdAt: {
				allowNull: false,
				type: Sequelize.DATE,
			},
			updatedAt: {
				allowNull: false,
				type: Sequelize.DATE,
			},
		});
	},
	async down(queryInterface, Sequelize) {
		await queryInterface.dropTable("Comments");
	},
};
