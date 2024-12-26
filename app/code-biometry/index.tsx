import { StyleSheet, Text, View } from 'react-native';
import React from 'react';
import CodeBiometryScreen from '@/components/code-biometry/CodeBiometryScreen';

const CodeBiometryPage = () => {
  return (
    <View style={styles.container}>
      <CodeBiometryScreen />
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

export default CodeBiometryPage;
