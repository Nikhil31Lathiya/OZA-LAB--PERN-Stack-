import UserRepository from '../../domain/user/user.repository.js'

export async function getUsersCount (req, res) {
  const userRepository = new UserRepository()
  const user = await userRepository.getUserCount()
  return res.json(user)
}
