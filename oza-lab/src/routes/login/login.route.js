import express from 'express'
import { login } from '../../services/login/index.js'
const loginRoute = express()

loginRoute.post('/', (req, res) => login(req, res))

export default loginRoute
