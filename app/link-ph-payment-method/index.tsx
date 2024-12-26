import { StyleSheet, Text, View } from 'react-native';
import React from 'react';
import LinkPhPaymentMethodScreen from '@/components/link-ph-payment-method/LinkPhPaymentMethod';

const LinkPhPaymentMethod = () => {
  return (
    <View style={styles.container}>
      <LinkPhPaymentMethodScreen />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    backgroundColor: 'purple',
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

export default LinkPhPaymentMethod;
