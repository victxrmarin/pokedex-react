
import React from 'react';
import { TextInput, TouchableOpacity, StyleShee, View } from 'react-native';

const SearchInput = ({ query, setQuery, fetchResults }) => {
    return (
        <View style={styles.container}>
            <TextInput
                style={styles.input}
                placeholder="Digite o nome do Pokémon"
                value={query}
                onChangeText={setQuery}
            />
            <TouchableOpacity style={styles.button} title="SEARCH" onPress={fetchResults} />
        </View>
    );
};

const styles = StyleSheet.create({
    container: {
        marginBottom: 20,
    },
    input: {
        height: 40,
        borderColor: '#fff',
        borderWidth: 2,
        paddingHorizontal: 10,
        marginBottom: 5,
        borderRadius: 10
    },
    button: {
        width: 50,
        height: 50,
        backgroundColor: '#ff'
    }
});

export default SearchInput;
