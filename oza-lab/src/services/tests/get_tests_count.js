import TestRepository from '../../domain/tests/tests.repo.js'

export async function getTestsCount (req, res) {
  const testRepository = new TestRepository()
  const test = await testRepository.getTestCount()
  return res.json(test)
}
