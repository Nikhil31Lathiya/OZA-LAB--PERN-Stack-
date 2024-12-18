import { prisma } from '../../utils/client.js'

class LoginRepository {
  constructor () {
    this.prisma = prisma
  }

  async login (email, password) {
    if (email && password) {
      const userLoggedIn = await this.prisma.user.findMany({ where: { email, password } })
      if (userLoggedIn.length > 0) {
        return userLoggedIn
      }
      return null
    }
  }
}

export default LoginRepository
