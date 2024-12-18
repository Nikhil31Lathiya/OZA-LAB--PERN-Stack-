import UserReportRepository from '../../domain/userReport/userReport.repository.js'

export async function updateUserReport (req, res) {
  const userReportRepository = new UserReportRepository()

  if (req.body.testResult) {
    if (typeof req.body.testResult !== 'object') {
      return res.status(400).json({ message: 'Test Result Should be Object' })
    }
    const oldReport = await userReportRepository.getUserReport(parseInt(req.params.id))

    if (!oldReport) {
      return res.status(404).json({ message: 'No Such Report Found' })
    }
    const newReport = await userReportRepository.updateUserReport(parseInt(req.params.id), req.body)
    return res.status(200).json(newReport)
  }
}
