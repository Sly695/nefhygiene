var express = require('express');
var router = express.Router();
const nodemailer = require('nodemailer')


const contactEmail = nodemailer.createTransport({
  service: 'gmail',
  auth: {
    user: "nefhygiene@gmail.com",
    pass: process.env.MDP_EMAIL,
  },
});

contactEmail.verify((error) => {
  if (error) {
    console.log(error);
  } else {
    console.log("Ready to Send");
  }
});

/* GET home page. */
router.post('/sendData', function (req, res, next) {
  const entreprise = req.body.entreprise;
  const email = req.body.email;
  const superficie = req.body.superficie;
  const propriete = req.body.propriete;
  const pack = req.body.pack;
  const message = req.body.message;
  const number = req.body.number;

  const mail = {
    to: "nefhygiene@gmail.com",
    subject: "Formulaire de contact",
    html: `
          <p>Nom de l'entreprise : ${entreprise}</p>
          <p>Email: ${email}</p>
          <p>Superficie: ${superficie} m2</p>
          <p>Propriete: ${propriete}</p>
          <p>Numéro de téléphone: ${number}
          <p>Pack: ${pack}</p>
          <p>Message: ${message}</p>
          `,
  };
  contactEmail.sendMail(mail, (error) => {
    if (error) {
      res.json({ status: "ERROR" });
    } else {
      res.json({ status: "Votre message a bien été envoyé, merci." });
    }
  });
});

module.exports = router;
