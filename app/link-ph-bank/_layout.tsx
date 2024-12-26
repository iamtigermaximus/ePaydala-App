import React from 'react';

import { Stack } from 'expo-router';

const LinkPhBankLayout = () => {
  return (
    <Stack>
      <Stack.Screen
        name="index"
        options={{
          title: 'link-ph-bank',
          headerShown: false,
          headerStyle: {
            backgroundColor: 'green', // Header background color
          },
          headerTintColor: 'red', // Header text color
          contentStyle: {
            backgroundColor: 'green', // Background color for screen content
          },
        }}
      />
      {/* <Stack.Screen name="link-fi-bank" options={{ headerShown: false }} /> */}
    </Stack>
  );
};

export default LinkPhBankLayout;
