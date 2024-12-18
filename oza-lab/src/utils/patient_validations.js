import Joi from 'joi'

export const createPatientSchema = (body) => {
  return Joi.object({
    userId: Joi.number().required(),
    testId: Joi.number().required(),
    homeVisit: Joi.boolean().required()
  }).validate(body)
}

export const deletePatientSchema = (param) => {
  return Joi.object({
    id: Joi.number().required()
  }).validate(param)
}
