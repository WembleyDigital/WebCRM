const express = require('express')
const app = express()
const morgan = require('morgan')
const Sequelize = require('sequelize');
const mongoose = require('mongoose');
const cors = require('cors')


const connection = mysql.
const sequelize = new Sequelize('database', 'username','password',{
    host: 'localhost',
    dialect: 'mysql'
}) ;

sequelize.authenticate().then(
    () => {
       console.log('Connection has been established successfully.');
    })
    .catch((eer) => {
        console.error('Unable to connect to the database', err);
    });






const PORT = 5000

app.use(express.json())
app.use(morgan('dev'))








app.listen(PORT, () => console.log(`listening on port ${PORT}`))
