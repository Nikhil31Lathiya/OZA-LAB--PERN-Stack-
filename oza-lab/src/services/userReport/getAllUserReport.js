import UserReportRepository from '../../domain/userReport/userReport.repository.js'

export async function getAllUserReport (req, res) {
  const userReportRepository = new UserReportRepository()

  const usersReport = await userReportRepository.getAllUserReport()

  if (usersReport.length) {
    return res.status(200).json(usersReport)
  }
  res.status(404).json({ message: 'No Reports found' })
}
