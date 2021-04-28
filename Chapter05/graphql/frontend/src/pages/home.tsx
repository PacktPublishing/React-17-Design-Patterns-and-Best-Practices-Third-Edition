import { Link } from 'react-router-dom'

const Page = () => (
  <div className="home">
    <h1>Home</h1>

    <ul>
      <li><Link to="/dashboard">Go to Dashboard</Link></li>
    </ul>
  </div>
)

export default Page
