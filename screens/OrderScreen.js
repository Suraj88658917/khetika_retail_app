import React, { useState } from 'react';
import { View, TextInput, Button, Text } from 'react-native';

export default function OrderScreen() {
  const [orderId, setOrderId] = useState('');
  const [status, setStatus] = useState('');

  const trackOrder = () => {
    setStatus(`Order ${orderId} is out for delivery.`);
  };

  return (
    <View style={{ padding: 20 }}>
      <Text>Order Tracking</Text>
      <TextInput 
        value={orderId} 
        onChangeText={setOrderId} 
        placeholder="Enter Order ID" 
        style={{ borderWidth: 1, marginBottom: 10 }} 
      />
      <Button title="Track Order" onPress={trackOrder} />
      {status ? <Text>{status}</Text> : null}
    </View>
  );
}