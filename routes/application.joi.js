import Joi from 'joi';

const schema = Joi.object({
    systemType: Joi.string()
        .valid('new', 'extension', 'dismantling')
        .required(),

    applicationFormEnclosed: Joi.boolean(),

    plannedCommissioningDate: Joi.date().iso().required(),

    ownerPersonId: Joi.number().integer().min(0).required(),

    operatorPersonId: Joi.number().integer().min(0).required(),

    locationPersonId: Joi.number().integer().min(0).required(),

    installerId: Joi.number().integer().min(0).required(),
})

export default schema;
