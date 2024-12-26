import React from 'react';

import { Stack } from 'expo-router';

const ProfileLayout = () => {
  return (
    <Stack>
      <Stack.Screen
        name="index"
        options={{
          title: 'profile',
          headerShown: false,
          headerStyle: {
            backgroundColor: 'green', // Header background color
          },
          headerTintColor: 'red', // Header text color
          contentStyle: {
            backgroundColor: 'pink', // Background color for screen content
          },
        }}
      />
      {/* <Stack.Screen name="profile" options={{ headerShown: false }} /> */}
    </Stack>
  );
};

export default ProfileLayout;
