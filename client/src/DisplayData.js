import React from 'react';
import { useQuery, gql } from '@apollo/client';

const QUERY_ALL_USERS = gql`
query GetAllUsers {
  users {
    id
    name
    nationality
    username
    age
  }
}
`

function DisplayData() {
   const {data, loading, error } = useQuery(QUERY_ALL_USERS);
   if(data) {
    console.log(data);
   }
   if (loading) {
    return "<h1>DATA LOADING<h1/>";
   }
   if(error) {
    console.log(error);
   }

}

export default DisplayData;
