import TokenRepository from '../../domain/token/token.repository.js'

import UserRepository from '../../domain/user/user.repository.js'

export async function login (req, res) {
  const userRepository = new UserRepository()
  const tokenRepository = new TokenRepository()

  const { email } = req.body
  const user = await userRepository.getUserByEmail(email)
  if (!user) {
    return res.json({ message: 'Account doesn`t exist. Please sign up.' })
  }
  if (user) {
    const token = await tokenRepository.getToken(
      { email: req.body.email },
      process.env.SECRET_KEY
    )
    return res.json({ token, user })
  }
}
