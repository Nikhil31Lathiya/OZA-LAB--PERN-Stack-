import UserRepository from '../../domain/user/user.repository.js'

export async function getUser (req, res) {
  const userRepository = new UserRepository()
  const user = await userRepository.getUser(parseInt(req.params.id))
  if (user) {
    return res.status(200).json(user)
  }
  res.status(200).json({
    message: 'User not found'
  })
}
