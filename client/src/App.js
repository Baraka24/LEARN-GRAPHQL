
import './App.css';
import { ApolloClient, InMemoryCache, ApolloProvider, gql } from '@apollo/client';

function App() {
  const client = new ApolloClient({
    uri: 'http://localhost:4000/ ',
    cache: new InMemoryCache(),
  });
  return(
  <ApolloProvider CLIENT={{client}}>

    <div className="App">
      <h3>List of users:</h3>
    </div>

  </ApolloProvider>
  );
}

export default App;
