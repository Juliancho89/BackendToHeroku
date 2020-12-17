const { Sequelize } = require('sequelize');
const userModel = require('./users')

const sequelize = new Sequelize('Ckk8oGSQRN', 'Ckk8oGSQRN', 'fCA7Q2RvGH', {
    host: 'remotemysql.com',
    port: '3306',
    dialect: 'mysql',
});

const User = userModel(sequelize, Sequelize);

sequelize.sync({ force: false })
    .then(() => {
        console.log('Tablas sincronizadas')
    });

module.exports = {
    User
}