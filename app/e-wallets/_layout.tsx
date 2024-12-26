import React from 'react';

import { Stack } from 'expo-router';

const EWalletsLayout = () => {
  return (
    <Stack>
      <Stack.Screen
        name="index"
        options={{
          title: 'e-wallets',
          headerShown: false,
          headerStyle: {
            backgroundColor: 'green', // Header background color
          },
          headerTintColor: 'red', // Header text color
          contentStyle: {
            backgroundColor: 'yellow', // Background color for screen content
          },
        }}
      />
      {/* <Stack.Screen name="link-fi-bank" options={{ headerShown: false }} /> */}
    </Stack>
  );
};

export default EWalletsLayout;
