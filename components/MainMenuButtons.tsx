import React from 'react';
import { View, Text, StyleSheet, TouchableOpacity } from 'react-native';
import { MaterialCommunityIcons } from '@expo/vector-icons';
import { useNavigation } from '@react-navigation/native';
import { SafeAreaView } from 'react-native-safe-area-context';
import { ScrollView } from 'react-native';

type MenuItem = {
    label: string;
    icon: keyof typeof MaterialCommunityIcons.glyphMap;
    name: string;
};

const menuItems: MenuItem[] = [
    { label: 'Comunicados', icon: 'file-document', name: 'Announcement' },
    { label: 'Notas', icon: 'calendar-month', name: 'SchoolCard' },
    { label: 'Financeiro', icon: 'account-voice', name: 'Financial' },
    { label: 'Registro das Catracas', icon: 'account-voice', name: 'asd' },
];

export const MainMenuButtons = () => {
    const navigation = useNavigation();

    return (
        <SafeAreaView>
            <ScrollView horizontal showsHorizontalScrollIndicator={false} contentContainerStyle={styles.container}>
                {menuItems.map((item, index) => (
                    <TouchableOpacity
                        key={index} style={styles.button}
                        onPress={() => navigation.navigate(item.name)}
                    >
                        <View style={styles.iconWrapper}>
                            <MaterialCommunityIcons name={item.icon} size={28} color="#fff" />
                        </View>
                        <Text style={styles.label}>{item.label}</Text>
                    </TouchableOpacity>
                ))}
            </ScrollView>
        </SafeAreaView>
    );
};

const styles = StyleSheet.create({
    container: {
        flexDirection: 'row',
        paddingHorizontal: 12,
    },
    button: {
        alignItems: 'center',
        marginRight: 16,
        width: 90, // ou outro valor fixo que se adapte bem ao layout
    },
    iconWrapper: {
        backgroundColor: '#000080',
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
