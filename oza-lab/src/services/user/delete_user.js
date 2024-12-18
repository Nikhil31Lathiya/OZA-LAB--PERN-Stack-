import UserRepository from '../../domain/user/user.repository.js'

export async function deleteUser (req, res) {
  const userRepository = new UserRepository()

  const user = await userRepository.getUser(parseInt(req.params.id))
  if (!user) {
    return res.status(404).json({ message: 'User not found' })
  } else {
    const deluser = await userRepository.deleteUser(parseInt(req.params.id))
    if (deluser) {
      return res.status(200).json(deluser)
    }
    res.status(500).json({
      message: 'Something went wrong while deleting user'
    })
  }
}
