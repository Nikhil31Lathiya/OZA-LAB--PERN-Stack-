import express from 'express'
import { createTest, deleteTest, getTest, getTestByName, getTests, getTestsCount, updateTest } from '../../services/tests/index.js'

const testRoute = express.Router()

testRoute.get('/', (req, res) => getTests(req, res))

testRoute.get('/count', (req, res) => getTestsCount(req, res))
testRoute.get('/:id', (req, res) => getTest(req, res))
testRoute.get('/name/:name', (req, res) => getTestByName(req, res))
testRoute.post('/', (req, res) => createTest(req, res))
testRoute.delete('/:id', (req, res) => deleteTest(req, res))
testRoute.patch('/:id', (req, res) => updateTest(req, res))

export default testRoute
