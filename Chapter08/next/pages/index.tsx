import fetch from 'isomorphic-fetch';

const App = ({ gists }) => (
  <ul>
    {gists.map(gist => (
      <li key={gist.id}>{gist.description}</li>
    ))}
  </ul>
)

App.getInitialProps = async () => {
  const response = await fetch('https://api.github.com/users/gaearon/gists')
  const gists = await response.json()
  
  return {
    gists
  }
}

export default App