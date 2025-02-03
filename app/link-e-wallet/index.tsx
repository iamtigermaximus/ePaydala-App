import { StyleSheet, Text, View } from 'react-native';
import React from 'react';
import LinkEWalletScreen from '@/components/link-e-wallet/LinkEWalletScreen';
import LinkEWallet from '@/components/link-e-wallet/LinkEWallet';

const LinkEWalletPage = () => {
  return (
    <View style={styles.container}>
      <LinkEWallet />
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

export default LinkEWalletPage;
