import { StyleSheet, Text, View } from 'react-native';
import React from 'react';
import EWalletsScreen from '@/components/e-wallets/EWalletsScreen';

const EWalletsPage = () => {
  return (
    <View style={styles.container}>
      <EWalletsScreen />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    backgroundColor: '#05122d',
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

export default EWalletsPage;
