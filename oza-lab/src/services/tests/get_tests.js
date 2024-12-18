import TestRepository from '../../domain/tests/tests.repo.js'

export async function getTests (req, res) {
  const testRepository = new TestRepository()
  const tests = await testRepository.getTests()
  if (tests.length) {
    return res.status(200).json(tests)
  }
  res.status(200).json({
    message: 'No tests found'
  })
}
