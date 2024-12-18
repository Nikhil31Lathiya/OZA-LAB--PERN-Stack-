import express from 'express'
import { approveHomeVisit, createHomeVisit, dismissHomeVisit, getAllHomeVisit, getApprovedHomeVisit, getPendingHomeVisit, getUserHomeVisit } from '../../services/homeVisit/index.js'
const homeVisitRoute = express()

homeVisitRoute.post('/', (req, res) => createHomeVisit(req, res))
homeVisitRoute.get('/approved', (req, res) => getApprovedHomeVisit(req, res))
homeVisitRoute.get('/pending', (req, res) => getPendingHomeVisit(req, res))
homeVisitRoute.get('/', (req, res) => getAllHomeVisit(req, res))
homeVisitRoute.get('/user/:userId', (req, res) => getUserHomeVisit(req, res))
homeVisitRoute.patch('/approveHomeVisit/:id', (req, res) => approveHomeVisit(req, res))
homeVisitRoute.patch('/dismissHomeVisit/:id', (req, res) => dismissHomeVisit(req, res))

export default homeVisitRoute
