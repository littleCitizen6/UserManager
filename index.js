const express = require('express');
const userRouter = require('./Routes/UserRouter');
const usersRouter = require('./Routes/UsersRouter');
const validateUser = require('sessionmanager');

const app = express();

// parse application/x-www-form-urlencoded
app.use(express.urlencoded({ extended: false }));

// parse application/json
app.use(express.json());

//app.use(validateUser.validateUser(req, err, next))

app.use('/User', userRouter);
app.use('/Users', usersRouter);

let server = app.listen(3000, () => console.log('Listening on port 3000...'));