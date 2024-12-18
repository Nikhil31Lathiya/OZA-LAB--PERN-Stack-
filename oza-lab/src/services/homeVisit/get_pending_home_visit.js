import HomeVisitRepository from '../../domain/homeVisit/homeVisit.repository.js'

export async function getPendingHomeVisit (req, res) {
  const homeVisitRepository = new HomeVisitRepository()
  const pendingData = await homeVisitRepository.getPendingHomeVisit()
  res.status(200).json(pendingData)
}
