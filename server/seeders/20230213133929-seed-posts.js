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
		await queryInterface.bulkInsert("Posts", [
			{
				UserId: 1,
				caption:
					"Logon this is the logo of PRDP, matlab Prem Ratan Dhan Payo. Coming this Diwali",
				image:
					"https://images.hungama.com/c/1/140/249/17354555/17354555_1280x800.jpg",
				like: 702,
				createdAt: new Date(),
				updatedAt: new Date(),
			},
			{
				UserId: 2,
				caption: "New Car",
				image:
					"https://i0.wp.com/gomechanic.in/blog/wp-content/uploads/2019/11/68153129.jpg?fit=1200%2C900&ssl=1",
				like: 533,
				createdAt: new Date(),
				updatedAt: new Date(),
			},
			{
				UserId: 3,
				caption: "Rybnik tonight.",
				image:
					"https://tse3.mm.bing.net/th?id=OIP.aRUVeKaXyAiw669VTEAOzgHaE8&pid=Api&P=0",
				like: 989,
				createdAt: new Date(),
				updatedAt: new Date(),
			},
			{
				UserId: 4,
				caption: "Hotel Turkey.",
				image:
					"https://www.holidayhypermarket.co.uk/wp-content/uploads/2020/01/KAYA_PALAZZO_HOTEL_TUR_BEL_2519.jpg",
				like: 477,
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
		await queryInterface.bulkDelete("Posts", null, {});
	},
};
