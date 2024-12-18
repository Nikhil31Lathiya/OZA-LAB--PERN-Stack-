import PatientRepository from '../../domain/patient/patient.repo.js'

export async function getPatientByUserId (req, res) {
  const patientRepository = new PatientRepository()
  const patient = await patientRepository.getPatientByUserId(parseInt(req.params.userId, 10))

  if (patient) {
    return res.status(200).json(patient)
  }
  res.status(404).json({ message: 'Patient not found' })
}
