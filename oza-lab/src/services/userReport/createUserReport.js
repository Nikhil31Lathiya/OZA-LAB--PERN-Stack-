import UserReportRepository from '../../domain/userReport/userReport.repository.js'
import { createUserReportSchema } from '../../utils/validations.js'

export async function createUserReport (req, res) {
  const userReportRepository = new UserReportRepository()
  const { error, value } = createUserReportSchema(req.body)
  if (error) {
    return res.status(404).json({
      [error.name]: error.message
    })
  }
  const userReport = await userReportRepository.createUserReport(value)
  res.status(200).json(userReport)
}
