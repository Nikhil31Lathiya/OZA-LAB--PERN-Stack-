import express from 'express'
import { verifyToken } from '../../services/token/verify_token.js'
import {
  createUser, deleteUser, getUser, getUserByEmail, getUserByIds, getUsers, getUsersCount, updateUser
} from '../../services/user/index.js'

const userRoute = express.Router()
userRoute.get('/', verifyToken, (req, res) => getUsers(req, res))
userRoute.get('/count', verifyToken, (req, res) => getUsersCount(req, res))
userRoute.post('/byIds', verifyToken, (req, res) => getUserByIds(req, res))
userRoute.get('/:id', verifyToken, (req, res) => getUser(req, res))
userRoute.post('/byEmail', (req, res) => getUserByEmail(req, res))
userRoute.post('/', (req, res) => createUser(req, res))
userRoute.delete('/:id', verifyToken, (req, res) => deleteUser(req, res))
userRoute.patch('/:id', verifyToken, (req, res) => updateUser(req, res))

export default userRoute
