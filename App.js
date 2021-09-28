import React from 'react';
import AppNavigator from './src/navigations/Navigator';
import { NavigationContainer, DrawerActions } from '@react-navigation/native';
import { MyDrawer } from './src/navigations/DrawerNavigator';

export default class App extends React.Component {
  render()
  {
    return (
      <NavigationContainer>
      {/* <MyDrawer /> */}
      <AppNavigator/>
    </NavigationContainer>
  );}
}