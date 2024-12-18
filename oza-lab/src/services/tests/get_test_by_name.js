import TestRepository from '../../domain/tests/tests.repo.js'

export async function getTestByName (req, res) {
  const testRepository = new TestRepository()
  const test = await testRepository.getTestByName(req.params.name)

  if (test) {
    return res.status(200).json(test)
  }
  res.status(404).json({ message: 'Test not found' })
}
