import TokenRepository from '../../domain/token/token.repository.js'

export async function verifyToken (req, res, next) {
  const tokenRepository = new TokenRepository()
  const token = req.headers.authorization || req.headers['x-access-token']
  console.log(token)

  if (!token) {
    return res.status(401).json({ error: 'UnAuthorized User!' })
  }
  try {
    const user = await tokenRepository.verifyToken(token)
    req.user = JSON.stringify(user)

    next()
  } catch (error) {
    console.log('err is : ' + error)

    res.json({ error })
  }
}
