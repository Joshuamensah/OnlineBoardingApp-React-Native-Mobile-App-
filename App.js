import { StatusBar } from 'expo-status-bar';
import React, {Component} from 'react';
import { StyleSheet, View} from 'react-native';
import { NavigationContainer } from '@react-navigation/native'
import { createStackNavigator } from '@react-navigation/stack';
import AddToCartScreen from './components/AddToCartScreen';
import OnlineShoppingScreen from './components/OnlineShoppingScreen';
import PaymentSucessfulScreen from './components/PaymentSuccessfulScreen';

const Stack = createStackNavigator();

const App = () => {
  
  return (
    <NavigationContainer>
    <Stack.Navigator 
    screenOptions={{
      headerStyle: {
        backgroundColor: '#7649aa'
      },
      headerTintColor: "#fff"
    }}
    >
      <Stack.Screen 
      options={{
        title: 'Home',
        headerStyle: {
          backgroundColor: '#7649aa'
        },
        headerTintColor: "#fff"
      }}
      name='Online Shopping' 
      component={OnlineShoppingScreen} />
      <Stack.Screen 
      options={{
        title: 'Cart'
      }}
      name='Add To Cart' component={AddToCartScreen} />
      <Stack.Screen 
      options={{
        title: 'Payment'
      }}
      name='Payment Sucessful' component={PaymentSucessfulScreen} />

    </Stack.Navigator>
    <StatusBar style="auto" />
  </NavigationContainer>
  );

  };







export default App;