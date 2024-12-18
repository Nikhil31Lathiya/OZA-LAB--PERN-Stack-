import UserReportRepository from '../../domain/userReport/userReport.repository.js'

export async function deleteUserReport (req, res) {
  const userReportRepository = new UserReportRepository()

  const userReportFound = await userReportRepository.getUserReport(parseInt(req.params.id))

  if (!userReportFound) {
    return res.status(404).json({ message: 'No such Report Found' })
  } else {
    const userReport = await userReportRepository.deleteUserReport(parseInt(req.params.id))
    if (userReport) {
      return res.status(200).json(userReport)
    } else {
      return res.status(500).json({ message: 'Someting Went Wrong While deleting user Report' })
    }
  }
}
