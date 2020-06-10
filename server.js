require('dotenv').config();
const app = require('./app');

const server = app.listen(process.env.PORT || 5000, () => console.log('Server is listening on port 5000'));
