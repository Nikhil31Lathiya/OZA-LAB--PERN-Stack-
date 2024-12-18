import express from 'express'
import { getToken, verifyToken } from '../../services/token/index.js'

const tokenRoute = express.Router()

tokenRoute.post('/', (req, res) => getToken(req, res))
tokenRoute.get('/', (req, res, next) => verifyToken(req, res, next))

export default tokenRoute
