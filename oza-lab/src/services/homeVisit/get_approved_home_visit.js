import HomeVisitRepository from '../../domain/homeVisit/homeVisit.repository.js'

export async function getApprovedHomeVisit (req, res) {
  console.log('getApproved')
  const homeVisitRepository = new HomeVisitRepository()
  const approvedData = await homeVisitRepository.getApprovedHomeVisit()
  res.status(200).json(approvedData)
}
