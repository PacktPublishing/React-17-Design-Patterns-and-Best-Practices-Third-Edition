import { FC } from 'react'

type Gist = {
  id: string
  description: string
}

type Props = {
  gists: Gist[]
}
 
const App: FC<Props> = ({ gists }) => ( 
  <ul> 
    {gists.map(gist => ( 
      <li key={gist.id}>{gist.description}</li> 
    ))} 
  </ul> 
)
   
export default App