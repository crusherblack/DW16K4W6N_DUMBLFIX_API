const cookieParser = require('cookie-parser');

const express = require('express');
const app = express();

app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(cookieParser());

app.get('/', (req, res) => {
  res.send('hello');
});

const userRouter = require('./routes/userRoutes');
const authRouter = require('./routes/authRoutes');
const categoryRouter = require('./routes/categoryRoutes');

app.use('/api/v1/users', userRouter);
app.use('/api/v1/auth', authRouter);
app.use('/api/v1/categories', categoryRouter);

module.exports = app;
