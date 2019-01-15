var express = require("express");
var burger = require("../models/burger");

var router = express.Router();

router.get("/", function (req, res) {
    burger.all(function (data) {
        var hbsObject = {
            burger: data
          };

        // console.log(hbsObject);
        res.render("index", hbsObject);
    });
});


router.post("/api/burgers", function (req, res) {
    // console.log(req.body.name);
    burger.insert(req.body.name, function (result) {
        res.json({id: result.insertId});
    });
});

router.put("/api/burgers/:id", function (req, res) {
    var condition = "id = " + req.params.id;

    console.log("condition", condition);

    burger.update({
        devoured: req.body.devoured
    }, condition, function (result) {

    });
});

module.exports = router;