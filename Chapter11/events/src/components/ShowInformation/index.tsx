import { FC, useState, ChangeEvent } from 'react'

const ShowInformation: FC = () => {
  const [state, setState] = useState({ name: '', age: 0, show: false })

  const handleOnChange = (e: ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target

    setState({
      ...state,
      [name]: value
    })
  }

  const handleShowInformation = () => {
    setState({
      ...state,
      show: true
    })
  }

  if (state.show) {
    return (
      <div className="ShowInformation">
        <h1>Personal Information</h1>

        <div className="personalInformation">
          <p>
            <strong>Name:</strong> {state.name}
          </p>
          <p>
            <strong>Age:</strong> {state.age}
          </p>
        </div>
      </div>
    )
  }

  return (
    <div className="ShowInformation">
      <h1>Personal Information</h1>

      <p>
        <strong>Name:</strong>
      </p>

      <p>
        <input name="name" type="text" value={state.name} onChange={handleOnChange} />
      </p>

      <p>
        <input name="age" type="number" value={state.age} onChange={handleOnChange} />
      </p>

      <p>
        <button onClick={handleShowInformation}>Show Information</button>
      </p>
    </div>
  )
}

export default ShowInformation
