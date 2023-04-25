const {Sequelize} = require("sequelize");
console.log(process.env.MYSQL_URI);
const connection = new Sequelize(process.env.MYSQL_URI, {retry: {match: [/Deadlock/i], max:3}});

connection.authenticate();

console.log("DB is working");

module.exports = connection;
