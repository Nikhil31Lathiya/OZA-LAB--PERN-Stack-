import PatientRepository from '../../domain/patient/patient.repo.js'
import { createPatientSchema } from '../../utils/patient_validations.js'

export async function createPatient (req, res) {
  const patientRepository = new PatientRepository()
  const { error, value } = createPatientSchema(req.body)

  if (error) {
    return res.status(400).json({
      [error.name]: error.message
    })
  }
  const patient = await patientRepository.createPatient(value)
  res.status(200).json(patient)
}
