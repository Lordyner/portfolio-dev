var nodemailer = require("nodemailer");

export async function sendMail(message) {

    var transporter = nodemailer.createTransport({
        host: "pro3.mail.ovh.net",
        port: 587,
        secure: false,
        auth: {
            user: process.env.NODEMAILER_EMAIL,
            pass: process.env.NODEMAILER_PW,
        },
    });

    var mailOptions = {
        from: process.env.NODEMAILER_EMAIL,
        to: process.env.NODEMAILER_EMAIL,
        subject: "Contact Form - thomasandrelubin.fr",
        text: message,
    };

    try {
        const result = await transporter.sendMail(mailOptions);
        return { success: true, info: result };
    } catch (error) {
        return { success: false, error: error };
    }

}