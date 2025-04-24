import React from 'react';

import { View, Text, StyleSheet, Image, ImageBackground } from 'react-native';
import { Ionicons } from '@expo/vector-icons';

export const UserHeader = () => {
    return (
            <ImageBackground
                source={require('../assets/IllustrationBanner.png')}
                resizeMode='cover'
                style={styles.image}
            >
                <View style={styles.container}>
                    <Image
                        source={require('../assets/icon.png')}
                        style={styles.avatar}
                    />
                    <View style={styles.textContainer}>
                        <Text style={styles.greeting}>Olá, Francisco!</Text>
                        <View style={styles.roleRow}>
                            <Text style={styles.role}>Sup-CCI</Text>
                            <Ionicons name="chevron-down" size={16} color="#000" />
                        </View>
                    </View>
                </View>
            </ImageBackground>
    );
};

const styles = StyleSheet.create({
    container: {
        flexDirection: 'row',
        alignItems: 'center',
    },
    image: {
        height: 150,
        flex: 1,
        justifyContent: 'center',
        paddingInline: 10
    },
    avatar: {
        width: 48,
        height: 100,
        borderRadius: 24,
        backgroundColor: '#ddd',
        marginRight: 12,
    },
    textContainer: {
        flex: 1,
    },
    greeting: {
        fontSize: 16,
        fontWeight: 'bold',
        color: '#333',
    },
    roleRow: {
        flexDirection: 'row',
        alignItems: 'center',
        marginTop: 2,
    },
    role: {
        fontSize: 14,
        color: '#666',
        marginRight: 4,
    },
});
