import { StyleSheet, Text, View } from 'react-native';
import React from 'react';

const LinkPhPaymentMethodScreen = () => {
  return (
    <View style={styles.container}>
      <Text style={styles.headLabel}>
        Link Philippine Payment Method Screen
      </Text>
    </View>
  );
};

export default LinkPhPaymentMethodScreen;

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
