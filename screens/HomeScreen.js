import React, { useState } from 'react';
import { View, TextInput, Button, Text } from 'react-native';

export default function HomeScreen() {
  const [query, setQuery] = useState('');
  const [results, setResults] = useState([]);

  const handleSearch = () => {
    setResults([`Result for: ${query}`]);
  };

  return (
    <View style={{ padding: 20 }}>
      <Text>Product Search</Text>
      <TextInput 
        value={query} 
        onChangeText={setQuery} 
        placeholder="Search products..." 
        style={{ borderWidth: 1, marginBottom: 10 }} 
      />
      <Button title="Search" onPress={handleSearch} />
      {results.map((r, i) => <Text key={i}>{r}</Text>)}
    </View>
  );
}