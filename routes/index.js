const router = require('express').Router();
const apiRouterUser = require('./api/users')

router.use('/user', apiRouterUser); //.com/api/user

module.exports = router;