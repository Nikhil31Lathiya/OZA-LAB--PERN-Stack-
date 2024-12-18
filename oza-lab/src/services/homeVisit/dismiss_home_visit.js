import HomeVisitRepository from '../../domain/homeVisit/homeVisit.repository.js'

export async function dismissHomeVisit (req, res) {
  const homeVisitRepository = new HomeVisitRepository()
  const dismiss = await homeVisitRepository.dismissHomeVisit(req.params.id)
  res.status(200).json(dismiss)
}
