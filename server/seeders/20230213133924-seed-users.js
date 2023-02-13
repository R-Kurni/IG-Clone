"use strict";

/** @type {import('sequelize-cli').Migration} */
module.exports = {
	async up(queryInterface, Sequelize) {
		/**
		 * Add seed commands here.
		 *
		 * Example:
		 * await queryInterface.bulkInsert('People', [{
		 *   name: 'John Doe',
		 *   isBetaMember: false
		 * }], {});
		 */
		await queryInterface.bulkInsert("Users", [
			{
				username: "beingsalmankhan",
				profilePicture:
					"https://scontent-cgk1-2.cdninstagram.com/v/t51.2885-19/300852012_636469521334331_6157704135486047454_n.jpg?stp=dst-jpg_s320x320&_nc_ht=scontent-cgk1-2.cdninstagram.com&_nc_cat=1&_nc_ohc=zZuurXy5h6wAX_-BeDV&tn=yvFSTrdshoO_MzVx&edm=AOQ1c0wBAAAA&ccb=7-5&oh=00_AfBGVL0iEetvkUwmOsqmEnA2z_ngFA_-r-UjLr6xPpWAEQ&oe=63EF90F0&_nc_sid=8fd12b",
				createdAt: new Date(),
				updatedAt: new Date(),
			},
			{
				username: "carinstagram",
				profilePicture:
					"https://scontent-cgk1-2.cdninstagram.com/v/t51.2885-19/62065406_428048018033860_303018983638958080_n.jpg?stp=dst-jpg_s320x320&_nc_ht=scontent-cgk1-2.cdninstagram.com&_nc_cat=1&_nc_ohc=PP0d2ZxNzc8AX8V30E-&edm=AOQ1c0wBAAAA&ccb=7-5&oh=00_AfA2NB9UrNygPDXo3B25QP9o9ptFfOSWBKS7o97aocKguQ&oe=63EFE7E4&_nc_sid=8fd12b",
				createdAt: new Date(),
				updatedAt: new Date(),
			},
			{
				username: "linkinpark",
				profilePicture:
					"https://scontent-cgk1-2.cdninstagram.com/v/t51.2885-19/329874780_2428912853938388_4987631040647698535_n.jpg?stp=dst-jpg_s320x320&_nc_ht=scontent-cgk1-2.cdninstagram.com&_nc_cat=1&_nc_ohc=bdiOSeV13CEAX8XQJ63&edm=AOQ1c0wBAAAA&ccb=7-5&oh=00_AfBZkYtC4lNVGlqbwgHLivI-bArp_UfnGf61FnXgSGqkIg&oe=63EF6B10&_nc_sid=8fd12b",
				createdAt: new Date(),
				updatedAt: new Date(),
			},
			{
				username: "mehmetsert",
				profilePicture:
					"https://scontent-cgk1-2.cdninstagram.com/v/t51.2885-19/259085972_946317642971662_1840544321789532340_n.jpg?stp=dst-jpg_s320x320&_nc_ht=scontent-cgk1-2.cdninstagram.com&_nc_cat=110&_nc_ohc=g6-H54_2020AX983nZO&edm=AOQ1c0wBAAAA&ccb=7-5&oh=00_AfDo1nBwnZFHRvSaXPGioA-q3hI82IGxPcUvzaF3ImbmXQ&oe=63EEF86F&_nc_sid=8fd12b",
				createdAt: new Date(),
				updatedAt: new Date(),
			},
		]);
	},

	async down(queryInterface, Sequelize) {
		/**
		 * Add commands to revert seed here.
		 *
		 * Example:
		 * await queryInterface.bulkDelete('People', null, {});
		 */
		await queryInterface.bulkDelete("Users", null, {});
	},
};
