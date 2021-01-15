const express= require('express');

const controller = require('../controllers/auth');
const validate = require('../validationSchemas/auth');
const router = express.Router();

    router.post('/login', 
        validate.login,
        controller.login);

    router.post('/register',
        validate.register,
        controller.register);

    router.get('/logout', 
        controller.logout);


module.exports = router;