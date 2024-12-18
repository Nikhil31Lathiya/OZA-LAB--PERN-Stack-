import { prisma } from '../../utils/client.js'

class UserRepository {
  constructor () {
    this.prisma = prisma
  }

  async getUsers () {
    const usersInfo = await this.prisma.user.findMany()
    await this.prisma.$disconnect()
    return usersInfo
  }

  async getUser (id) {
    const userInfo = await this.prisma.user.findFirst({
      where: {
        id
      }
    })
    await this.prisma.$disconnect()
    return userInfo
  }

  async getUserByIds (ids) {
    const userByIds = await this.prisma.user.findMany({
      where: {
        id: {
          in: ids
        }
      }
    })
    await this.prisma.$disconnect()
    return userByIds
  }

  async getUserByEmail (email) {
    const emailById = await this.prisma.user.findFirst({
      where: {
        email
      }
    })
    await this.prisma.$disconnect()
    return emailById
  }

  async createUser (body) {
    const { role, ...rest } = body
    const userObject = {
      ...rest,
      roleId: role === 'SUPER ADMIN' ? 1 : role === 'ADMIN' ? 2 : 3
    }
    const userAdded = await this.prisma.user.create({
      data: userObject
    })
    await this.prisma.$disconnect()
    return userAdded
  }

  async getUserCount () {
    return this.prisma.user.count()
  }

  async deleteUser (id) {
    const deletedUser = await this.prisma.user.delete({
      where: {
        id
      }
    })
    await this.prisma.$disconnect()
    return deletedUser
  }

  async updateUser (id, body) {
    const { role, ...rest } = body
    const roleId = role === 'SUPER ADMIN' ? 1 : role === 'ADMIN' ? 2 : 3
    const userUpdated = await this.prisma.user.update({
      where: {
        id
      },
      data: { roleId, ...rest }
    })
    await this.prisma.$disconnect()
    return userUpdated
  }
}

export default UserRepository
