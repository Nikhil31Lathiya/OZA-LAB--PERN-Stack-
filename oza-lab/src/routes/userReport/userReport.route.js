import express from 'express'
import { createUserReport, deleteUserReport, getAllUserReport, getUserReport, getUserReportCount, getUserReportUserId, updateUserReport } from '../../services/userReport/index.js'

const userReportRoute = express.Router()

userReportRoute.get('/', (req, res) => getAllUserReport(req, res))
userReportRoute.get('/count', (req, res) => getUserReportCount(req, res))
userReportRoute.get('/:id', (req, res) => getUserReport(req, res))
userReportRoute.post('/byPatientIds', (req, res) => getUserReportUserId(req, res))
userReportRoute.post('/', (req, res) => createUserReport(req, res))
userReportRoute.delete('/:id', (req, res) => deleteUserReport(req, res))
userReportRoute.patch('/:id', (req, res) => updateUserReport(req, res))

export default userReportRoute
