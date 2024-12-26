import React from 'react';

import { Stack, useRouter, useSegments } from 'expo-router';
import { useEffect, useState } from 'react';
import auth, { FirebaseAuthTypes } from '@react-native-firebase/auth';
import { View, ActivityIndicator } from 'react-native';

const RootLayout = () => {
  const [initializing, setInitializing] = useState(true);
  const [user, setUser] = useState<FirebaseAuthTypes.User | null>();
  const router = useRouter();
  const segments = useSegments();

  const onAuthStateChanged = (user: FirebaseAuthTypes.User | null) => {
    console.log('onAuthStateChanged', user);
    setUser(user);
    if (initializing) setInitializing(false);
  };

  useEffect(() => {
    const subscriber = auth().onAuthStateChanged(onAuthStateChanged);
    return subscriber;
  }, []);

  useEffect(() => {
    if (initializing) return;

    const inAuthGroup = segments[0] === '(auth)';

    if (user && !inAuthGroup) {
      router.replace('/(auth)/home');
    } else if (!user && inAuthGroup) {
      router.replace('/');
    }
  }, [user, initializing]);

  if (initializing)
    return (
      <View
        style={{
          alignItems: 'center',
          justifyContent: 'center',
          flex: 1,
        }}
      >
        <ActivityIndicator size="large" />
      </View>
    );

  return (
    <Stack>
      <Stack.Screen
        name="index"
        options={{
          title: '',
          headerStyle: {
            backgroundColor: '#05122D', // Header background color
          },
          headerTintColor: '#fff', // Header text color
          contentStyle: {
            backgroundColor: '#ffebcd', // Background color for screen content
          },
        }}
      />
      <Stack.Screen name="(auth)" options={{ headerShown: false }} />
      <Stack.Screen
        name="profile"
        options={{
          title: 'Profile',
          headerBackVisible: true,
          headerBackTitle: 'Back',
          headerStyle: {
            backgroundColor: '#05122D',
          },
          headerTintColor: '#fff',
          contentStyle: {
            backgroundColor: '#ffebcd',
          },
        }}
      />

      <Stack.Screen
        name="link-fi-bank"
        options={{
          title: 'Link Finnish Bank',
          headerBackVisible: true,
          headerBackTitle: 'Back',
          headerStyle: {
            backgroundColor: '#05122D',
          },
          headerTintColor: '#fff',
        }}
      />
      <Stack.Screen
        name="link-ph-bank"
        options={{
          title: 'Link Philippine Bank',
          headerBackVisible: true,
          headerBackTitle: 'Back',
          headerStyle: {
            backgroundColor: '#05122D',
          },
          headerTintColor: '#fff',
        }}
      />
      <Stack.Screen
        name="link-ph-payment-method"
        options={{
          title: 'Link Philippine Payment Method',
          headerBackVisible: true,
          headerBackTitle: 'Back',
          headerStyle: {
            backgroundColor: '#05122D',
          },
          headerTintColor: '#fff',
        }}
      />
      <Stack.Screen
        name="login"
        options={{
          title: 'Login',
          headerBackVisible: false,
          headerBackTitle: 'Back',
          headerStyle: {
            backgroundColor: '#05122D',
          },
          headerTintColor: '#fff',
        }}
      />

      <Stack.Screen
        name="personal-information"
        options={{
          title: 'Personal Information',
          headerBackVisible: true,
          headerBackTitle: 'Back',
          headerStyle: {
            backgroundColor: '#05122D',
          },
          headerTintColor: '#fff',
        }}
      />
    </Stack>
  );
};

export default RootLayout;
