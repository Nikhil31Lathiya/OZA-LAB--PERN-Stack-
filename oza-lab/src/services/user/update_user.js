import UserRepository from '../../domain/user/user.repository.js'

export async function updateUser (req, res) {
  const userRepository = new UserRepository()

  const oldUser = await userRepository.getUser(parseInt(req.params.id))
  if (!oldUser) {
    return res.status(404).json({
      message: 'User not found'
    })
  }
  const user = await userRepository.updateUser(parseInt(req.params.id), req.body)
  return res.status(200).json(user)
}
