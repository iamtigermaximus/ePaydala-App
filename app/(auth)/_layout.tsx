

import React from 'react';
import { Tabs } from 'expo-router';
import MaterialIcons from 'react-native-vector-icons/MaterialIcons';
import FontAwesome from 'react-native-vector-icons/FontAwesome';
import FontAwesome6 from 'react-native-vector-icons/FontAwesome6';

import auth from '@react-native-firebase/auth';
import { View, Text, TouchableOpacity, StyleSheet } from 'react-native';

const Layout = () => {
  const user = auth().currentUser;
  const displayName = user?.phoneNumber || 'User';
  return (
    <View style={styles.tabContainer}>
      <Tabs
        screenOptions={{
          tabBarStyle: {
            backgroundColor: '#05122D',
            height: 100,
            paddingTop: 10,
          },
          tabBarActiveTintColor: 'white',
        }}
      >
        {/* Home Tab */}
        <Tabs.Screen
          name="home"
          options={{
            tabBarLabel: 'Home',
            tabBarIcon: ({ color }) => (
              <MaterialIcons name="home" size={24} color={color} />
            ),
            header: () => (
              <View
                style={{
                  flexDirection: 'row',
                  alignItems: 'center',
                  justifyContent: 'space-between',
                  backgroundColor: '#05122D',
                  paddingHorizontal: 10,
                  paddingTop: 60,
                  paddingBottom: 10,
                  // borderBottomWidth: 0.5,
                  // borderColor: '#fff',
                }}
              >
                <Text
                  style={{
                    color: '#cfcfe8',
                    fontSize: 18,
                    fontWeight: 'bold',
                  }}
                >
                  Hi, {displayName}!
                </Text>
                <TouchableOpacity onPress={() => auth().signOut()}>
                  <View style={styles.iconContainer}>
                    <MaterialIcons name="person" size={18} color="#cfcfe8" />
                  </View>
                </TouchableOpacity>
              </View>
            ),
          }}
        />

        {/* SendTab */}
        <Tabs.Screen
          name="send"
          options={{
            title: 'Send',
            tabBarLabel: 'Send Money',
            tabBarIcon: ({ color }) => (
              <FontAwesome6
                name="money-bill-transfer"
                size={24}
                color={color}
              />
            ),
            headerTitle: 'Select a recipient',
            headerStyle: {
              backgroundColor: '#05122D',
            },
            headerTintColor: '#fff',
          }}
        />
        {/* Transactions Tab */}
        <Tabs.Screen
          name="transactions"
          options={{
            title: 'Transactions',
            tabBarLabel: 'Transactions',
            tabBarIcon: ({ color }) => (
              <FontAwesome name="history" size={24} color={color} />
            ),
            headerTitle: 'Transactions',
            headerStyle: {
              backgroundColor: '#05122D',
            },
            headerTintColor: '#fff',
          }}
        />

        {/* Settings Tab */}
        {/* <Tabs.Screen
        name="settings"
        options={{
          title: 'Settings',
          tabBarLabel: 'Settings',
          tabBarIcon: ({ color }) => (
            <MaterialIcons name="settings" size={20} color={color} />
          ),
          headerTitle: 'Settings',
          headerStyle: {
            backgroundColor: '#05122D',
          },
          headerTintColor: '#fff',
        }}
      /> */}
      </Tabs>
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
  tabContainer: {
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
    borderColor: '#cfcfe8',
    marginRight: 10,
  },
});

export default Layout;


// import React from 'react';
// import { View, Text, TouchableOpacity, StyleSheet } from 'react-native';
// import { Stack } from 'expo-router';
// import Icon from 'react-native-vector-icons/MaterialIcons';
// import auth from '@react-native-firebase/auth';

// const Layout = () => {
//   const user = auth().currentUser;
//   const displayName = user?.phoneNumber || 'User';

//   return (
//     <Stack>
//       <Stack.Screen
//         name="home"
//         options={{
//           title: '',
//           headerStyle: {
//             backgroundColor: '#05122D',
//           },
//           headerLeft: () => (
//             <View>
//               <Text style={{ color: '#fff', fontSize: 18, fontWeight: 'bold' }}>
//                 Hi, {displayName}!
//               </Text>
//             </View>
//           ),
//           headerRight: () => (
//             <TouchableOpacity
//               onPress={() => {
//                 console.log('Settings Pressed');
//               }}
//             >
//               <View style={styles.iconContainer}>
//                 <Icon name="person" size={18} color="#fff" />
//               </View>
//             </TouchableOpacity>
//           ),
//         }}
//       />
//     </Stack>
//   );
// };

// const styles = StyleSheet.create({
//   container: {
//     backgroundColor: '#05122D',
//     paddingHorizontal: 20,
//     paddingTop: 10,
//     height: '100%',
//   },
//   headLabel: {
//     fontSize: 25,
//     marginBottom: 10,
//     color: '#fff',
//     fontWeight: 'bold',
//   },
//   iconContainer: {
//     paddingHorizontal: 2,
//     paddingVertical: 2,
//     borderRadius: '50%',
//     justifyContent: 'center',
//     alignItems: 'center',
//     borderWidth: 1,
//     borderColor: '#fff',
//   },
// });

// export default Layout;