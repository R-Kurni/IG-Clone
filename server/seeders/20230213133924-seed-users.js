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
				username: "jonathan",
				profilePicture:
					"https://thumbs.dreamstime.com/b/male-portrait-studio-serious-young-man-looking-camera-gray-background-39549277.jpg",
				createdAt: new Date(),
				updatedAt: new Date(),
			},
			{
				username: "jake",
				profilePicture:
					"https://thumbs.dreamstime.com/b/young-male-college-student-11031247.jpg",
				createdAt: new Date(),
				updatedAt: new Date(),
			},
			{
				username: "linkinpark",
				profilePicture:
					"https://tse1.mm.bing.net/th?id=OIP.bgm_nkbEpJ0T_UUby2RoGgHaHW&pid=Api&P=0",
				createdAt: new Date(),
				updatedAt: new Date(),
			},
			{
				username: "michelle",
				profilePicture:
					"https://tse4.mm.bing.net/th?id=OIP.k5h_BjD10dgm7MPItuJtAAHaLH&pid=Api&P=0",
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
