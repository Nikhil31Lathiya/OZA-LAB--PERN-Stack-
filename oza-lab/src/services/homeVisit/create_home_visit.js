import HomeVisitRepository from '../../domain/homeVisit/homeVisit.repository.js'

export async function createHomeVisit (req, res) {
  const homeVisitRepository = new HomeVisitRepository()
  const test = await homeVisitRepository.createHomeVisit(req.body)
  res.status(200).json(test)
}
