import TokenRepository from '../../domain/token/token.repository.js'

export async function getToken (req, res) {
  const tokenRepository = new TokenRepository()
  const token = await tokenRepository.getToken(req.body.email)
  return res.json({ token })
}
