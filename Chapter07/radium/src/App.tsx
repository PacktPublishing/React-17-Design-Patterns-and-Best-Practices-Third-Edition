import Radium from 'radium'
import Button from './components/Button'

function App() {
  return (
    <div className="App">
      <Radium.StyleRoot>
        <Button />
      </Radium.StyleRoot>
    </div>
  )
}

export default Radium(App)