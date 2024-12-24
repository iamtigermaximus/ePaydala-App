import React, { useState } from 'react';
import {
  View,
  Text,
  StyleSheet,
  TouchableOpacity,
  ScrollView,
} from 'react-native';

export default function Transactions() {
  const [activeTab, setActiveTab] = useState('All');

  const handleTabPress = (tab: string) => {
    setActiveTab(tab);
  };

  return (
    <View style={styles.container}>
      <View style={styles.navBar}>
        <TouchableOpacity
          style={[styles.tab, activeTab === 'All' && styles.activeTab]}
          onPress={() => handleTabPress('All')}
        >
          <Text style={styles.tabText}>All</Text>
        </TouchableOpacity>
        <TouchableOpacity
          style={[styles.tab, activeTab === 'People' && styles.activeTab]}
          onPress={() => handleTabPress('People')}
        >
          <Text style={styles.tabText}>People</Text>
        </TouchableOpacity>
        <TouchableOpacity
          style={[styles.tab, activeTab === 'Business' && styles.activeTab]}
          onPress={() => handleTabPress('Business')}
        >
          <Text style={styles.tabText}>Business</Text>
        </TouchableOpacity>
      </View>
      {/* Content based on activeTab */}
      {activeTab === 'All' && (
        <ScrollView>
          <View style={styles.transactionContainer}>
            <View>
              <Text style={styles.transactionName}>John Doe</Text>
              <Text style={styles.action}>You sent</Text>
              <Text style={styles.transactionDate}>27/02/24, 10:30</Text>
            </View>
            <View>
              <Text style={styles.transactionAmount}>-100</Text>
            </View>
          </View>
          <View style={styles.transactionContainer}>
            <View>
              <Text style={styles.transactionName}>John Doe</Text>
              <Text style={styles.action}>You received</Text>
              <Text style={styles.transactionDate}>27/02/24, 10:30</Text>
            </View>
            <View>
              <Text style={(styles.transactionAmount, styles.received)}>
                +100
              </Text>
            </View>
          </View>
          <View style={styles.transactionContainer}>
            <View>
              <Text style={styles.transactionName}>John Doe</Text>
              <Text style={styles.action}>Cancelled</Text>
              <Text style={styles.transactionDate}>27/02/24, 10:30</Text>
            </View>
            <View>
              <Text style={(styles.transactionAmount, styles.cancelled)}>
                100
              </Text>
            </View>
          </View>
          <View style={styles.transactionContainer}>
            <View>
              <Text style={styles.transactionName}>Saige Gamboa</Text>
              <Text style={styles.action}>You sent</Text>
              <Text style={styles.transactionDate}>27/02/24, 10:30</Text>
            </View>
            <View>
              <Text style={styles.transactionAmount}>-100</Text>
            </View>
          </View>
          <View style={styles.transactionContainer}>
            <View>
              <Text style={styles.transactionName}>Alonzo Gamboa</Text>
              <Text style={styles.action}>You sent</Text>
              <Text style={styles.transactionDate}>27/02/24, 10:30</Text>
            </View>
            <View>
              <Text style={styles.transactionAmount}>-100</Text>
            </View>
          </View>
          <View style={styles.transactionContainer}>
            <View>
              <Text style={styles.transactionName}>Saige Gamboa</Text>
              <Text style={styles.action}>You sent</Text>
              <Text style={styles.transactionDate}>27/02/24, 10:30</Text>
            </View>
            <View>
              <Text style={styles.transactionAmount}>-100</Text>
            </View>
          </View>
          <View style={styles.transactionContainer}>
            <View>
              <Text style={styles.transactionName}>Alonzo Gamboa</Text>
              <Text style={styles.action}>You sent</Text>
              <Text style={styles.transactionDate}>27/02/24, 10:30</Text>
            </View>
            <View>
              <Text style={styles.transactionAmount}>-100</Text>
            </View>
          </View>
          <View style={styles.transactionContainer}>
            <View>
              <Text style={styles.transactionName}>Saige Gamboa</Text>
              <Text style={styles.action}>You sent</Text>
              <Text style={styles.transactionDate}>27/02/24, 10:30</Text>
            </View>
            <View>
              <Text style={styles.transactionAmount}>-100</Text>
            </View>
          </View>
          <View style={styles.transactionContainer}>
            <View>
              <Text style={styles.transactionName}>Alonzo Gamboa</Text>
              <Text style={styles.action}>You sent</Text>
              <Text style={styles.transactionDate}>27/02/24, 10:30</Text>
            </View>
            <View>
              <Text style={styles.transactionAmount}>-100</Text>
            </View>
          </View>
          <View style={styles.transactionContainer}>
            <View>
              <Text style={styles.transactionName}>Saige Gamboa</Text>
              <Text style={styles.action}>You sent</Text>
              <Text style={styles.transactionDate}>27/02/24, 10:30</Text>
            </View>
            <View>
              <Text style={styles.transactionAmount}>-100</Text>
            </View>
          </View>
          <View style={styles.transactionContainer}>
            <View>
              <Text style={styles.transactionName}>Alonzo Gamboa</Text>
              <Text style={styles.action}>You sent</Text>
              <Text style={styles.transactionDate}>27/02/24, 10:30</Text>
            </View>
            <View>
              <Text style={styles.transactionAmount}>-100</Text>
            </View>
          </View>
        </ScrollView>
      )}
      {activeTab === 'People' && (
        <View>
          <View style={styles.transactionContainer}>
            <View>
              <Text style={styles.transactionName}>John Doe</Text>
              <Text style={styles.action}>You sent</Text>
              <Text style={styles.transactionDate}>27/02/24, 10:30</Text>
            </View>
            <View>
              <Text style={styles.transactionAmount}>-100</Text>
            </View>
          </View>
          <View style={styles.transactionContainer}>
            <View>
              <Text style={styles.transactionName}>John Doe</Text>
              <Text style={styles.action}>You received</Text>
              <Text style={styles.transactionDate}>27/02/24, 10:30</Text>
            </View>
            <View>
              <Text style={(styles.transactionAmount, styles.received)}>
                +100
              </Text>
            </View>
          </View>
          <View style={styles.transactionContainer}>
            <View>
              <Text style={styles.transactionName}>John Doe</Text>
              <Text style={styles.action}>Cancelled</Text>
              <Text style={styles.transactionDate}>27/02/24, 10:30</Text>
            </View>
            <View>
              <Text style={(styles.transactionAmount, styles.cancelled)}>
                100
              </Text>
            </View>
          </View>
          <View style={styles.transactionContainer}>
            <View>
              <Text style={styles.transactionName}>Saige Gamboa</Text>
              <Text style={styles.action}>You sent</Text>
              <Text style={styles.transactionDate}>27/02/24, 10:30</Text>
            </View>
            <View>
              <Text style={styles.transactionAmount}>-100</Text>
            </View>
          </View>
          <View style={styles.transactionContainer}>
            <View>
              <Text style={styles.transactionName}>Alonzo Gamboa</Text>
              <Text style={styles.action}>You sent</Text>
              <Text style={styles.transactionDate}>27/02/24, 10:30</Text>
            </View>
            <View>
              <Text style={styles.transactionAmount}>-100</Text>
            </View>
          </View>
        </View>
      )}
      {activeTab === 'Business' && (
        <View>
          <View style={styles.transactionContainer}>
            <View>
              <Text style={styles.transactionName}>K-Market</Text>
              <Text style={styles.action}>You paid</Text>
              <Text style={styles.transactionDate}>27/02/24, 10:30</Text>
            </View>
            <View>
              <Text style={styles.transactionAmount}>-100</Text>
            </View>
          </View>
        </View>
      )}
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#05122D',
  },
  text: {
    color: '#010101',
    fontSize: 20,
    // textAlign: 'center',
    // marginTop: 20,
  },
  navBar: {
    flexDirection: 'row',
    justifyContent: 'space-around',
    backgroundColor: '#05122D',
    paddingVertical: 20,
    color: '#cfcfe8',
  },
  tab: {
    flex: 1,
    alignItems: 'center',
  },
  activeTab: {
    borderBottomWidth: 1,
    borderBottomColor: '#cfcfe8',
  },
  tabText: {
    color: '#cfcfe8',
    fontSize: 14,
    paddingBottom: 10,
    fontWeight: '700',
  },
  transactionContainer: {
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    // borderWidth: 1,
    paddingHorizontal: 10,
    paddingVertical: 5,
    margin: 2,
    backgroundColor: '#cfcfe8',
    shadowColor: 'gray',
    shadowOffset: {
      width: 0,
      height: 0.5,
    },
    shadowOpacity: 0.25,
    shadowRadius: 3.84,
    elevation: 5,
  },
  transactionName: {
    fontSize: 16,
    fontWeight: '500',
    color: '#35166e',
  },
  action: {
    fontSize: 13,
    color: '#0c2233',
  },
  transactionDate: {
    fontSize: 13,
    color: '#0c2233',
  },
  transactionAmount: {
    fontSize: 16,
    color: '#0c2233',
  },
  cancelled: {
    textDecorationLine: 'line-through',
    color: 'red',
  },
  received: {
    color: 'green',
  },
});
