const models = require('../models');
const bcrypt = require('bcryptjs');
const jwt = require('jsonwebtoken');

exports.login = async (req, res, next) => {
    try {
        const user = await models.User.findOne({ where: { email: req.body.email } });
        if (user) {
            const passwordIsValid = bcrypt.compareSync(req.body.password, user.password);
            if (passwordIsValid) {
                const token = jwt.sign({
                    id: user.id,
                    name: user.username,
                    email: user.email,
                    rol: user.rol
                }, 'config.secret', {
                    expiresIn: 86400,
                }
                );
                res.status(200).send({
                    auth: true,
                    tokenReturn: token,
                    user: user // es mejor no enviar esta información sino únicamente el token
                })
            } else {
                res.status(401).json({
                    error: 'Error en el usuario o contraseña'
                })
            }
        } else {
            res.status(404).json({
                error: 'Error en el usuario o contraseña'
            })
        }
    } catch (error) {
        res.status(500).send({
            message: 'Error -> '
        })

        next(error);
    }
};

//api/user/register
exports.listar = async(req, res, next) =>{
    try {
        const user = await models.User.findAll();
        res.status(200).json(user);
    } catch (error) {
        next(error);
    }
}

//api/user/register
exports.register = async (req, res, next) => {
    try {
        req.body.password = bcrypt.hashSync(req.body.password, 10);
        const user = await models.User.create(req.body);
        res.status(200).json(user);
    } catch (error) {
        next(error);
    }
};