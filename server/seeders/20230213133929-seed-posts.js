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
					"https://scontent-cgk1-2.cdninstagram.com/v/t51.2885-15/11906267_1671515619746683_1237948463_n.jpg?stp=dst-jpg_e35&_nc_ht=scontent-cgk1-2.cdninstagram.com&_nc_cat=107&_nc_ohc=ET4DMBDJBLwAX-qDT-J&edm=ALQROFkBAAAA&ccb=7-5&ig_cache_key=MTA1OTMyMjM1NDgyNzQ4MzY1NQ%3D%3D.2-ccb7-5&oh=00_AfBzcroby4pktYQjOrJriVCy6L0MR-5A_EK3AQMVtNlvdQ&oe=63EEDA8E&_nc_sid=30a2ef",
				like: 100,
				createdAt: new Date(),
				updatedAt: new Date(),
			},
			{
				UserId: 2,
				caption: "New Car",
				image:
					"https://scontent-cgk1-2.cdninstagram.com/v/t51.2885-15/11950690_308991979224936_345640148_n.jpg?stp=dst-jpg_e35&_nc_ht=scontent-cgk1-2.cdninstagram.com&_nc_cat=100&_nc_ohc=yuo-YO5_g4UAX-YrCM_&tn=yvFSTrdshoO_MzVx&edm=ALQROFkBAAAA&ccb=7-5&ig_cache_key=MTA1OTMwODE4NTY2MTU2NTAzNQ%3D%3D.2-ccb7-5&oh=00_AfDC-2FZSeN_fnLUEjHUlNIY_ryaDewfxuA8fzrkp1JNTA&oe=63EDFB40&_nc_sid=30a2ef",
				like: 100,
				createdAt: new Date(),
				updatedAt: new Date(),
			},
			{
				UserId: 3,
				caption: "Before / After - Rybnik tonight.",
				image:
					"https://scontent-cgk1-2.cdninstagram.com/v/t51.2885-15/11909202_461512274021020_2138194013_n.jpg?stp=dst-jpg_e35&_nc_ht=scontent-cgk1-2.cdninstagram.com&_nc_cat=104&_nc_ohc=Ngh0xh0WXLcAX9Kqm1v&edm=ALQROFkBAAAA&ccb=7-5&ig_cache_key=MTA1OTMyNjA0NDE0NDM3MTYwNQ%3D%3D.2-ccb7-5&oh=00_AfC20mXJ6DReM0axbLQbmAjpmE3uzHf8IZfmGWdaHkrqeg&oe=63EE6226&_nc_sid=30a2ef",
				like: 100,
				createdAt: new Date(),
				updatedAt: new Date(),
			},
			{
				UserId: 4,
				caption: "Hotel Turkey.",
				image:
					"https://scontent-cgk1-2.cdninstagram.com/v/t51.2885-15/11875537_123827731297227_268751140_n.jpg?stp=dst-jpg_e35&_nc_ht=scontent-cgk1-2.cdninstagram.com&_nc_cat=103&_nc_ohc=XVMAwx9LL8wAX_s_0HY&edm=ALQROFkBAAAA&ccb=7-5&ig_cache_key=MTA1OTI3MzE3NDI2NTkzNjQxNA%3D%3D.2-ccb7-5&oh=00_AfCGvfIdUmCxD19Ha5ZptoSzh_cg2_yArfJMl1W5RzQ92w&oe=63EFC851&_nc_sid=30a2ef",
				like: 100,
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
