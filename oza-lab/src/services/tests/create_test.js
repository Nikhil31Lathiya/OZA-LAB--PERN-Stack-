import TestRepository from '../../domain/tests/tests.repo.js'
import { createTestSchema } from '../../utils/tests_validation.js'

export async function createTest (req, res) {
  const testRepository = new TestRepository()
  const { error, value } = createTestSchema(req.body)

  if (error) {
    return res.status(400).json({ [error.name]: error.message })
  }
  const test = await testRepository.createTest(value)
  res.status(200).json(test)
}
