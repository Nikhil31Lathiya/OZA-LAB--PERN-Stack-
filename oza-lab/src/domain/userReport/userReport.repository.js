import { PrismaClient } from '@prisma/client'

class UserReportRepository {
  constructor () {
    this.prisma = new PrismaClient()
  }

  getAllUserReport () {
    return this.prisma.userReport.findMany()
  }

  async getUserReport (id) {
    console.log({ inrepo: id })
    const data = await this.prisma.userReport.findFirst({
      where: {
        id: parseInt(id, 10)
      }
    })
    console.log({ inrepo: data })
    await this.prisma.$disconnect()
    return data
  }

  getUserReportUserId (patientIds) {
    return this.prisma.userReport.findMany({
      where: {
        patientId: {
          in: patientIds
        }
      }
    })
  }

  getUserReportCount () {
    return this.prisma.userReport.count()
  }

  createUserReport (body) {
    return this.prisma.userReport.create({
      data: body
    })
  }

  deleteUserReport (id) {
    return this.prisma.userReport.delete({
      where: {
        id
      }
    })
  }

  updateUserReport (id, body) {
    return this.prisma.userReport.update({
      where: {
        id
      },
      data: body
    })
  }
}

export default UserReportRepository
