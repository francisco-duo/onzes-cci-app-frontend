import React from 'react';

import { ScrollView, StyleSheet, View } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';

import { UserHeader } from '../components/UserHeader';
import { MainMenuButtons } from '../components/MainMenuButtons';
import { SectionTitle } from '../components/SectionTitle';
import { SectionError } from '../components/SectionError';

export const HomeScreen = () => {
    return (
        <SafeAreaView>
            <ScrollView contentContainerStyle={styles.container}>
                <View style={styles.headerWrapper}>
                    <UserHeader />
                    {/* <IllustrationBanner /> */}
                </View>

                <MainMenuButtons />

                <View style={styles.section}>
                    <SectionTitle title="Atendimentos" />
                    <SectionError />
                </View>

                <View style={styles.section}>
                    <SectionTitle title="Comunicados" />
                    <SectionError />
                </View>
            </ScrollView>
        </SafeAreaView>
    );
};

const styles = StyleSheet.create({
    container: {
        padding: 0,
        backgroundColor: '#f9f9f9',
        flexGrow: 1,
    },
    headerWrapper: {
        position: 'relative',
        marginBottom: 24,
    },
    section: {
        marginTop: 24,
        padding: 10
    },
});
