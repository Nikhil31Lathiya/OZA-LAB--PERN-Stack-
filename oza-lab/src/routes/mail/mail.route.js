import express from 'express'
import { SendApprovalMail, SendMail, SendMailUserReport } from '../../services/mail/index.js'
const emailRoute = express.Router()

emailRoute.post('/', async (req, res) => SendMail(req, res))
emailRoute.post('/userReport', async (req, res) => SendMailUserReport(req, res))
emailRoute.post('/approval', async (req, res) => SendApprovalMail(req, res))

export default emailRoute
