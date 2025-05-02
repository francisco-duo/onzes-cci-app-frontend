import React from 'react';
import { View, Text, StyleSheet, TouchableOpacity, Image } from 'react-native';

type Props = {
    titulo: string;
    data: string;
    resumo: string;
};

export const AnnouncementCard = ({ titulo, data, resumo }: Props) => {
    return (
        <View style={styles.card}>
            <Text style={styles.title}>{titulo}</Text>
            <Image
                source={require('../assets/banner-cci.png')}
                style={styles.image}
            />
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
        backgroundColor: '#EEEEFF',
        borderRadius: 12,
        padding: 16,
        marginBottom: 16,
        shadowColor: '#000',
        shadowOffset: {
            width: 0,
            height: 2,
        },
        shadowOpacity: 0.25,
        shadowRadius: 7.5,
        elevation: 5,
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
        backgroundColor: '#3503fc',
        paddingVertical: 6,
        paddingHorizontal: 12,
        borderRadius: 6,
    },
    buttonText: {
        color: '#fff',
        fontSize: 13,
        fontWeight: '600',
    },
    image: {
        width: '100%',
        height: 50,
        borderRadius: 7.5,
        shadowColor: '#000',
        shadowOffset: {
            width: 0,
            height: 2,
        },
        shadowOpacity: 0.25,
        shadowRadius: 4.68,
        elevation: 5,
    }
});
