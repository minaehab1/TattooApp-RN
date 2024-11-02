import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { SafeAreaProvider } from 'react-native-safe-area-context';
import { AppNavigator } from './src/navigation/AppNavigator';
import { AppProvider } from './src/context/AppContext';
import ErrorBoundary from './src/components/ErrorBoundary';
import CheckoutScreen from './src/screens/CheckoutScreen';
import { createNativeStackNavigator } from '@react-navigation/native-stack';

// Define the root stack param list
export type RootStackParamList = {
  Main: undefined;
  Checkout: undefined;
};

const Stack = createNativeStackNavigator<RootStackParamList>();

const App = () => {
  return (
    <ErrorBoundary>
      <AppProvider>
        <SafeAreaProvider>
          <NavigationContainer>
            <Stack.Navigator>
              <Stack.Screen 
                name="Main" 
                component={AppNavigator}
                options={{ headerShown: false }}
              />
              <Stack.Screen 
                name="Checkout" 
                component={CheckoutScreen}
                options={{ 
                  headerShown: true,
                  headerTitle: "Checkout",
                  headerTitleAlign: 'center',
                  headerShadowVisible: false,
                  headerStyle: {
                    backgroundColor: '#FFFFFF',
                  },
                  headerTitleStyle: {
                    fontSize: 20,
                    fontWeight: '600',
                    color: '#373737',
                  },
                }}
              />
            </Stack.Navigator>
          </NavigationContainer>
        </SafeAreaProvider>
      </AppProvider>
    </ErrorBoundary>
  );
};

export default App;
