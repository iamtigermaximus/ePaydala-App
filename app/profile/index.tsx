import ProfileScreen from '@/components/profile-screen/ProfileScreen';
import React from 'react';
import { View, StyleSheet } from 'react-native';
import styled from 'styled-components/native';

const ProfilePage = () => {
  return (
    <View style={styles.container}>
      <ProfileScreen />
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

export default ProfilePage;
