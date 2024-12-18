import express from 'express'
import { createPatient, deletePatient, getPatient, getPatientByUserId, getPatients, getPatientsCount, updatepatient } from '../../services/patient/index.js'
// import { verifyToken } from '../../services/token/verify_token.js'

const patientRoute = express.Router()

patientRoute.get('/', (req, res) => getPatients(req, res))
patientRoute.get('/user/:userId', (req, res) => getPatientByUserId(req, res))
patientRoute.get('/count', (req, res) => getPatientsCount(req, res))
patientRoute.get('/:id', (req, res) => getPatient(req, res))
patientRoute.post('/', (req, res) => createPatient(req, res))
patientRoute.delete('/:id', (req, res) => deletePatient(req, res))
patientRoute.patch('/:id', (req, res) => updatepatient(req, res))

export default patientRoute
