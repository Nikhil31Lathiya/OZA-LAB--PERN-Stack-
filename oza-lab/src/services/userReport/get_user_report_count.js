import UserReportRepository from '../../domain/userReport/userReport.repository.js'

export async function getUserReportCount (req, res) {
  const userReportRepository = new UserReportRepository()

  const usersReport = await userReportRepository.getUserReportCount()
  return res.json(usersReport)
}
