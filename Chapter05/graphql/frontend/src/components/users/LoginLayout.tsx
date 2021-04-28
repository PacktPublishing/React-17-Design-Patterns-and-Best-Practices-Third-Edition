// Dependencies
import { redirectTo } from '@contentpi/lib'
import { FC, ReactElement, useContext, useEffect } from 'react'

// Contexts
import { UserContext } from '../../contexts/user'

// Components
import Login from './Login'

// Interfaces
interface IProps {
  currentUrl: string
}

const Layout: FC<IProps> = ({ currentUrl }): ReactElement => {
  const { login } = useContext(UserContext)

  return (
    <Login login={login} currentUrl={currentUrl} />
  )
}

export default Layout
