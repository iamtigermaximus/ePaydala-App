import { StyleSheet, Text, View } from 'react-native';
import React from 'react';
import SettingsScreen from '@/components/settings/SettingsScreen';

const SettingsPage = () => {
  return (
    <View style={styles.container}>
      <SettingsScreen />
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

export default SettingsPage;
