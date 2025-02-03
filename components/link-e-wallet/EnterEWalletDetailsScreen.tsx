import { StyleSheet, Text, View, TouchableOpacity } from 'react-native';
import React from 'react';
import styled from 'styled-components/native';
import { Entypo, MaterialCommunityIcons } from '@expo/vector-icons';
import { useRouter } from 'expo-router';

interface EnterEWalletDetailsScreenProps {
  setStep: (step: number) => void;
}

const Container = styled.View`
  /* background-color: pink; */
  /* align-items: center; */
  height: 100%;
  gap: 20px;
  /* padding: 30px 0; */
`;

const ItemContainer = styled.View`
  /* border: 1px solid red; */
  width: 100%;
  display: flex;
  background-color: #cfcfe8;
`;

const ItemsWrapper = styled.View`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  padding: 10px 2px;
`;

const Item = styled.TextInput`
  gap: 10px;
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  padding: 5px;
`;

const ItemIcon = styled.View`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 30px;
`;

const LabelContainer = styled.View`
  /* border: 1px solid red; */
  width: 100%;
  display: flex;
  /* justify-content: center;
  align-items: center; */
  background-color: #05122d;
  padding: 5px 0;
`;

const HeaderTextContainer = styled.View`
  /* border: 1px solid red; */
  width: 100%;
  display: flex;
  /* justify-content: center;
  align-items: center; */
  background-color: #05122d;
  padding: 5px 0;
`;

const Label = styled.Text`
  font-size: 16px;
  color: white;
`;

const ItemLabel = styled.Text`
  font-size: 16px;
  color: white;
`;

const BankName = styled.Text`
  font-size: 18px;
  color: white;
`;

const ItemText = styled.Text`
  font-size: 16px;
  color: #35166e;
`;

const ContinueButtonContainer = styled.View`
  /* border: 1px solid red; */
  width: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 8px;
  background-color: #5a2bdb;
  border-radius: 25px;
`;

const ContinueButton = styled.Text`
  color: white;
  padding: 10px 16px;
  font-size: 16px;
  font-weight: 700;
`;

const EnterEWalletDetailsScreen: React.FC<EnterEWalletDetailsScreenProps> = ({
  setStep,
}) => {
  const router = useRouter();

  return (
    <Container>
      <HeaderTextContainer>
        <Label>
          Ensure your account number matches your phone number to keep your
          money safe.
        </Label>
      </HeaderTextContainer>
      <ItemContainer>
        <LabelContainer>
          <BankName>E-WALLET NAME HERE</BankName>
        </LabelContainer>
      </ItemContainer>
      {/* <ItemContainer>
        <LabelContainer>
          <ItemLabel>Account holder name</ItemLabel>
        </LabelContainer>
        <TouchableOpacity>
          <ItemsWrapper>
            <Item placeholder="Enter account holder name"></Item>
          </ItemsWrapper>
        </TouchableOpacity>
      </ItemContainer> */}
      <ItemContainer>
        <LabelContainer>
          <ItemLabel>Account number</ItemLabel>
        </LabelContainer>
        <TouchableOpacity>
          <ItemsWrapper>
            <Item placeholder="Enter account number"></Item>
          </ItemsWrapper>
        </TouchableOpacity>
      </ItemContainer>
      <ItemContainer>
        <LabelContainer>
          <ItemLabel>Confirm account number</ItemLabel>
        </LabelContainer>
        <TouchableOpacity>
          <ItemsWrapper>
            <Item placeholder="Re-enter account number"></Item>
          </ItemsWrapper>
        </TouchableOpacity>
      </ItemContainer>
      <ContinueButtonContainer>
        <TouchableOpacity onPress={() => setStep(3)}>
          <ContinueButton>Link account</ContinueButton>
        </TouchableOpacity>
      </ContinueButtonContainer>
    </Container>
  );
};

export default EnterEWalletDetailsScreen;
