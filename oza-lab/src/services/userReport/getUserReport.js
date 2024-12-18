import UserReportRepository from '../../domain/userReport/userReport.repository.js'

export async function getUserReport (req, res) {
  console.log(parseInt(req.params.id))
  const userReportRepository = new UserReportRepository()
  const user = await userReportRepository.getUserReport(parseInt(req.params.id))
  if (user) {
    return res.status(200).json(user)
  }
  res.status(404).json({ message: 'Report Not Found' })
}
