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
import { Provider } from './src/context/contractor_context';

const client = new ApolloClient({
  cache: new InMemoryCache(),
  uri: "http://192.168.1.126:5000/graphql"
})


export default function App() {
  return (
      <NavigationContainer>
      <ApolloProvider client={client}>
        <Provider>
          <ContractorDetailNavigation/>
        </Provider>
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
