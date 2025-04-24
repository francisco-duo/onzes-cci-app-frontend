// src/components/ComunicadoCard.tsx
import React from 'react';
import { View, Text, StyleSheet, TouchableOpacity } from 'react-native';

type Props = {
    titulo: string;
    data: string;
    resumo: string;
};

export const AnnouncementCard = ({ titulo, data, resumo }: Props) => {
    return (
        <View style={styles.card}>
            <Text style={styles.title}>{titulo}</Text>
            <Text style={styles.date}>{data}</Text>
            <Text style={styles.summary}>{resumo}</Text>
            <TouchableOpacity style={styles.button}>
                <Text style={styles.buttonText}>Ver mais</Text>
            </TouchableOpacity>
        </View>
    );
};

const styles = StyleSheet.create({
    card: {
        backgroundColor: '#f5f5f5',
        borderRadius: 12,
        padding: 16,
        marginBottom: 16,
        elevation: 2,
    },
    title: {
        fontSize: 16,
        fontWeight: 'bold',
    },
    date: {
        fontSize: 12,
        color: '#777',
        marginBottom: 4,
    },
    summary: {
        fontSize: 14,
        marginBottom: 8,
    },
    button: {
        alignSelf: 'flex-start',
        backgroundColor: '#e53935',
        paddingVertical: 6,
        paddingHorizontal: 12,
        borderRadius: 6,
    },
    buttonText: {
        color: '#fff',
        fontSize: 13,
        fontWeight: '600',
    },
});
