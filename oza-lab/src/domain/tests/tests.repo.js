import { prisma } from '../../utils/client.js'

class TestRepository {
  constructor () {
    this.prisma = prisma
  }

  async createTest (body) {
    try {
      return this.prisma.test.create({
        data: body
      })
    } catch (error) {
      console.log(error)
    }
  }

  async getTests () {
    try {
      return this.prisma.test.findMany()
    } catch (error) {
      console.log(error)
    }
  }

  async getTest (id) {
    try {
      return this.prisma.test.findFirst({ where: { id } })
    } catch (error) {
      console.log(error)
    }
  }

  async getTestCount () {
    try {
      return this.prisma.test.count()
    } catch (error) {
      console.log(error)
    }
  }

  async getTestByName (name) {
    try {
      return this.prisma.test.findFirst({ where: { name } })
    } catch (error) {
      console.log(error)
    }
  }

  async getTestsCount () {
    try {
      const total = await this.prisma.test.count()
      console.log(total)
      return total
    } catch (error) {
      console.log(error)
    }
  }

  async deleteTest (id) {
    try {
      const findTest = await this.prisma.test.findFirst({ where: { id } })
      if (findTest) {
        return this.prisma.test.delete({ where: { id } })
      } else {
        return { message: 'Test not found ' }
      }
    } catch (error) {
      console.log(error)
    }
  }

  async updateTest (id, body) {
    try {
      return this.prisma.test.update({

        where: { id }, data: body
      })
    } catch (error) {
      console.log(error)
    }
  }
}

export default TestRepository
