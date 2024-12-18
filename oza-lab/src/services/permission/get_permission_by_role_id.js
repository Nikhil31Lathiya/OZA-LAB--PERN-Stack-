import PermissionRepository from '../../domain/permission/permission_repository.js'

export async function GetPermissionByRoleId (req, res) {
  const permissionRepository = new PermissionRepository()
  const permissions = await permissionRepository.getPermissionByRoleId(parseInt(req.params.roleId, 10))

  if (permissions) {
    return res.status(200).json(permissions)
  }
  res.status(404).json({ message: 'Permission not found' })
}
