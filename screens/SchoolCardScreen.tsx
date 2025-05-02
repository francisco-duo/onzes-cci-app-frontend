// src/screens/NotasScreen.tsx
import React, { useState } from 'react';
import { View, Text, StyleSheet, TouchableOpacity, FlatList, ScrollView } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';

const DISCIPLINAS = [
    {
        nome: 'Matemática',
        cor: '#4CAF50',
        avaliacoes: [
            { nome: 'Prova 1', nota: 8.5 },
            { nome: 'Trabalho', nota: 9.0 },
        ],
    },
    {
        nome: 'História',
        cor: '#2196F3',
        avaliacoes: [
            { nome: 'Prova 1', nota: 7.0 },
            { nome: 'Apresentação', nota: 8.0 },
        ],
    },
];

const TRIMESTRES = ['1º Trimestre', '2º Trimestre', '3º Trimestre'];

export const SchoolCardScreen = () => {
    const [trimestreSelecionado, setTrimestreSelecionado] = useState(0);
    const [disciplinasAbertas, setDisciplinasAbertas] = useState<number[]>([]);

    const toggleDisciplina = (index: number) => {
        setDisciplinasAbertas((prev) =>
            prev.includes(index) ? prev.filter((i) => i !== index) : [...prev, index]
        );
    };

    return (
        <SafeAreaView style={styles.container} edges={['top', 'left', 'right']}>
            
                <View style={styles.container}>
                    {/* Tabs de trimestre */}
                    <View style={styles.tabs}>
                        {TRIMESTRES.map((label, idx) => (
                            <TouchableOpacity
                                key={idx}
                                onPress={() => setTrimestreSelecionado(idx)}
                                style={[
                                    styles.tab,
                                    trimestreSelecionado === idx && styles.activeTab,
                                ]}
                            >
                                <Text style={trimestreSelecionado === idx ? styles.activeText : styles.tabText}>
                                    {label}
                                </Text>
                            </TouchableOpacity>
                        ))}
                    </View>

                    {/* Lista de disciplinas */}
                    <FlatList
                        data={DISCIPLINAS}
                        keyExtractor={(item) => item.nome}
                        renderItem={({ item, index }) => (
                            <View style={[styles.card, { borderLeftColor: item.cor }]}>
                                <TouchableOpacity onPress={() => toggleDisciplina(index)}>
                                    <Text style={styles.cardTitle}>{item.nome}</Text>
                                </TouchableOpacity>

                                {disciplinasAbertas.includes(index) &&
                                    item.avaliacoes.map((av, i) => (
                                        <View key={i} style={styles.avaliacao}>
                                            <Text>{av.nome}</Text>
                                            <Text style={styles.nota}>{av.nota}</Text>
                                        </View>
                                    ))}
                            </View>
                        )}
                        contentContainerStyle={{ paddingBottom: 20 }}
                    />
                </View>
            
        </SafeAreaView>
    );
};


const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#fff',
        paddingTop: 24,
    },
    tabs: {
        flexDirection: 'row',
        justifyContent: 'space-around',
        marginBottom: 16,
        paddingHorizontal: 8,
    },
    tab: {
        paddingVertical: 8,
        paddingHorizontal: 12,
        borderRadius: 16,
        backgroundColor: '#f0f0f0',
    },
    activeTab: {
        backgroundColor: '#1976D2',
    },
    tabText: {
        color: '#333',
        fontWeight: 'bold',
    },
    activeText: {
        color: '#fff',
        fontWeight: 'bold',
    },
    card: {
        marginHorizontal: 16,
        marginBottom: 12,
        borderLeftWidth: 5,
        backgroundColor: '#f9f9f9',
        padding: 16,
        borderRadius: 10,
        elevation: 2,
    },
    cardTitle: {
        fontSize: 18,
        fontWeight: 'bold',
        marginBottom: 8,
    },
    avaliacao: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        paddingVertical: 4,
    },
    nota: {
        fontWeight: 'bold',
        color: '#444',
    },
});
