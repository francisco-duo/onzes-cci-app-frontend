import React from 'react';
import { View, Text, StyleSheet, TouchableOpacity } from 'react-native';
import { MaterialCommunityIcons } from '@expo/vector-icons';
import { useNavigation } from '@react-navigation/native';

type MenuItem = {
    label: string;
    icon: keyof typeof MaterialCommunityIcons.glyphMap;
};

const menuItems: MenuItem[] = [
    { label: 'Agenda', icon: 'calendar-month' },
    { label: 'Comunicados', icon: 'file-document' },
    { label: 'Atendimentos', icon: 'account-voice' },
];

export const MainMenuButtons = () => {
    const navigation = useNavigation();

    return (
        <View style={styles.container}>
            {menuItems.map((item, index) => (
                <TouchableOpacity 
                    key={index} style={styles.button}
                    onPress={() => navigation.navigate('Announcement')}
                >
                    <View style={styles.iconWrapper}>
                        <MaterialCommunityIcons name={item.icon} size={28} color="#fff" />
                    </View>
                    <Text style={styles.label}>{item.label}</Text>
                </TouchableOpacity>
            ))}
        </View>
    );
};

const styles = StyleSheet.create({
    container: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        marginVertical: 12,
    },
    button: {
        alignItems: 'center',
        width: '30%',
    },
    iconWrapper: {
        backgroundColor: '#00bcd4',
        padding: 14,
        borderRadius: 16,
        marginBottom: 6,
    },
    label: {
        fontSize: 14,
        fontWeight: '500',
        color: '#333',
        textAlign: 'center',
    },
});
