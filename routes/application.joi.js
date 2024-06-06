import Joi from 'joi';

const schema = Joi.object({
    systemType: Joi.string()
        .valid('new', 'extension', 'dismantling')
        .required(),

    applicationFormEnclosed: Joi.boolean(),

    plannedCommissioningDate: Joi.date().iso().required(),

    ownerPersonId: Joi.integer().min(0).required(),

    operatorPersonId: Joi.integer().min(0).required(),

    locationPersonId: Joi.integer().min(0).required(),

    installerId: Joi.integer().min(0).required(),
})

export default schema;
