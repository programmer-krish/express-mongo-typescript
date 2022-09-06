import Joi from 'joi';
const postSchema = Joi.object({
    first_name: Joi.string().max(30).required(),
    last_name: Joi.string().max(30).required(),
    email: Joi.string().email().required(),
    number: Joi.string(),
    gender: Joi.string(),
    photo: Joi.string()
});

const service = Joi.object().keys({
    first_name: Joi.string().max(30).required(),
    last_name: Joi.string().max(30).required(),
    email: Joi.string().email().required(),
    number: Joi.string(),
    gender: Joi.string(),
    photo: Joi.string()
});

const services = Joi.array().items(service);

export { postSchema, services };
