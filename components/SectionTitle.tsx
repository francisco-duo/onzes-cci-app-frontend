import React from 'react';

import { View, Text, StyleSheet } from 'react-native';
import { Ionicons, MaterialCommunityIcons } from '@expo/vector-icons';

import { routeMap } from '../navigation/RouteMap';
import { useNavigation } from '@react-navigation/native';

type Props = {
    title: 'Atendimentos' | 'Comunicados';
};

export const SectionTitle = ({ title }: Props) => {
    const iconName = title === 'Atendimentos' ? 'account-voice' : 'file-document';
    const navigation = useNavigation();

    return (
        <View style={styles.container}>
            <View style={styles.left}>
                <MaterialCommunityIcons name={iconName} size={20} color="#000080" />
                <Text style={styles.title}>{title}</Text>
            </View>
            <Ionicons 
                name="chevron-forward" size={18} color="#000080"
                onPress={() => navigation.navigate(routeMap[title])}    
            />
        </View>
    );
};

const styles = StyleSheet.create({
    container: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
        padding: 10
    },
    left: {
        flexDirection: 'row',
        alignItems: 'center',
    },
    title: {
        fontSize: 16,
        fontWeight: '600',
        marginLeft: 6,
        color: '#333',
    },
});
