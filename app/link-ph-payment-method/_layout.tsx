import React from 'react';

import { Stack } from 'expo-router';

const LinkPhPaymentMethodLayout = () => {
  return (
    <Stack>
      <Stack.Screen
        name="index"
        options={{
          title: 'link-ph-payment-method',
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
      {/* <Stack.Screen name="link-fi-bank" options={{ headerShown: false }} /> */}
    </Stack>
  );
};

export default LinkPhPaymentMethodLayout;
