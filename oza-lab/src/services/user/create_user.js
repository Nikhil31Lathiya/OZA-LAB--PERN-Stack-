import UserRepository from '../../domain/user/user.repository.js'
import { createUserSchema } from '../../utils/validations.js'
// import bcrypt from 'bcrypt'
import TokenRepository from '../../domain/token/token.repository.js'

export async function createUser (req, res) {
  const userRepository = new UserRepository()
  const tokenRepository = new TokenRepository()
  const { error, value } = createUserSchema(req.body)
  if (error) {
    return res.status(200).json({
      message: error.message
    })
  }
  const userFound = await userRepository.getUserByEmail(req.body.email)
  if (userFound) {
    return res.status(200).json({ message: 'Email Already Exists Please try again using another email' })
  }
  const user = await userRepository.createUser(value)
  const token = await tokenRepository.getToken({ password: req.body.password }, process.env.SECRET_KEY)
  res.status(200).json({ user, token })
}
