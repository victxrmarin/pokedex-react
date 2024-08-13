
import React from 'react';
import { FlatList, ActivityIndicator, StyleSheet, View, Text } from 'react-native';
import SearchResultItem from './searchResultItem';

const SearchResults = ({ data, loading, error }) => {
    if (loading) {
        return (
            <View style={styles.container}>
                <ActivityIndicator size="large" color="#0000ff" />
            </View>
        );
    }

    if (error) {
        return (
            <View style={styles.container}>
                <Text style={styles.error}>{error}</Text>
            </View>
        );
    }

    return (
        <FlatList
            data={data ? [data] : []}
            keyExtractor={(item) => item.id.toString()}
            renderItem={({ item }) => <SearchResultItem item={item} />}
        />
    );
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
    },
    error: {
        color: 'red',
    },
});

export default SearchResults;
