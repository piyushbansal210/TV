import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import Find from '../screens/Find';
import Home from '../screens/Home';
import Details from '../screens/Details';
import Episodes from '../screens/Episodes';

const Tab = createStackNavigator();

const Navigation=()=>{
  return(
    <NavigationContainer>
      <Tab.Navigator
        screenOptions={{
          headerShown:false,
        }}
      >
        <Tab.Screen name="Home" component={Home}/>
        <Tab.Screen name="search" component={Find}/>
        <Tab.Screen name="details" component={Details}/>
        <Tab.Screen name="episodes" component={Episodes}/>
      </Tab.Navigator>
    </NavigationContainer>
  )
}

export default Navigation;