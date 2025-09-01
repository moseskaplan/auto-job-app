import React from 'react';
import { Provider as PaperProvider, MD3LightTheme as DefaultTheme, type MD3Theme } from 'react-native-paper';
import { NavigationContainer } from '@react-navigation/native';
import Navigation from './navigation';
import { PreferencesProvider } from './contexts/PreferencesContext';

// Customise the theme: mostly white with subtle grey and a neon green accent
const theme: MD3Theme = {
  ...DefaultTheme,
  colors: {
    ...DefaultTheme.colors,
    primary: '#00FF00',    // Neon green for primary actions
    secondary: '#E0E0E0',  // Light grey for secondary elements
    background: '#FFFFFF', // White background
    surface: '#F5F5F5',    // Off‑white surfaces
    onPrimary: '#000000',  // Black text on primary color
  },
};

export default function App() {
  return (
    <PreferencesProvider>
      <PaperProvider theme={theme}>
        <NavigationContainer>
          <Navigation />
        </NavigationContainer>
      </PaperProvider>
    </PreferencesProvider>
  );
}
