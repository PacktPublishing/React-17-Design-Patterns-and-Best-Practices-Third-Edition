// Dependencies
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom'

// Components
import HomePage from './pages/home'
import DashboardPage from './pages/dashboard'
import LoginPage from './pages/login'
import Error404 from './pages/error404'

const AppRoutes = () => (
  <Router>
    <Switch>
      <Route path="/" component={HomePage} exact />
      <Route path="/dashboard" component={DashboardPage} exact />
      <Route path="/login" component={LoginPage} exact />
      <Route component={Error404} />
    </Switch>
  </Router>
)

export default AppRoutes
