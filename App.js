import { theme } from './src/theme';
import { StatusBar as ExpoStatusBar } from 'expo-status-bar';
import React from 'react';
import { ThemeProvider } from 'styled-components/native';
import { useFonts } from 'expo-font';
import AppLoading from 'expo-app-loading';
import { Oswald_400Regular } from '@expo-google-fonts/oswald';
import { Lato_400Regular } from '@expo-google-fonts/lato';
import { NavigationContainer } from '@react-navigation/native';

import BottomTabNavigator from './src/navigation/BottomTabs';

export default function App() {
  const [loaded] = useFonts({ Oswald_400Regular, Lato_400Regular });

  if (!loaded) {
    return <AppLoading />;
  }

  return (
    <ThemeProvider theme={theme}>
      <NavigationContainer>
        <BottomTabNavigator />
      </NavigationContainer>
      <ExpoStatusBar style="auto" />
    </ThemeProvider>
  );
}
