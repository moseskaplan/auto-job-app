import React from 'react';
import { render } from '@testing-library/react-native';
import { PreferencesProvider } from '../contexts/PreferencesContext';
import HomeScreen from '../screens/HomeScreen';
import { NavigationContainer } from '@react-navigation/native';
import { Provider as PaperProvider } from 'react-native-paper';

test('renders control hub title', () => {
  const { getByText } = render(
    <PreferencesProvider>
      <PaperProvider>
        <NavigationContainer>
          <HomeScreen navigation={{ navigate: jest.fn() } as any} route={{ key: '', name: 'Home' }} />
        </NavigationContainer>
      </PaperProvider>
    </PreferencesProvider>
  );
  expect(getByText('Control Hub')).toBeTruthy();
});
