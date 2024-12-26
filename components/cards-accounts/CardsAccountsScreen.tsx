import { StyleSheet, Text, View } from 'react-native';
import React from 'react';

const CardsAccountsScreen = () => {
  return (
    <View style={styles.container}>
      <Text style={styles.headLabel}>Cards and Accounts Screen</Text>
    </View>
  );
};

export default CardsAccountsScreen;

const styles = StyleSheet.create({
  container: {
    backgroundColor: 'pink',
    paddingHorizontal: 10,
    paddingTop: 10,
    height: '100%',
  },
  headLabel: {
    fontSize: 25,
    marginBottom: 10,
    color: '#fff',
    fontWeight: 'bold',
  },
});
