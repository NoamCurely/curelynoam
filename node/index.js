var express = require('express');
var router = express.Router();
var cors = require('cors');
var nodemailer = require('nodemailer');
const dotenv = require("dotenv").config()

const app = express();

app.use(cors({ credentials: true, origin: 'http://localhost:5173' }));

app.use(express.json());

var transport = nodemailer.createTransport({
    host: "smtp.gmail.com",
    service: "gmail",
    port: 465,
    auth: {
        user: process.env.USER_MAIL,
        pass: process.env.PASSWORD
    }
});

app.post("/send", (req, res) => {
    var name = req.body.name
    var lastname = req.body.lastname
    var email = req.body.email
    var message = req.body.message
    var content = `name: ${name} \n lastname: ${lastname} \n email: ${email} \n message: ${message}`
    var mail = {
        from: name,
        to: process.env.USER_MAIL,
        templates: "index",
        subject: "subject",
        text: content
    }

    transport.sendMail(mail, (err, info) => {
        try {
            if (err) {
                return res.status(401);
            } else {
                return res.status(200).send({message: "email send"});
            }
        } catch (error) {
            return res.status(401).send({error});
        }
    });
});

app.use(cors());
app.use('/', router);
app.listen(3002);

const PORT = process.env.PORT || 3001;

app.listen(PORT, () => {
    console.log(`Server is running on ${PORT}`);
});