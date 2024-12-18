import UserRepository from '../../domain/user/user.repository.js'

export async function getUserByEmail (req, res) {
  const userRepository = new UserRepository()
  const user = await userRepository.getUserByEmail(req.body.email)
  if (user) {
    return res.status(200).json(user)
  }
  res.status(200).json({
    message: 'User not found'
  })
}
