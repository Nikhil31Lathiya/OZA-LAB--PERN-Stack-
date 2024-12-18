import Joi from 'joi'

export const createTestSchema = (body) => {
  return Joi.object({
    name: Joi.string().min(2).max(40).required(),
    shortName: Joi.string().min(2).max(40).required(),
    isActive: Joi.bool().required(),
    price: Joi.number().required(),
    measurement: Joi.object().required()
  }).validate(body)
}

export const deleteTestSchema = (param) => {
  return Joi.object({
    id: Joi.number().required()
  }).validate(param)
}
