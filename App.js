import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { StyleSheet, Text, View } from 'react-native';

import { NavigationContainer } from '@react-navigation/native';
import {
  ApolloClient,
  InMemoryCache,
  ApolloProvider,
  HttpLink,
  from,
} from '@apollo/client';
import { onError } from '@apollo/client/link/error'
import ContractorDetailNavigation from './src/navigation/contractor_detail_navigation';

const errorLink = onError(({ graphqlErrors, networkError }) => {
  if(graphqlErrors) {
    graphqlErrors.map(({message, location, path}) => {
      alert(`Graphql error ${message}`);
    });
  }
});

const link = from ([
  errorLink,
  new HttpLink({uri: "http://localhost:5000/graphql"})
]);

const client = new ApolloClient({
  cache: new InMemoryCache(),
  uri: "http://192.168.1.126:5000/graphql"
})


export default function App() {
  return (
      <NavigationContainer>
      <ApolloProvider client={client}>
      <ContractorDetailNavigation/>
      </ApolloProvider>
      </NavigationContainer>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
