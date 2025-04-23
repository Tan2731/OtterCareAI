import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import LandingPage from './app/src/pages/LandingPage';
import ChatBox from './app/src/pages/ChatBox';
import Login from './app/src/pages/login';
import Signup from './app/src/pages/signup';

const Stack = createStackNavigator();

export default function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="ChatBox">
        <Stack.Screen 
          name="LandingPage" 
          component={LandingPage} 
          options={{ headerShown: false }} // Hiding header for this screen
        />
        <Stack.Screen 
          name="ChatBox" 
          component={ChatBox} 
          options={{ headerShown: false }} // Hiding header for this screen
        />

        <Stack.Screen 
        name="Login" 
        component={Login} 
        options={{ headerShown: false }} 
        />
       <Stack.Screen 
        name="Signup" 
        component={Signup} 
        options={{ headerShown: false }} 
      />


      </Stack.Navigator>
    </NavigationContainer>
  );
}

