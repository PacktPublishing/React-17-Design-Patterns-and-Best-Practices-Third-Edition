// Dependencies
import { AuthenticationError } from 'apollo-server'

// Utils
import { encrypt, isPasswordMatch } from '@contentpi/lib'

// Interface
import { IUser, IModels, IAuthPayload } from '../types'

// JWT
import { createToken } from './jwt'

export const getUserBy = async (
  where: any,
  models: IModels
): Promise<IUser> => {
  // We find a user by a WHERE condition
  const user = await models.User.findOne({
    where,
    raw: true
  })

  return user
}

export const doLogin = async (
  email: string,
  password: string,
  models: IModels
): Promise<IAuthPayload> => {
  // Finding a user by email
  const user = await getUserBy({ email }, models)

  // If the user does not exists we return Invalid Login
  if (!user) {
    throw new AuthenticationError('Invalid Login')
  }

  // We verify that our encrypted password is the same as the user.password value
  const passwordMatch = isPasswordMatch(encrypt(password), user.password)

  // We validate that the user is active
  const isActive = user.active

  // If the password does not match we return invalid login
  if (!passwordMatch) {
    throw new AuthenticationError('Invalid Login')
  }

  // If the account is not active we return an error
  if (!isActive) {
    throw new AuthenticationError('Your account is not activated yet')
  }

  // If the user exists, the password is correct and the accoutn is active, we create the JWT token
  const [token] = await createToken(user)

  // Finally we return the token to Graphql
  return {
    token
  }
}
