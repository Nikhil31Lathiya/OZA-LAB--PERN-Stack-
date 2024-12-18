import express from 'express'
import userRoute from './user/user.route.js'
import userReportRoute from './userReport/userReport.route.js'
import testRoute from './tests/test.route.js'
import patientRoute from './patient/patient.route.js'
import tokenRoute from './token/token.route.js'
import loginRoute from './login/login.route.js'
import { verifyToken } from '../services/token/verify_token.js'
import emailRoute from './mail/mail.route.js'
import permissionRoute from './permission/permission.route.js'
import homeVisitRoute from './homeVisit/homeVisit.route.js'

const route = express.Router()

// /user endpoint => access user routes
// verify token => will verify the token
route.use('/user', userRoute)
route.use('/userReport', verifyToken, userReportRoute)
route.use('/tests', verifyToken, testRoute)
route.use('/patients', verifyToken, patientRoute)
route.use('/token', tokenRoute)
route.use('/login', loginRoute)
route.use('/verification/mail', emailRoute)
route.use('/permission', permissionRoute)
route.use('/homeVisit', verifyToken, homeVisitRoute)

export default route
