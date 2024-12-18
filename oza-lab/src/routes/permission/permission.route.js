import express from 'express'
import { GetPermissionByRoleId } from '../../services/permission/index.js'
const permissionRoute = express.Router()

permissionRoute.get('/:roleId', (req, res) => GetPermissionByRoleId(req, res))

export default permissionRoute
