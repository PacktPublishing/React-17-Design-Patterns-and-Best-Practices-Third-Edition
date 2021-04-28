import ReactDOM from 'react-dom'
import App from './App';

type Gist = {
  id: string
  description: string
}

declare global { 
  interface Window { 
    gists: Gist[]
  } 
}

ReactDOM.hydrate(<App gists={window.gists} />, document.getElementById('app'))