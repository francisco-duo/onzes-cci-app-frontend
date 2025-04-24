import React from 'react';

import { View, Text, StyleSheet } from 'react-native';
import { Ionicons, MaterialCommunityIcons } from '@expo/vector-icons';

type Props = {
    title: 'Atendimentos' | 'Comunicados';
};

export const SectionTitle = ({ title }: Props) => {
    const iconName = title === 'Atendimentos' ? 'account-voice' : 'file-document';

    return (
        <View style={styles.container}>
            <View style={styles.left}>
                <MaterialCommunityIcons name={iconName} size={20} color="#e57373" />
                <Text style={styles.title}>{title}</Text>
            </View>
            <Ionicons name="chevron-forward" size={18} color="#1e88e5" />
        </View>
    );
};

const styles = StyleSheet.create({
    container: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
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
