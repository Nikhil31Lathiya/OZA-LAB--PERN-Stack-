import PatientRepository from '../../domain/patient/patient.repo.js'

export async function updatepatient (req, res) {
  const patientRepository = new PatientRepository()
  const oldpatient = await patientRepository.getPatient(parseInt(req.params.id))
  if (!oldpatient) {
    return res.status(404).json({ message: 'patient not found' })
  }

  const patient = await patientRepository.updatePatient(
    parseInt(req.params.id),
    req.body
  )
  return res.status(200).json(patient)
}
