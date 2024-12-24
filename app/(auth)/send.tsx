import React from 'react';
import { View, Text, StyleSheet } from 'react-native';

const SendPage = () => {
  return (
    <View style={styles.container}>
      <Text style={styles.headLabel}>Settings</Text>
      {/* You can add settings-related content here */}
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

export default SendPage;
