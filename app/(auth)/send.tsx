import SendScreen from '@/components/send-screen/SendScreen';
import React from 'react';
import { View, Text, StyleSheet } from 'react-native';

const SendPage = () => {
  return (
    <View style={styles.container}>
      <SendScreen />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    backgroundColor: '#05122d',
    // paddingHorizontal: 20,
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

export default SendPage;
