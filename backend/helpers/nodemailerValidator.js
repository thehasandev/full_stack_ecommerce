const nodemailer = require("nodemailer");
const nodemailerValidator =async(email,otp)=>{
    const transporter = nodemailer.createTransport({
        service: "thehasandev@gmail.com",
        secure: false, // Use `true` for port 465, `false` for all other ports
        auth: {
          user: "thehasandev@gmail.com",
          pass: "fofx ubgp fxbx rypx",
        },
      });

      const info = await transporter.sendMail({
        from: 'thehasandev@gmail.com', // sender address
        to: email, // list of receivers
        subject: "Email Verification",
        html: `<h3>Please verification your email</h3> </br> <h3>Otp : ${otp}</h3> `, // html body
      });
}
module.exports = nodemailerValidator