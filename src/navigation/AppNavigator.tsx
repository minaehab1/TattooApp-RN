import React from 'react';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import HomeScreen from '../screens/HomeScreen';
import BookingScreen from '../screens/BookingScreen';
import RewardsScreen from '../screens/RewardsScreen';
import PriceCalculatorScreen from '../screens/PriceCalculatorScreen';
import CartScreen from '../screens/CartScreen';
import MainBottomNavbar from '../components/MainBottomNavbar';

const Tab = createBottomTabNavigator();

export const AppNavigator = () => {
  return (
    <Tab.Navigator
      tabBar={(props) => <MainBottomNavbar {...props} />}
      screenOptions={{
        headerShown: true,
        headerStyle: {
          backgroundColor: '#FFFFFF', // Changed to white
          elevation: 0, // Removes shadow on Android
          shadowOpacity: 0, // Removes shadow on iOS
        },
        headerTintColor: '#333', // This is the color of the header text
        headerTitleStyle: {
          fontWeight: 'bold',
        },
      }}
    >
      <Tab.Screen 
        name="Home" 
        component={HomeScreen} 
        options={{ title: 'Home' }}
      />
      <Tab.Screen 
        name="Booking" 
        component={BookingScreen}
      />
      <Tab.Screen 
        name="Rewards" 
        component={RewardsScreen}
      />
      <Tab.Screen 
        name="Calculator" 
        component={PriceCalculatorScreen}
        options={{ title: 'Calculator' }}
      />
      <Tab.Screen 
        name="Cart" 
        component={CartScreen}
      />
    </Tab.Navigator>
  );
};
