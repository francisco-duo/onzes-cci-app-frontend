import React from 'react';

import { createNativeStackNavigator } from '@react-navigation/native-stack';

import { BottomTabNavigator } from '../navigation/BottomTabNavigator';
import { AnnouncementScreen } from '../screens/AnnouncementScreen';

const Stack = createNativeStackNavigator();

export const AppNavigator = () => {
  return (
    <Stack.Navigator screenOptions={{ headerShown: false }}>
      <Stack.Screen name='Tabs' component={ BottomTabNavigator } />

      <Stack.Screen name='Announcement' component={ AnnouncementScreen }/>
    </Stack.Navigator>
  );
}
