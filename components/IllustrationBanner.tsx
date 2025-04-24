import React from 'react';
import { Image, StyleSheet, View } from 'react-native';

export const IllustrationBanner = () => {
    return (
        <View style={styles.wrapper}>
            <Image
                source={require('../assets/IllustrationBanner.png')}
                style={styles.image}
                resizeMode="contain"
            />
        </View>
    );
};

const styles = StyleSheet.create({
    wrapper: {
        position: 'absolute',
        top: -20,
        right: -20,
        width: 120,
        height: 120,
        zIndex: -1, // opcional se quiser que fique ao fundo
    },
    image: {
        width: '100%',
        height: '100%',
    },
});
