import { StatusBar } from 'expo-status-bar';
import React, {Component} from 'react';
import { StyleSheet, View} from 'react-native';
import AddToCartScreen from './components/AddToCartScreen';
import OnlineShoppingScreen from './components/OnlineShoppingScreen';
import PaymentSucessfulScreen from './components/PaymentSuccessfulScreen';


const App = () => {
  
  return (
    <View style={styles.container}>

       {/*<AddToCartScreen />*/}
       {/*<OnlineShoppingScreen /> */}
      <PaymentSucessfulScreen />

      <StatusBar style="auto" />
    </View>
  );

  };
const styles = StyleSheet.create({
  container: {
    flex: 1
  }
});


export default App;