import Joi from 'joi';
const postSchema = Joi.object({
    first_name: Joi.string().max(30).required(),
    last_name: Joi.string().max(30).required(),
    email: Joi.string().email().required(),
    number: Joi.string(),
    gender: Joi.string(),
    photo: Joi.string()
});



const reqParamasSchemaId = Joi.object({
    id : Joi.string().id().required(),
})

const services = Joi.array().items(postSchema);

const responseSchema = Joi.object().keys({
    id: Joi.string(),
    first_name: Joi.string().max(30).required(),
    last_name: Joi.string().max(30).required(),
    email: Joi.string().email().required(),
    number: Joi.string(),
    gender: Joi.string(),
    photo: Joi.string()
});

export { postSchema, services, responseSchema , reqParamasSchemaId };
