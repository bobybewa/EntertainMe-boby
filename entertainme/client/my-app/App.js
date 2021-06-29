import * as React from 'react';
import { NavigationContainer } from '@react-navigation/native';
// Tab navigator
import { createMaterialBottomTabNavigator } from '@react-navigation/material-bottom-tabs';
const Tab = createMaterialBottomTabNavigator();
// Screens
import HomePage from './pages/HomePage'
import MoviePage from './pages/MoviesPage'
import SeriesPage from './pages/SeriesPage'
import AddPage from './pages/AddPage'
import DetailPage from './pages/detailPage'
import FavoritePage from './pages/favoritePage'
// Apollo client
import { ApolloProvider } from '@apollo/client/react';
import { client } from './graphql/index'
// Stack navigator
import { createStackNavigator } from '@react-navigation/stack';
const Stack = createStackNavigator()

export default function App() {
  return (  
    <>
    <ApolloProvider client={client}>
      <NavigationContainer>
          <Stack.Navigator>
            <Stack.Screen name="HomePage" component={HomePage}></Stack.Screen>
            <Stack.Screen name="MoviePage" component={MoviePage}></Stack.Screen>
            <Stack.Screen name="SeriesPage" component={SeriesPage}></Stack.Screen>
            <Stack.Screen name="AddPage" component={AddPage}></Stack.Screen>
            <Stack.Screen name="DetailPage" component={DetailPage}></Stack.Screen>
            <Stack.Screen name="FavoritePage" component={FavoritePage}></Stack.Screen>
          </Stack.Navigator>
      </NavigationContainer>
    </ApolloProvider>
    </>
  );
}