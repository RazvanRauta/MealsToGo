import { theme } from './src/theme';
import { StatusBar as ExpoStatusBar } from 'expo-status-bar';
import React from 'react';
import { ThemeProvider } from 'styled-components/native';
import { useFonts } from 'expo-font';
import AppLoading from 'expo-app-loading';
import { Oswald_400Regular } from '@expo-google-fonts/oswald';
import { Lato_400Regular } from '@expo-google-fonts/lato';

import RestaurantsScreen from './src/features/restaurants/screens/RestaurantsScreen';

export default function App() {
  const [loaded] = useFonts({ Oswald_400Regular, Lato_400Regular });

  if (!loaded) {
    return <AppLoading />;
  }

  return (
    <ThemeProvider theme={theme}>
      <RestaurantsScreen />
      <ExpoStatusBar style="auto" />
    </ThemeProvider>
  );
}
