import React from 'react';
import { View, Text, Button, StyleSheet, TouchableOpacity } from 'react-native';
import auth from '@react-native-firebase/auth';

const Page = () => {
  const user = auth().currentUser;

  // Ensure the user object is available and has a phoneNumber
  const displayName = user?.phoneNumber || 'User';

  return (
    <View style={styles.container}>
      <Text style={styles.headLabel}>Hi, {displayName}!</Text>
      <View style={styles.signoutButtonContainer}>
        <TouchableOpacity
          style={styles.signoutButton}
          onPress={() => auth().signOut()}
        >
          <Text style={styles.signoutButtonText}>Sign out</Text>
        </TouchableOpacity>
      </View>
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
  label: {
    fontSize: 18,
    color: '#fff',
    fontWeight: 'bold',
    marginBottom: 5,
  },
  subText: {
    fontSize: 14,
    marginTop: 5,
    color: '#a1a1ce',
    fontWeight: 'bold',
  },
  signoutButtonContainer: {
    width: '100%',
    justifyContent: 'center',
    alignItems: 'center',
  },

  signoutButton: {
    paddingHorizontal: 30,
    paddingVertical: 10,
    backgroundColor: '#5a2bdb',
    marginTop: 10,
    borderRadius: 15,
    width: 150,
    justifyContent: 'center',
    alignItems: 'center',
  },
  signoutButtonText: {
    color: '#fff',
    fontSize: 16,
  },
});

export default Page;
