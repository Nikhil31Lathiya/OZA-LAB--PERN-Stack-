import Joi from 'joi'

export const createUserSchema = (body) => {
  return Joi.object({
    email: Joi.string().email().required(),
    firstName: Joi.string().min(2).max(30).required(),
    lastName: Joi.string().optional().allow(''),
    gender: Joi.string().valid('male', 'female', 'other').required(),
    title: Joi.string().valid('mr', 'ms', 'mrs').required(),
    dob: Joi.date().required(),
    address: Joi.string().min(2).max(100).required(),
    contact: Joi.string().length(10).pattern(/^[0-9]+$/).required(),
    role: Joi.string()
  }).validate(body)
}

export const deleteUserSchema = (param) => {
  return Joi.object({
    id: Joi.number().required()
  }).validate(param)
}

export const createUserReportSchema = (param) => {
  return Joi.object({
    patientId: Joi.number().required(),
    testId: Joi.number().required(),
    testResult: Joi.object().required()

  }).validate(param)
}
