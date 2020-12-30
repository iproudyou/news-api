const { Joi } = require('celebrate');

const signInSchema = {
    body: Joi.object().keys({
        email: Joi.string()
            .required()
            .email()
            .error(new Error('Please provide a valid email')),

        password: Joi.string()
            .min(8)
            .max(30)
            .pattern(new RegExp('^[a-zA-Z0-9]{8,30}$'))
            .required(),

        remember: Joi.boolean()

    })
}

const signUpSchema = {
    body: Joi.object().keys({
        firstName: Joi.string()
            .required()
            .max(30),

        lastName: Joi.string()
            .required()
            .max(30),

        email: Joi.string()
            .required()
            .email()
            .error(new Error('Please provide a valid email!')),

        password: Joi.string()
            .min(8)
            .max(30)
            .pattern(new RegExp('^[a-zA-Z0-9]{8,30}$'))
            .required(),

        phoneNumber: Joi.string()
            .pattern(new RegExp('^[0-9]+$'))
            .allow(''),
        
        remember: Joi.boolean()
    })
}

module.exports = {
    signInSchema,
    signUpSchema
}

