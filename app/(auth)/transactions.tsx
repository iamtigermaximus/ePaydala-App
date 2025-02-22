import TransactionsScreen from '@/components/transactions-screen/TransactionsScreen';
import React from 'react';
import { View, Text, StyleSheet } from 'react-native';

const TransactionsPage = () => {
  return (
    <View style={styles.container}>
      <TransactionsScreen />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    height: '100%',
  },
  headLabel: {
    fontSize: 25,
    marginBottom: 10,
    color: '#fff',
    fontWeight: 'bold',
  },
});

export default TransactionsPage;
