import HomeVisitRepository from '../../domain/homeVisit/homeVisit.repository.js'

export async function getAllHomeVisit (req, res) {
  const homeVisitRepository = new HomeVisitRepository()
  const allData = await homeVisitRepository.getAllHomeVisit()
  res.status(200).json(allData)
}
