// src/screens/ComunicadoDetailsScreen.tsx
import React from 'react';
import { View, Text, StyleSheet } from 'react-native';
import { RouteProp, useRoute } from '@react-navigation/native';

type Comunicado = {
    titulo: string;
    data: string;
    conteudo: string;
};

type RouteParams = {
    Detalhes: Comunicado;
};

export const AnnouncementDetailsScreen = () => {
    const route = useRoute<RouteProp<RouteParams, 'Detalhes'>>();
    const { titulo, data, conteudo } = route.params;

    return (
        <View style={styles.container}>
            <Text style={styles.title}>{titulo}</Text>
            <Text style={styles.date}>{data}</Text>
            <Text style={styles.content}>{conteudo}</Text>
        </View>
    );
};

const styles = StyleSheet.create({
    container: {
        padding: 16,
        flex: 1,
        backgroundColor: '#fff',
    },
    title: {
        fontSize: 22,
        fontWeight: 'bold',
        marginBottom: 8,
    },
    date: {
        fontSize: 14,
        color: '#888',
        marginBottom: 16,
    },
    content: {
        fontSize: 16,
        lineHeight: 24,
    },
});
