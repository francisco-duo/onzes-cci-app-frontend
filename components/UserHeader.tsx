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
                        source={require('../assets/user-profile.jpeg')}
                        style={styles.avatar}
                    />
                    <View style={styles.textContainer}>
                        <Text style={styles.greeting}>Olá, Francisco!</Text>
                        <View style={styles.roleRow}>
                            <Text style={styles.role}>Sup-CCI</Text>
                            <Ionicons name="chevron-down" size={16} color="#fff" />
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
        height: 200,
        flex: 1,
        justifyContent: 'center',
        paddingInline: 10,
    },
    avatar: {
        width: 60,
        height: 60,
        borderRadius: 100,
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
        color: '#fff',
        marginRight: 4,
    },
});
