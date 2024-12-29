import { Text, SafeAreaView, StyleSheet, Pressable } from 'react-native';
import React, { useState } from 'react';
import {
  MaterialCommunityIcons,
  Foundation,
  FontAwesome6,
  Entypo,
  FontAwesome,
} from '@expo/vector-icons';
import CountryFlag from 'react-native-country-flag';
import { useNavigation } from '@react-navigation/native';
import styled from 'styled-components/native';
import GetStarted from './get-started/GetStarted';
import { useRouter } from 'expo-router';

const StyledScrollView = styled.ScrollView`
  background-color: '#f4eeff';
`;

const Container = styled.View`
  background-color: '#f4eeff';
`;

const SendChoicesContainer = styled.View`
  background-color: #cfcfe8;
  height: 100px;
  padding: 10px;
  display: flex;
  flex-direction: row;
  justify-content: space-around;
  align-items: center;
`;

const ChoicesContainer = styled.View`
  display: flex;
  justify-content: center;
  align-items: center;
  align-self: center;
  gap: 5px;
`;

const ChoicesItem = styled.View`
  display: flex;
  justify-content: center;
  align-items: center;
  align-self: center;
  background-color: #35166e;
  width: 50px;
  height: 50px;
  border-radius: 25px;
`;

const ChoicesSubtext = styled.Text`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 100%;
  font-size: 10px;
  padding: 2px;
  color: #35166e;
  font-weight: 700;
`;

const RatesContainer = styled.View`
  background-color: #cfcfe8;
  padding: 20px;
  margin: 10px 0;
`;
const CurrencyContainer = styled.View`
  display: flex;
  flex-direction: row;
  justify-content: center;
  gap: 10px;
  width: 100%;
`;
const Currency = styled.View`
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  gap: 5px;
  width: 100px;
  height: 40px;
  border: 0.5px solid #35166e;
`;
const Swap = styled.View`
  display: flex;
  justify-content: center;
  align-items: center;
`;
const InputLabel = styled.Text`
  padding: 5px;
  font-size: 12px;
  margin-top: 10px;
  color: #35166e;
  font-weight: 700;
`;
const StyledTextInput = styled.TextInput`
  height: 40px;
  border-radius: 4px;
  padding: 10px;
  /* borderWidth: 0.5, */
  border: 0.5px solid #35166e;
`;
const InputContainer = styled.View``;
const TextInputField = styled.TextInput``;
const StyledPressable = styled.Pressable`
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 12px 32px;
  border-radius: 4px;
  margin-top: 10px;
  background-color: #35166e;
`;
const PressableButtonText = styled.Text`
  font-size: 16px;
  font-weight: 700;
  /* line-height: 21;
  letter-spacing: 0.25px; */
  color: white;
`;

const HomeScreen = () => {
  const [number, onChangeNumber] = useState('');
  const router = useRouter();

  return (
    <StyledScrollView>
      <Container>
        <SendChoicesContainer>
          <Pressable>
            <ChoicesContainer>
              <ChoicesItem>
                <Text>
                  <Foundation name="euro" size={30} color="white" />
                </Text>
              </ChoicesItem>
              <ChoicesSubtext>Send to FI</ChoicesSubtext>
            </ChoicesContainer>
          </Pressable>
          <Pressable>
            <ChoicesContainer>
              <ChoicesItem>
                <Text>
                  <FontAwesome6 name="peso-sign" size={20} color="white" />
                </Text>
              </ChoicesItem>
              <ChoicesSubtext>Send to PH</ChoicesSubtext>
            </ChoicesContainer>
          </Pressable>

          <ChoicesContainer>
            <ChoicesItem>
              <Text>
                <FontAwesome name="user" size={24} color={'white'} />
              </Text>
            </ChoicesItem>
            <ChoicesSubtext>Send to Self</ChoicesSubtext>
          </ChoicesContainer>
          <ChoicesContainer>
            <ChoicesItem>
              <Text>
                <Entypo name="mobile" size={24} color="white" />
              </Text>
            </ChoicesItem>
            <ChoicesSubtext>Buy Load</ChoicesSubtext>
          </ChoicesContainer>
        </SendChoicesContainer>
        <RatesContainer>
          <CurrencyContainer>
            <Currency>
              <Text>
                <CountryFlag isoCode="fi" size={10} />
              </Text>
              <Text>FI</Text>
            </Currency>
            <Swap>
              <MaterialCommunityIcons
                name="swap-horizontal-circle"
                size={24}
                color="#35166e"
              />
            </Swap>
            <Currency>
              <Text>
                <CountryFlag isoCode="ph" size={10} />
              </Text>
              <Text>PH</Text>
            </Currency>
          </CurrencyContainer>
          <SafeAreaView>
            <InputLabel>You send</InputLabel>
            <StyledTextInput
              // style={styles.input}
              onChangeText={onChangeNumber}
              value={number}
              placeholder="Type amount in EUR"
              keyboardType="numeric"
              render={() => (
                <InputContainer>
                  <MaterialCommunityIcons
                    name="currency-usd"
                    size={24}
                    color="green"
                  />
                  <TextInputField
                    onChangeText={onChangeNumber}
                    value={number}
                    keyboardType="numeric"
                  />
                </InputContainer>
              )}
            />
            <InputLabel>They receive</InputLabel>
            <StyledTextInput
              // style={styles.input}
              onChangeText={onChangeNumber}
              value={number}
              placeholder="Type amount in PHP"
              keyboardType="numeric"
              render={() => (
                <InputContainer>
                  <MaterialCommunityIcons
                    name="currency-eur"
                    size={24}
                    color="blue"
                  />
                  <TextInputField
                    // style={styles.inputField}
                    onChangeText={onChangeNumber}
                    value={number}
                    keyboardType="numeric"
                  />
                </InputContainer>
              )}
            />
          </SafeAreaView>
          <StyledPressable>
            <PressableButtonText onPress={() => router.push('/send')}>
              Continue
            </PressableButtonText>
          </StyledPressable>
        </RatesContainer>
      </Container>
      <GetStarted />
    </StyledScrollView>
  );
};

export default HomeScreen;
