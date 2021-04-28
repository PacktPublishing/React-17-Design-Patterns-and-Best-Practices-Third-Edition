// Dependencies
import { render } from 'react-dom'
import { BrowserRouter as Router } from 'react-router-dom'

// Routes
import AppRoutes from './routes'

render( 
  <Router>
    <AppRoutes />
  </Router>, 
  document.getElementById('root')
)