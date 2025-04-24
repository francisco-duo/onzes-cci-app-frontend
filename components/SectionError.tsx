import React from 'react';
import { View, Text, StyleSheet, TouchableOpacity } from 'react-native';

export const SectionError = () => {
    const handleRetry = () => {
        // Aqui futuramente você pode disparar um fetch ou mutation
        console.log('Tentando novamente...');
    };

    return (
        <View style={styles.container}>
            <Text style={styles.message}>Ops, ocorreu um erro ao atualizar :(</Text>
            <TouchableOpacity style={styles.button} onPress={handleRetry}>
                <Text style={styles.buttonText}>Tentar novamente</Text>
            </TouchableOpacity>
        </View>
    );
};

const styles = StyleSheet.create({
    container: {
        backgroundColor: '#ffeaea',
        borderRadius: 12,
        padding: 12,
        marginTop: 8,
    },
    message: {
        color: '#d32f2f',
        fontSize: 14,
        marginBottom: 8,
    },
    button: {
        alignSelf: 'flex-start',
        backgroundColor: '#e53935',
        paddingVertical: 6,
        paddingHorizontal: 12,
        borderRadius: 8,
    },
    buttonText: {
        color: '#fff',
        fontWeight: '600',
        fontSize: 13,
    },
});
