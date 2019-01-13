var mysql = require("mysql");

var connection = mysql.createConnection({
    host: "LocalHost",
    port: 3306,
    user: "root",
    password: "",
    database: "burgers_db"
});

var connect = connection.connect(function (err) {
    if (err) {
        console.error("Error connecting: " + err.stack);
        return;
    }
    console.log("Connected as id: " + connection.threadId);
});

module.exports = connect;