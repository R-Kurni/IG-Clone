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
		await queryInterface.bulkInsert("Comments", [
			{
				UserId: 2,
				PostId: 1,
				comment: "Very Nice",
				createdAt: new Date(),
				updatedAt: new Date(),
			},
			{
				UserId: 3,
				PostId: 1,
				comment: "Big fan",
				createdAt: new Date(),
				updatedAt: new Date(),
			},
			{
				UserId: 1,
				PostId: 2,
				comment: "Nice Car",
				createdAt: new Date(),
				updatedAt: new Date(),
			},
			{
				UserId: 1,
				PostId: 3,
				comment: "Awesome",
				createdAt: new Date(),
				updatedAt: new Date(),
			},
			{
				UserId: 2,
				PostId: 3,
				comment: "Amazing",
				createdAt: new Date(),
				updatedAt: new Date(),
			},
			{
				UserId: 4,
				PostId: 3,
				comment: "Lovely",
				createdAt: new Date(),
				updatedAt: new Date(),
			},
			{
				UserId: 2,
				PostId: 4,
				comment: "Outstanding shot",
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
		await queryInterface.bulkDelete("Comments", null, {});
	},
};
