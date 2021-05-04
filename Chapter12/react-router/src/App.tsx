import { FC, ReactNode } from 'react' 
import './App.css'

type Props = {
  children: ReactNode
}

const App: FC<Props> = ({ children }) => ( 
  <div className="App">
    {children}
  </div> 
)

export default App