import React, { useEffect, useState } from 'react';
import { StyleSheet, View } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { SafeAreaProvider } from 'react-native-safe-area-context';
import { AppNavigator } from './src/navigation/AppNavigator';
import { AppProvider } from './src/context/AppContext';
import * as Font from 'expo-font';
import { Ionicons } from '@expo/vector-icons';

export default function App() {
  const [fontsLoaded, setFontsLoaded] = useState(false);

  useEffect(() => {
    async function loadFonts() {
      await Font.loadAsync(Ionicons.font);
      setFontsLoaded(true);
    }
    loadFonts();
  }, []);

  if (!fontsLoaded) {
    return null; // Or return a loading screen
  }

  return (
    <AppProvider>
      <SafeAreaProvider>
        <NavigationContainer>
          <View style={styles.container}>
            <AppNavigator />
          </View>
        </NavigationContainer>
      </SafeAreaProvider>
    </AppProvider>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
});
