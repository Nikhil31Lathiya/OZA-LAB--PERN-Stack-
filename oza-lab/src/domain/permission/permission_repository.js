import { prisma } from '../../utils/client.js'

class PermissionRepository {
  constructor () {
    this.prisma = prisma
  }

  async getPermissionByRoleId (roleId) {
    try {
      const PermissionList = []
      const permissions = await this.prisma.permission.findMany({
        where: {
          roleId
        }
      })
      permissions.forEach(permission => {
        PermissionList.push(permission.permissionName)
      })
      return PermissionList
    } catch (error) {
      console.log(error)
    }
  }
}

export default PermissionRepository
