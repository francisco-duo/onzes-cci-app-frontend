import React from 'react';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { Ionicons, MaterialCommunityIcons } from '@expo/vector-icons';
import { View, Text } from 'react-native';
import { HomeStackNavigator } from './HomeStackNavigator';

const Tab = createBottomTabNavigator();

const Placeholder = ({ title }: { title: string }) => (
    <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
        <Text>{title}</Text>
    </View>
);

export const BottomTabNavigator = () => {
    return (
        <Tab.Navigator
            screenOptions={({ route }) => ({
                tabBarIcon: ({ color, size }) => {
                    switch (route.name) {
                        case 'Início':
                            return <Ionicons name="home" size={size} color={color} />;
                        case 'Acessar':
                            return <Ionicons name="apps" size={size} color={color} />;
                        case 'Links':
                            return <Ionicons name="star" size={size} color={color} />;
                        case 'Conta':
                            return <MaterialCommunityIcons name="account-circle" size={size} color={color} />;
                        default:
                            return null;
                    }
                },
                tabBarActiveTintColor: '#00bcd4',
                tabBarInactiveTintColor: 'gray',
                headerShown: false,
            })}
        >
            <Tab.Screen name="Início" component={HomeStackNavigator} />
            <Tab.Screen name="Acessar" children={() => <Placeholder title="Acessar" />} />
            <Tab.Screen name="Links" children={() => <Placeholder title="Links" />} />
            <Tab.Screen name="Conta" children={() => <Placeholder title="Conta" />} />
        </Tab.Navigator>
    );
};
