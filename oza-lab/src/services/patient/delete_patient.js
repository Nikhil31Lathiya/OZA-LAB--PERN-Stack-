import PatientRepository from '../../domain/patient/patient.repo.js'

export async function deletePatient (req, res) {
  const patientRepository = new PatientRepository()
  const patient = await patientRepository.getPatient(parseInt(req.params.id))
  if (!patient) {
    return res.status(200).json({ message: 'No patient found' })
  }
  const deletePatient = await patientRepository.deletePatient(parseInt(req.params.id))
  if (deletePatient) {
    res.status(204).json({ message: ' Patient deleted successfully' })
  } else {
    res.status(500).json({ message: 'Could not delete a patient' })
  }
}
