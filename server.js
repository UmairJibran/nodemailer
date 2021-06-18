"use strict";
const nodemailer = require("nodemailer");
const mailAccount = require("./config");

async function main() {
	let transporter = nodemailer.createTransport(mailAccount);

	const options = {
		from: mailAccount.auth.user,
		to: "umair.jibran@productbox.dev", //intended recipient
		subject: "Test", //Subject line
		text: "Welcome Aboard", //email body in text
		html: "<h1>Hello World</h1>", //email body in html
	};

	const info = await transporter.sendMail(options);

	console.log("Message sent to: ", info.messageId);
}

main().catch(console.error);
