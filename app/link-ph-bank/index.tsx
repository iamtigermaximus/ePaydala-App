import { StyleSheet, Text, View } from 'react-native';
import React from 'react';
import LinkPhBankScreen from '@/components/link-ph-bank/LinkPhBankScreen';
import LinkPhBank from '@/components/link-ph-bank/LinkPhBank';

const LinkPhBankPage = () => {
  return (
    <View style={styles.container}>
      <LinkPhBank />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    backgroundColor: '#05122d',
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
});
export default LinkPhBankPage;
