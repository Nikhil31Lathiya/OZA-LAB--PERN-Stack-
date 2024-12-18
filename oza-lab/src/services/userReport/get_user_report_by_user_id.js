import UserReportRepository from '../../domain/userReport/userReport.repository.js'

export async function getUserReportUserId (req, res) {
  const userReportRepository = new UserReportRepository()
  const user = await userReportRepository.getUserReportUserId(req.body.patientIds)
  if (user) {
    await userReportRepository.prisma.$disconnect()
    return res.status(200).json(user)
  }
  await userReportRepository.prisma.$disconnect()
  res.status(404).json({ message: 'Report Not Found' })
}
