const router = require('express').Router();
const userController = require('../../controllers/UserController.js')
const bcrypt = require('bcryptjs');
const {User} = require('../../models');

router.post('/register', userController.register)
router.post('/login', userController.login)
router.get('/listar', userController.listar)

// //api/user/listar
// router.get('/listar', async (req, res) => {
//     const user = await User.findAll();
//     res.status(200).json(user);
// });

// //api/user/register
// router.post('/register', async (req, res) => {
//         req.body.password = bcrypt.hashSync(req.body.password, 10);
//         const user = await User.create(req.body);
//         res.status(200).json(user);
// });

module.exports = router;