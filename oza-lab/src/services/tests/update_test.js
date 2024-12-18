import TestRepository from '../../domain/tests/tests.repo.js'

export async function updateTest (req, res) {
  const testRepository = new TestRepository()
  const oldtest = await testRepository.getTest(parseInt(req.params.id))
  if (!oldtest) {
    return res.status(404).json({ message: 'test not found' })
  }

  const test = await testRepository.updateTest(
    parseInt(req.params.id),
    req.body
  )
  return res.status(200).json(test)
}
