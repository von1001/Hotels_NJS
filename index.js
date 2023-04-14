const express = require("express");

const app = express();

const DB = require('./database.js');
const initModels = require("./Models/init-models.js");

initModels(DB);

DB.sync();

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}.`)
});

// const sa = require("sequelize-auto");
// var auto = new sa('hotels', 'root', '');

// var auto = new SequelizeAuto('hotels', 'root', '', {
//     host: 'localhost',
//     dialect: 'mysql',
//     directory: './Models', // prevents the program from writing to disk
//     port: 'port',
//     additional: {
//         timestamps: false
//         //...
//     },
//     tables: ['table1', 'table2', 'table3']
//     //...
// })