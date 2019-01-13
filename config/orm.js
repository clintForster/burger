var connection = require("../config/connection.js");

var orm = {
    all: function selectAll(cb) {
        connection.query("SELECT * FROM burgers", function (response) {
            cb(response);
        });
    },

    insert: function insertOne(burger_name, cb) {
        connection.query("INSERT INTO burgers (burger_name) VALUES (?)", { burger_name }, function (response) {
            cb(response);
        });
    },

    update: function updateOne(burger_name, id, cb) {
        connection.query("UPDATE burgers SET burger_name = ? WHERE id = ?", [{ burger_name, id }], function (response) {
            cb(response);
        });
    }
}

module.exports = orm;