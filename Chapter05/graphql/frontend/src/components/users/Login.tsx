// Dependencies
import { FC, ReactElement, useState, ChangeEvent } from 'react'
import { redirectTo } from '@contentpi/lib'

// Interfaces
import { IUser } from '../../types'

// Styles
import { StyledLogin } from './Login.styled'

interface IProps {
  login(input: any): any
  currentUrl: string
}

const Login: FC<IProps> = ({ login, currentUrl }): ReactElement => {
  // States
  const [values, setValues] = useState({
    email: '',
    password: ''
  })
  const [errorMessage, setErrorMessage] = useState('')
  const [invalidLogin, setInvalidLogin] = useState(false)

  // Methods
  const onChange = (e: ChangeEvent<HTMLInputElement>): any => {
    const {
      target: { name, value }
    } = e

    if (name) {
      setValues((prevValues: any) => ({
        ...prevValues,
        [name]: value
      }))
    }
  }

  const handleSubmit = async (user: IUser): Promise<void> => {
    // Here we execute the login mutation
    const response = await login(user)

    if (response.error) {
      // If the login is invalid...
      setInvalidLogin(true)
      setErrorMessage(response.message)
    } else {
      // If the login is correct...
      redirectTo(currentUrl || '/')
    }
  }

  return (
    <>
      <StyledLogin>
        <div className="wrapper">
          {invalidLogin && <div className="alert">{errorMessage}</div>}
          <div className="form">
            <p>
              <input
                autoComplete="off"
                type="email"
                className="email"
                name="email"
                placeholder="Email"
                onChange={onChange}
                value={values.email}
              />
            </p>

            <p>
              <input
                autoComplete="off"
                type="password"
                className="password"
                name="password"
                placeholder="Password"
                onChange={onChange}
                value={values.password}
              />
            </p>

            <div className="actions">
              <button name="login" onClick={(): Promise<void> => handleSubmit(values)}>
                Login
              </button>
            </div>
          </div>
        </div>
      </StyledLogin>
    </>
  )
}

export default Login
