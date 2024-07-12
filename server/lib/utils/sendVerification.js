const express = require('express');
const nodemailer = require('nodemailer');
const crypto = require('crypto');

function generateToken() {
	return crypto.randomBytes(30).toString("hex");
}


// Send verification email
async function sendVerificationEmail(email, token) {
	let transporter = nodemailer.createTransport({
		// Configure your email service
	});

	let info = await transporter.sendMail({
		from: '"Your App" <noreply@yourapp.com>',
		to: email,
		subject: "Email Verification",
		html: `<p>Click <a href="http://yourapp.com/verify/${token}">here</a> to verify your email.</p>`,
	});
}


