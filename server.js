require('dotenv').config();
const app = require('./app');

// const { Sequelize } = require('sequelize');

// // const sequelize = new Sequelize('dumbflix_development', 'root', '', {
// //   host: 'localhost',
// //   dialect: 'mysql',
// // });

// // (async () => {
// //   try {
// //     await sequelize.authenticate();
// //     console.log('Connection has been established successfully.');
// //   } catch (error) {
// //     console.error('Unable to connect to the database:', error);
// //   }
// // })();

const server = app.listen(process.env.PORT || 5000, () => console.log('Server is listening on port 5000'));
