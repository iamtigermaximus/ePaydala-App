import { StyleSheet, Text, View } from 'react-native';
import React from 'react';
import CompleteFiProfileScreen from '@/components/link-fi-bank/CompleteFiProfileScreen';

const CompleteProfilePage = () => {
  return (
    <View style={styles.container}>{/* <CompleteFiProfileScreen /> */}</View>
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

export default CompleteProfilePage;
