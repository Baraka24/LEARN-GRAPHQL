
import './App.css';
import { ApolloClient, InMemoryCache, ApolloProvider, gql, useQuery } from '@apollo/client';
import DisplayData from "./DisplayData.js";

function App() {
  const client = new ApolloClient({
    uri: 'http://localhost:4000/graphql ',
    cache: new InMemoryCache(),
  });
  return(
  <ApolloProvider CLIENT={{client}}>

    <div className="App">
      <DisplayData />
    </div>

  </ApolloProvider>
  );
}

export default App;
