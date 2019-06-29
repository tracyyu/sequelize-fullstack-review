const Sequelize = require('sequelize');
const connection = new Sequelize('tapractice', 'root', '', {
    host : 'localhost',
    dialect : 'mysql'
});

connection
    .authenticate()
    .then( () => console.log(`Connected to MYSQL DATABSE`))
    .catch( (err) => console.error('Not connected to the database', err));

module.exports = connection;