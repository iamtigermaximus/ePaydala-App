import HomeScreen from '@/components/home-screen/HomeScreen';
import React from 'react';
import { View, StyleSheet } from 'react-native';
import styled from 'styled-components/native';

const HomePage = () => {
  return (
    <View style={styles.container}>
      <HomeScreen />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    backgroundColor: '#05122D',
    // paddingHorizontal: 20,
    paddingTop: 10,
    flex: 1,
  },
  headLabel: {
    fontSize: 25,
    marginBottom: 10,
    color: '#fff',
    fontWeight: 'bold',
  },
});

export default HomePage;
