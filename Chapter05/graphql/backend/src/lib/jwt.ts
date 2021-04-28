// Dependencies
import jwt from 'jsonwebtoken'
import { encrypt, setBase64, getBase64 } from '@contentpi/lib'

// Configuration
import { $security } from '../../config'

// Interface
import { IUser } from '../types'

const { secretKey } = $security

export function jwtVerify(accessToken: string, cb: any): void {
  // Verifiying our JWT token using the accessToken and the secretKey
  jwt.verify(
    accessToken,
    secretKey,
    (error: any, accessTokenData: any = {}) => {
      const { data: user } = accessTokenData

      // If we get an error or the user is not found we return false
      if (error || !user) {
        return cb(false)
      }

      // The user data is on base64 and getBase64 will retreive the information as JSON object
      const userData = getBase64(user)

      return cb(userData)
    }
  )
}

export async function getUserData(accessToken: string): Promise<any> {
  // We resolve the jwtVerify promise to get the user data
  const UserPromise = new Promise(resolve =>
    jwtVerify(accessToken, (user: any) => resolve(user))
  )

  // This will get the user data or false (if the user is not connected)
  const user = await UserPromise

  return user
}

export const createToken = async (user: IUser): Promise<string[]> => {
  // Extracting the user data
  const { id, username, password, email, privilege, active } = user

  // Encrypting our password by combining the secretKey and the password and converting it to base64
  const token = setBase64(`${encrypt($security.secretKey)}${password}`)

  // The "token" is an alias of password in this case
  const userData = {
    id,
    username,
    email,
    privilege,
    active,
    token
  }

  // We sign our JWT token and we pass the expiration time which is 7 days in our configuration
  const _createToken = jwt.sign(
    { data: setBase64(userData) },
    $security.secretKey,
    { expiresIn: $security.expiresIn }
  )

  return Promise.all([_createToken])
}
