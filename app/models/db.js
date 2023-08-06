const mysql = require("mysql2");
const dbConfig = process.env.NODE_ENV === 'production' ? require('../config/db.production.js') : require('../config/db.local.js');


var connection = mysql.createPool({
  host: dbConfig.HOST,
  user: dbConfig.USER,
  password: dbConfig.PASSWORD,
  database: dbConfig.DB,
  port: dbConfig.PORT 
});

module.exports = connection;
