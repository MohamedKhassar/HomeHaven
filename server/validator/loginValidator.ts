import { body } from 'express-validator';

export const loginValidationRules = () => {
    return [
        body('usernameOrEmail').notEmpty().withMessage('Username or Email field is required'),
        body('password').isLength({ min: 8 }).withMessage('Password must be at least 8 characters long').notEmpty().withMessage('Password is required'),
    ];
};
