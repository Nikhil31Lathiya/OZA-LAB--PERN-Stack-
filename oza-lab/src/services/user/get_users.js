import UserRepository from '../../domain/user/user.repository.js'

export async function getUsers (req, res) {
  const userRepository = new UserRepository()
  const users = await userRepository.getUsers()
  if (users.length) {
    return res.status(200).json(users)
  }
  res.status(200).json({
    message: 'No user found'
  })
}
