import { theme } from './src/theme';
import { StatusBar as ExpoStatusBar } from 'expo-status-bar';
import React from 'react';
import { ThemeProvider } from 'styled-components/native';
import RestaurantsScreen from './src/features/restaurants/screens/RestaurantsScreen';

export default function App() {
  return (
    <ThemeProvider theme={theme}>
      <RestaurantsScreen />
      <ExpoStatusBar style="auto" />
    </ThemeProvider>
  );
}
