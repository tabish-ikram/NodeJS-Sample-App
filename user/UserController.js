var express = require('express');
var router = express.Router();
var bodyParser = require('body-parser');
var User = require('./User');

router.use(bodyParser.urlencoded({ extended: true }));

router.post('/', function (req, res) {
    console.log(req);
    User.create({
        name: req.body.name,
        email: req.body.email,
        password: req.body.password

    },
    function (err, user) {
        if (err) return res.status(500).send("There is a problem adding the information to the database.");
        res.status(200).send(user);
    }
)
})

module.exports = router;