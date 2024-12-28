import { StyleSheet, Text, View } from 'react-native';
import React from 'react';
import CardsAccountsScreen from '@/components/cards-accounts/CardsAccountsScreen';

const CardsAccountsPage = () => {
  return (
    <View style={styles.container}>
      <CardsAccountsScreen />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    backgroundColor: '#05122D',
    paddingHorizontal: 20,
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

export default CardsAccountsPage;
