import jwt from 'jsonwebtoken'

class TokenRepository {
  constructor () {
    this.secret = process.env.SECRET_KEY
  }

  async getToken (email) {
    const token = await jwt.sign({ email }, this.secret)
    console.log('token : ' + token)
    return token
  }

  async verifyToken (token) {
    console.log('token : ' + token + ' secret : ' + this.secret)

    const verified = await jwt.verify(token, this.secret)
    console.log('veridied : ' + JSON.stringify(verified))

    return verified
  }
}

export default TokenRepository
