import React from 'react';

import { Stack } from 'expo-router';

const PersonalInformationLayout = () => {
  return (
    <Stack>
      <Stack.Screen
        name="index"
        options={{
          title: 'personal-information',
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
    </Stack>
  );
};

export default PersonalInformationLayout;
