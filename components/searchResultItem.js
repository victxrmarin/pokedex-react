
import React from 'react';
import { View, Text, Image, StyleSheet } from 'react-native';

const SearchResultItem = ({ item }) => {
    return (
        <View style={styles.container}>
            <Text style={styles.title}>{item.name.toUpperCase()}</Text>
            <Image source={{ uri: item.sprites.front_default }} style={styles.image} />
            <Text>ID: {item.id}</Text>
            <Text>{item.types.map(type => type.type.name.toUpperCase()).join(' | ')}</Text>
            <Text>WEIGHT: {item.weight}lbs</Text>
        </View>
    );
};

const styles = StyleSheet.create({
    container: {
        backgroundColor: '#fff',
        padding: 10,
        borderBottomWidth: 1,
        borderBottomColor: '#ccc',
        alignItems: 'center',
        borderRadius: 40
    },
    title: {
        fontWeight: 'bold',
        marginBottom: 10,
    },
    image: {
        width: 200,
        height: 200,
        marginBottom: 10,
    },
});

export default SearchResultItem;
