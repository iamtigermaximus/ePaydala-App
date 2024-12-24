import { StyleSheet, Text, View } from 'react-native';
import React from 'react';

const SendScreen = () => {
  return (
    <View style={styles.container}>
      <Text style={styles.headLabel}>Send Screen</Text>
    </View>
  );
};

export default SendScreen;

const styles = StyleSheet.create({
  container: {
    backgroundColor: 'red',
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
