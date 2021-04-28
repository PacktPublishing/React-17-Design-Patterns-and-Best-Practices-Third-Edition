// Dependencies
import jwt from 'jsonwebtoken'
import { getBase64 } from '@contentpi/lib'

// Configuration
import config from '../config'

// Getting our secretKey
const {
  security: { secretKey }
} = config

export function jwtVerify(accessToken: any, cb: any): void {
  // Validating our accessToken
  jwt.verify(accessToken, secretKey, (error: any, accessTokenData: any = {}) => {
    const { data: user } = accessTokenData

    // If we got an error or the user is not connected we return false
    if (error || !user) {
      return cb(false)
    }

    // Getting the user data
    const userData = getBase64(user)

    return cb(userData)
  })
}

export async function getUserData(accessToken: any): Promise<any> {
  // This is an async function to retrieve the user data from the jwtVerify function
  const UserPromise = new Promise(resolve => jwtVerify(accessToken, (user: any) => resolve(user)))

  const user = await UserPromise

  return user
}
