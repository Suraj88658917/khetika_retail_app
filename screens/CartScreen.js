import React, { useState } from 'react';
import { View, Text, Button, FlatList } from 'react-native';

export default function CartScreen() {
  const [cart, setCart] = useState([]);

  const addItem = () => {
    setCart([...cart, { id: cart.length + 1, name: `Item ${cart.length + 1}` }]);
  };

  return (
    <View style={{ padding: 20 }}>
      <Text>Cart</Text>
      <Button title="Add Item" onPress={addItem} />
      <FlatList
        data={cart}
        renderItem={({ item }) => <Text>{item.name}</Text>}
        keyExtractor={(item) => item.id.toString()}
      />
    </View>
  );
}