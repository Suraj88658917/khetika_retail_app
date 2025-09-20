import React, { useState } from 'react';
import { View, TextInput, TouchableOpacity, Text, StyleSheet } from 'react-native';

export default function OrderScreen() {
  const [orderId, setOrderId] = useState('');
  const [status, setStatus] = useState('');

  const trackOrder = () => {
    if (orderId.trim() === '') return;
    setStatus(`Order ${orderId} is out for delivery.`);
  };

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Order Tracking</Text>

      <TextInput
        value={orderId}
        onChangeText={setOrderId}
        placeholder="Enter Order ID"
        placeholderTextColor="#999"
        style={styles.input}
      />

      <TouchableOpacity style={styles.trackButton} onPress={trackOrder}>
        <Text style={styles.trackButtonText}>Track Order</Text>
      </TouchableOpacity>

      {status ? (
        <View style={styles.statusCard}>
          <Text style={styles.statusText}>{status}</Text>
        </View>
      ) : (
        <Text style={styles.emptyText}>Enter your Order ID to track.</Text>
      )}
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#f8f9fa',
    padding: 20,
  },
  title: {
    fontSize: 28,
    fontWeight: 'bold',
    marginBottom: 20,
    color: '#333',
  },
  input: {
    borderWidth: 1,
    borderColor: '#ddd',
    padding: 15,
    borderRadius: 10,
    backgroundColor: '#fff',
    fontSize: 16,
  },
  trackButton: {
    backgroundColor: '#ff9800',
    padding: 15,
    borderRadius: 10,
    marginTop: 10,
    alignItems: 'center',
  },
  trackButtonText: {
    color: '#fff',
    fontSize: 18,
    fontWeight: 'bold',
  },
  statusCard: {
    backgroundColor: '#fff',
    padding: 20,
    marginTop: 20,
    borderRadius: 10,
    elevation: 3,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.2,
    shadowRadius: 3,
  },
  statusText: {
    fontSize: 16,
    color: '#333',
  },
  emptyText: {
    marginTop: 20,
    textAlign: 'center',
    color: '#888',
    fontSize: 16,
  },
});
