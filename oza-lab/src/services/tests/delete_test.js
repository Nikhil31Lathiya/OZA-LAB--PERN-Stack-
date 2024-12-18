import TestRepository from '../../domain/tests/tests.repo.js'

export async function deleteTest (req, res) {
  const testRepository = new TestRepository()

  const test = await testRepository.getTest(parseInt(req.params.id))
  if (!test) {
    return res.status(404).json({ message: 'No test found' })
  }
  const deleteTest = await testRepository.deleteTest(parseInt(req.params.id))
  if (deleteTest) {
    res.status(204).json({ message: ' Test deleted successfully' })
  } else {
    res.status(500).json({ message: 'Could not delete a test' })
  }
}
