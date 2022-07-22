//input control

const { body, validationResult } = require('express-validator');

const registerRules = () => [
    body('name', 'Name is required').notEmpty(),
    body('lastName', 'lastName is required').notEmpty(),
    body('email', 'email is required').isEmail(),
    body('password', 'password must contain 8 characters').isLength({
        min: 8
    }),

];

const loginRules = () => [
    body('email', 'email is required').isEmail(),
    body('password', 'password must contain 6 characters').isLength({
        min: 6
    }),
];

const categoryRules = () => [
    body('name', 'Name is required').notEmpty()
];

const validator = (req, res, next) => {
    const errors = validationResult(req);
    if (!errors.isEmpty) {
        return res.status(400).json({
            errors: errors.array().map((el) => ({
                msg: el.msg,
            })),
        });
    }
    next();
};
module.exports = { registerRules, loginRules, validator, categoryRules };