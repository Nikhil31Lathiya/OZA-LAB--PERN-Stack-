import PatientRepository from '../../domain/patient/patient.repo.js'

export async function getPatientsCount (req, res) {
  const patientRepository = new PatientRepository()
  const patients = await patientRepository.getPatientsCount()
  return res.json(patients)
}
