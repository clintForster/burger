var orm = require("../config/orm");

var burger = {
    all: function (cb) {
        orm.all(function (res) {
            // console.log(res);
            cb(res);
        });
    },
    insert: function (cb) {
        orm.insert(function (burger_name, res) {
            cb(res);
        });
    },
    update: function (cb) {
        orm.update(function (burger_name, res) {
            cb(res);
        });
    }
}

module.exports = burger;