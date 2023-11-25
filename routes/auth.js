/*
    Rutas de usuarios / Auth
    host +/api/auth
*/

//const express = require('express');
//const router = express.Router()
const { Router } = require('express');
const router = Router()

const {crearUsuario,loginUsuario,revalidarToken} = require('../controladores/auth');
const { check } = require('express-validator');
const { validarCampos } = require('../middlewares/validar-campos');

router.post(
    '/new', [
        check('name', 'el nombre es obligatorio').not().isEmpty(),
        check('email', 'el email es obligatorio').isEmail(),
        check('password','El password tiene que tener 5 caracteres').isLength({ min: 5 }),
        validarCampos
    ]
    , 
    crearUsuario );

router.post('/',[
    check('email', 'el email es obligatorio').isEmail(),
    check('password','El password tiene que tener 5 caracteres').isLength({ min: 5 }),
    validarCampos
], loginUsuario );

router.get('/renew', );

module.exports = router;