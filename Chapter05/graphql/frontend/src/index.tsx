// Dependencies
import ReactDOM from 'react-dom'

// Apollo
import { ApolloProvider, ApolloClient, InMemoryCache } from '@apollo/client';

// Components
import AppRoutes from './AppRoutes'

// Config
import config from './config'

// Apollo Client configuration
const client = new ApolloClient({
  uri: config.apiUrl,
  cache: new InMemoryCache()
});

ReactDOM.render(
  <ApolloProvider client={client}>
    <AppRoutes />
  </ApolloProvider>
, document.querySelector('#root'))
