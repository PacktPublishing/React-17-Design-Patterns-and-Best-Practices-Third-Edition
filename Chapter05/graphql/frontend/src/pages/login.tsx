// Dependencies
import { FC, ReactElement } from 'react'
import { isBrowser } from '@contentpi/lib'

// Contexts
import UserProvider from '../contexts/user'

// Components
import LoginLayout from '../components/users/LoginLayout'

interface IProps {
  currentUrl: string
}

const Page: FC<IProps> = ({
  currentUrl = isBrowser() ? window.location.search.replace('?redirectTo=', '') : ''
}): ReactElement => (
  <UserProvider page="login">
    <LoginLayout currentUrl={currentUrl} />
  </UserProvider>
)

export default Page
