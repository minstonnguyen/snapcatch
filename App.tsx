import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import HomeScreen from './screens/HomeScreen';
import LoginScreen from './screens/LoginScreen';
import CameraScreen from './screens/CameraScreen';
import Map from './screens/Map';
import Catches from './screens/Catches';
import Dashboard from './screens/Dashboard';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';

const Stack = createStackNavigator();
const Tab = createBottomTabNavigator();



const App: React.FC = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="Home">
        <Stack.Screen name="Home" component={HomeScreen} />
        <Stack.Screen name="LoginScreen" component={LoginScreen} />
        {/* Use Dashboard as your MainTabNavigator */}
        <Stack.Screen name="Dashboard" component={Dashboard} />
        {/* Add other screens if needed */}
        <Stack.Screen name="CameraScreen" component={CameraScreen} />
        <Stack.Screen name="Catches" component={Catches} />
        <Stack.Screen name="Map" component={Map} />
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default App;
