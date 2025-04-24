// src/screens/ComunicadosScreen.tsx
import React from 'react';
import { FlatList, StyleSheet, View } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import { SectionTitle } from '../components/SectionTitle';
import { AnnouncementCard } from '../components/AnnouncementCard';

const MOCK_COMUNICADOS = [
    {
        id: '1',
        titulo: 'Reunião com responsáveis',
        data: '24/04/2025',
        resumo: 'Será realizada nesta sexta às 19h...',
    },
    {
        id: '2',
        titulo: 'Feriado escolar',
        data: '01/05/2025',
        resumo: 'Informamos que não haverá aula no Dia do Trabalho...',
    },
];

export const AnnouncementScreen = () => {
    return (
        <SafeAreaView style={styles.container}>
            <SectionTitle icon="file-document" title="Comunicados" />
            <FlatList
                data={MOCK_COMUNICADOS}
                keyExtractor={(item) => item.id}
                contentContainerStyle={styles.list}
                renderItem={({ item }) => (
                    <AnnouncementCard
                        titulo={item.titulo}
                        data={item.data}
                        resumo={item.resumo}
                    />
                )}
            />
        </SafeAreaView>
    );
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#fff',
    },
    list: {
        padding: 16,
    },
});
