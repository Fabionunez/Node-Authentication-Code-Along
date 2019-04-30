const express = require('express');
const router = express.Router();
const authRouter = require('./auth');
const  loginRouter = require('./login')
const logoutRouter = require('./logout');

// * '/signup' 
router.use('/signup', authRouter);


// * '/login' 
router.use('/login', loginRouter);


// * '/logout' 
router.use('/logout', logoutRouter);


module.exports = router;
