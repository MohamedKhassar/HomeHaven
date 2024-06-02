import { body } from 'express-validator';

export const userValidationRules = () => {
    return [
        body('username').isString().withMessage('Username must be a string').notEmpty().withMessage('Username is required'),
        body('email').notEmpty().withMessage('Email is required').isEmail().withMessage('Must be a valid email'),
        body('password').isLength({ min: 8 }).withMessage('Password must be at least 8 characters long').notEmpty().withMessage('Password is required'),
        body('phone').optional().isString().withMessage('Phone must be a string'),
        body('isAdmin').optional().isBoolean().withMessage('isAdmin must be a boolean'),
        body('wishList').optional().isArray().withMessage('WishList must be an array').custom((value) => {
            if (value.some((item: string) => typeof item !== 'string')) {
                throw new Error('All items in wishList must be strings');
            }
            return true;
        })
    ];
};
