import UserRepository from '../../domain/user/user.repository.js'

export async function getUserByIds (req, res) {
  const userRepository = new UserRepository()
  const users = await userRepository.getUserByIds(req.body.ids)
  if (users) {
    return res.status(200).json(users)
  }
  res.status(200).json({
    message: 'Users not found'
  })
}
