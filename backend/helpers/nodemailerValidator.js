const nodemailer = require("nodemailer");

const nodemailerValidator =async(email,subject,html)=>{
    const transporter = nodemailer.createTransport({
        service: "thehasandev@gmail.com",
        secure: false, 
        auth: {
          user: "thehasandev@gmail.com",
          pass: "fofx ubgp fxbx rypx",
        },
      });

      const info = await transporter.sendMail({
        from: 'thehasandev@gmail.com', 
        to: email, 
        subject: subject,
        html: html, 
      });
}
module.exports = nodemailerValidator