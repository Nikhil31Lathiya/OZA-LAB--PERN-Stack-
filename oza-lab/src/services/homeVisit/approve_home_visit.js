import HomeVisitRepository from '../../domain/homeVisit/homeVisit.repository.js'

export async function approveHomeVisit (req, res) {
  const homeVisitRepository = new HomeVisitRepository()
  const approve = await homeVisitRepository.approveHomeVisit(req.params.id)
  res.status(200).json(approve)
}
