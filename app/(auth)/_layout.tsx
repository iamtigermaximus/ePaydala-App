import React from 'react';
import { View, Text, TouchableOpacity, StyleSheet } from 'react-native';
import { Stack } from 'expo-router';
import Icon from 'react-native-vector-icons/MaterialIcons';
import auth from '@react-native-firebase/auth';

const Layout = () => {
  const user = auth().currentUser;
  const displayName = user?.phoneNumber || 'User';

  return (
    <Stack>
      <Stack.Screen
        name="home"
        options={{
          title: '',
          headerStyle: {
            backgroundColor: '#05122D',
          },
          headerLeft: () => (
            <View>
              <Text style={{ color: '#fff', fontSize: 18, fontWeight: 'bold' }}>
                Hi, {displayName}!
              </Text>
            </View>
          ),
          headerRight: () => (
            <TouchableOpacity
              onPress={() => {
                console.log('Settings Pressed');
              }}
            >
              <View style={styles.iconContainer}>
                <Icon name="person" size={18} color="#fff" />
              </View>
            </TouchableOpacity>
          ),
        }}
      />
    </Stack>
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
  iconContainer: {
    paddingHorizontal: 2,
    paddingVertical: 2,
    borderRadius: '50%',
    justifyContent: 'center',
    alignItems: 'center',
    borderWidth: 1,
    borderColor: '#fff',
  },
});

export default Layout;
