import HomeVisitRepository from '../../domain/homeVisit/homeVisit.repository.js'

export async function getUserHomeVisit (req, res) {
  const homeVisitRepository = new HomeVisitRepository()
  const userHomeVisits = await homeVisitRepository.getUserHomeVisit(parseInt(req.params.userId, 10))
  res.status(200).json(userHomeVisits)
}
