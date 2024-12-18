import PatientRepository from '../../domain/patient/patient.repo.js'

export async function getPatient (req, res) {
  const patientRepository = new PatientRepository()
  const patient = await patientRepository.getPatient(parseInt(req.params.id))

  if (patient) {
    return res.status(200).json(patient)
  }
  res.status(404).json({ message: 'Patient not found' })
}
