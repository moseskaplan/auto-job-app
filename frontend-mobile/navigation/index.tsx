import React from 'react';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import HomeScreen from '../screens/HomeScreen';
import LoadZoneScreen from '../screens/LoadZoneScreen';
import MatchResultsScreen from '../screens/MatchResultsScreen';
import ReviewScreen from '../screens/ReviewScreen';

export type RootStackParamList = {
  Home: undefined;
  LoadZone: undefined;
  MatchResults: undefined;
  Review: { jobId: number };  // Pass jobId to Review screen
};

const Stack = createNativeStackNavigator<RootStackParamList>();

const Navigation = () => (
  <Stack.Navigator>
    <Stack.Screen name="Home" component={HomeScreen} options={{ title: 'Control Hub' }} />
    <Stack.Screen name="LoadZone" component={LoadZoneScreen} options={{ title: 'Load Zone' }} />
    <Stack.Screen name="MatchResults" component={MatchResultsScreen} options={{ title: 'Match Results' }} />
    <Stack.Screen name="Review" component={ReviewScreen} options={{ title: 'Review Application' }} />
  </Stack.Navigator>
);

export default Navigation;
