import React, { useEffect } from 'react';
import {
  View,
  Text,
  StyleSheet,
  ScrollView,
  TouchableOpacity,
} from 'react-native';
import {
  Entypo,
  MaterialIcons,
  MaterialCommunityIcons,
  Ionicons,
  FontAwesome5,
  FontAwesome,
} from '@expo/vector-icons';
import auth from '@react-native-firebase/auth';
import { useRouter } from 'expo-router';

const ProfileScreen = () => {
  const user = auth().currentUser;
  const router = useRouter();

  const handleLogout = async () => {
    try {
      await auth().signOut(); // Sign the user out from Firebase
      router.push('/'); // Navigate to Login screen after logout
    } catch (error) {
      console.error('Error logging out:', error);
      alert('Failed to log out. Please try again.');
    }
  };
  return (
    <ScrollView style={styles.scrollView}>
      <View style={styles.personalDetailsContainer}>
        <TouchableOpacity>
          <View style={styles.itemsContainer}>
            <View style={styles.itemContainer}>
              <Text style={styles.itemIcon}>
                <FontAwesome5 name="user-alt" size={25} color="#35166e" />
              </Text>
              <Text style={styles.item}>Personal information</Text>
            </View>
            <View style={styles.itemIcon}>
              <Text>
                <Entypo
                  name="chevron-with-circle-right"
                  size={20}
                  color="#35166e"
                  onPress={() => router.push('/personal-information')}
                />
              </Text>
            </View>
          </View>
        </TouchableOpacity>
        <TouchableOpacity>
          <View style={styles.itemsContainer}>
            <View style={styles.itemContainer}>
              <Text style={styles.itemIcon}>
                <Ionicons name="lock-closed-sharp" size={27} color="#35166e" />
              </Text>
              <Text style={styles.item}>Code and biometry</Text>
            </View>
            <View style={styles.itemIcon}>
              <Text>
                <Entypo
                  name="chevron-with-circle-right"
                  size={20}
                  color="#35166e"
                  onPress={() => router.push('/code-biometry')}
                />
              </Text>
            </View>
          </View>
        </TouchableOpacity>
        <TouchableOpacity>
          <View style={styles.itemsContainer}>
            <View style={styles.itemContainer}>
              <Text style={styles.itemIcon}>
                <MaterialCommunityIcons name="bank" size={30} color="#35166e" />
              </Text>
              <Text style={styles.item}>Cards and accounts</Text>
            </View>
            <View style={styles.itemIcon}>
              <Text>
                <Entypo
                  name="chevron-with-circle-right"
                  size={20}
                  color="#35166e"
                  onPress={() => router.push('/cards-accounts')}
                />
              </Text>
            </View>
          </View>
        </TouchableOpacity>
        <TouchableOpacity>
          <View style={styles.itemsContainer}>
            <View style={styles.itemContainer}>
              <Text style={styles.itemIcon}>
                <MaterialIcons
                  name="account-balance-wallet"
                  size={30}
                  color="#35166e"
                />
              </Text>
              <Text style={styles.item}>E-wallets</Text>
            </View>
            <View style={styles.itemIcon}>
              <Text>
                <Entypo
                  name="chevron-with-circle-right"
                  size={20}
                  color="#35166e"
                  onPress={() => router.push('/e-wallets')}
                />
              </Text>
            </View>
          </View>
        </TouchableOpacity>
      </View>
      <View style={styles.personalDetailsContainer}>
        <TouchableOpacity>
          <View style={styles.itemsContainer}>
            <View style={styles.itemContainer}>
              <Text style={styles.itemIcon}>
                <Ionicons name="settings" size={27} color="#35166e" />
              </Text>
              <Text style={styles.item}>Settings</Text>
            </View>
            <View style={styles.itemIcon}>
              <Text>
                <Entypo
                  name="chevron-with-circle-right"
                  size={20}
                  color="#35166e"
                  onPress={() => router.push('/settings')}
                />
              </Text>
            </View>
          </View>
        </TouchableOpacity>
        <TouchableOpacity>
          <View style={styles.itemsContainer}>
            <View style={styles.itemContainer}>
              <Text style={styles.itemIcon}>
                <FontAwesome name="support" size={24} color="#35166e" />
              </Text>
              <Text style={styles.item}>Help and support</Text>
            </View>
            <View style={styles.itemIcon}>
              <Text>
                <Entypo
                  name="chevron-with-circle-right"
                  size={20}
                  color="#35166e"
                  onPress={() => router.push('/help-and-support')}
                />
              </Text>
            </View>
          </View>
        </TouchableOpacity>
        <TouchableOpacity>
          <View style={styles.itemsContainer}>
            <View style={styles.itemContainer}>
              <Text style={styles.itemIcon}>
                <Ionicons
                  name="information-circle-sharp"
                  size={30}
                  color="#35166e"
                />
              </Text>
              <Text style={styles.item}>About</Text>
            </View>
            <View style={styles.itemIcon}>
              <Text>
                <Entypo
                  name="chevron-with-circle-right"
                  size={20}
                  color="#35166e"
                  onPress={() => router.push('/about')}
                />
              </Text>
            </View>
          </View>
        </TouchableOpacity>
        {/* Log out option */}
        <View style={styles.itemsContainer}>
          <View style={styles.itemContainer}>
            <Text style={styles.itemIcon}>
              <MaterialCommunityIcons name="logout" size={30} color="#35166e" />
            </Text>
            <TouchableOpacity onPress={handleLogout}>
              <Text style={styles.item}>Log out</Text>
            </TouchableOpacity>
          </View>
          {/* <View style={styles.itemIcon}>
            <Text>
              <Entypo
                name="chevron-with-circle-right"
                size={20}
                color="#35166e"
              />
            </Text>
          </View> */}
        </View>
      </View>
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#6834d4',
  },
  text: {
    color: '#010101',
  },
  personalDetailsContainer: {
    backgroundColor: '#cfcfe8',
    margin: 10,
    gap: 5,
    paddingHorizontal: 10,
    paddingVertical: 30,
    shadowColor: '',
    shadowOffset: {
      width: 0,
      height: 0.5,
    },
    shadowOpacity: 0.25,
    shadowRadius: 3.84,
    elevation: 5,
  },
  itemsContainer: {
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'space-between',
    borderBottomWidth: 0.3,
    borderColor: 'gray',
  },
  itemContainer: {
    gap: 10,
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
    padding: 5,
  },
  itemIcon: {
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    width: 30,
  },
  item: {
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    padding: 5,
    fontWeight: '700',
    color: '#35166e',
  },
  scrollView: {
    backgroundColor: '#05122D',
    gap: 20,
  },
});

export default ProfileScreen;
