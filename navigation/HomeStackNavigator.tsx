import React from 'react';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { HomeScreen } from '../screens/HomeScreen';
import { AnnouncementScreen } from '../screens/AnnouncementScreen';

const Stack = createNativeStackNavigator();

export const HomeStackNavigator = () => {
    return (
        <Stack.Navigator screenOptions={{ headerShown: false }}>
            <Stack.Screen name="Home" component={HomeScreen} />
            <Stack.Screen name="Announcement" component={AnnouncementScreen} />
        </Stack.Navigator>
    );
};
