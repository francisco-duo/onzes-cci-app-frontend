import React from 'react';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { HomeScreen } from '../screens/HomeScreen';
import { AnnouncementScreen } from '../screens/AnnouncementScreen';
import { SchoolCardScreen } from '../screens/SchoolCardScreen';
import { FinancialScreen } from '../screens/FinancialScreen';

const Stack = createNativeStackNavigator();

export const HomeStackNavigator = () => {
    return (
        <Stack.Navigator screenOptions={{ headerShown: false }}>
            <Stack.Screen name="Home" component={HomeScreen} />
            <Stack.Screen name="Announcement" component={AnnouncementScreen} />
            <Stack.Screen name="SchoolCard" component={SchoolCardScreen} />
            <Stack.Screen name="Financial" component={FinancialScreen} />
        </Stack.Navigator>
    );
};
