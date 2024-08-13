// App.js
import React, { useState } from 'react';
import { View, StyleSheet } from 'react-native';
import axios from 'axios';
import SearchInput from './components/searchInput';
import SearchResults from './components/searchResult';

const App = () => {
  const [query, setQuery] = useState('');
  const [data, setData] = useState(null);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);

  const fetchResults = async () => {
    setLoading(true);
    setError(null);

    try {
      const response = await axios.get(`https://pokeapi.co/api/v2/pokemon/${query.toLowerCase()}`);
      setData(response.data);
    } catch (err) {
      setError('Pokémon não encontrado. Verifique o nome e tente novamente.');
      setData(null);
    } finally {
      setLoading(false);
    }
  };

  return (
    <View style={styles.container}>
      <SearchInput query={query} setQuery={setQuery} fetchResults={fetchResults} />
      <SearchResults data={data} loading={loading} error={error} />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 20,
    paddingTop: 90,
    backgroundColor: '#c7c7c7',
  },
});

export default App;
