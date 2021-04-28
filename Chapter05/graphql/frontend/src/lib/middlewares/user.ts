// Dependencies
import { Request, Response, NextFunction } from 'express'

// Lib
import { getUserData } from '../jwt'

export const isConnected = (isLogged = true, privileges = ['user'], redirectTo = '/') => async (
  req: Request,
  res: Response,
  next: NextFunction
): Promise<void> => {
  // Getting the user information by passing our 'at' cookie
  const user = await getUserData(req.cookies.at)

  if (!user && !isLogged) {
    // This is to allow No connected users
    return next()
  }

  // Allowing just connected users and validating privileges...
  if (user && isLogged) {
    // If the user is connected and is god...
    if (privileges.includes('god') && user.privilege === 'god') {
      return next()
    }

    // If the user is conencted and is admin...
    if (privileges.includes('admin') && user.privilege === 'admin') {
      return next()
    }

    // If the user is connected but is not god or admin.
    res.redirect(redirectTo)
  } else {
    // If the user is not connected
    res.redirect(redirectTo)
  }
}
