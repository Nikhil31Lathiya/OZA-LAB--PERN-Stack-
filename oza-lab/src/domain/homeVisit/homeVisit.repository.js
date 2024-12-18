import { prisma } from '../../utils/client.js'

class HomeVisitRepository {
  constructor () {
    this.prisma = prisma
  }

  async createHomeVisit (body) {
    try {
      return this.prisma.homeVisit.create({
        data: body
      })
    } catch (error) {
      console.log(error)
    }
  }

  async getApprovedHomeVisit () {
    try {
      const approved = await this.prisma.homeVisit.findMany({
        where: {
          isApproved: true
        }
      })
      console.log({ app: approved })
      return approved
    } catch (error) {
      console.log(error)
    }
  }

  async getAllHomeVisit () {
    try {
      return this.prisma.homeVisit.findMany()
    } catch (error) {
      console.log(error)
    }
  }

  async getPendingHomeVisit () {
    try {
      const pending = await this.prisma.homeVisit.findMany({
        where: {
          isApproved: false,
          isActive: true
        }
      })
      console.log(pending)
      return pending
    } catch (error) {
      console.log(error)
    }
  }

  async getUserHomeVisit (userId) {
    try {
      const data = await this.prisma.homeVisit.findMany({
        where: { userId }
      })
      console.log(data)
      await this.prisma.$disconnect()
      return data
    } catch (error) {
      console.log(error)
    }
  }

  async approveHomeVisit (id) {
    try {
      const data = await this.prisma.homeVisit.update({
        where: {
          id: parseInt(id, 10)
        },
        data: {
          isApproved: true
        }
      })
      await this.prisma.$disconnect()
      return data
    } catch (error) {
      console.log(error)
    }
  }

  async dismissHomeVisit (id) {
    try {
      console.log(id)
      const data = await this.prisma.homeVisit.update({
        where: {
          id: parseInt(id, 10)
        },
        data: {
          isApproved: false,
          isActive: false
        }
      })
      await this.prisma.$disconnect()
      return data
    } catch (error) {
      console.log(error)
    }
  }
}

export default HomeVisitRepository
