import { StyleSheet, Text, View, TouchableOpacity } from 'react-native';
import React from 'react';
import styled from 'styled-components/native';
import { Entypo, MaterialCommunityIcons } from '@expo/vector-icons';
import { useRouter } from 'expo-router';

interface CompleteProfileScreenProps {
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

const CompleteProfileScreen: React.FC<CompleteProfileScreenProps> = ({
  setStep,
}) => {
  const router = useRouter();

  return (
    <Container>
      <HeaderTextContainer>
        <Label>
          Ensure your information matches your ID to keep your bank account and
          money safe.
        </Label>
      </HeaderTextContainer>
      <ItemContainer>
        <LabelContainer>
          <ItemLabel>Date of birth</ItemLabel>
        </LabelContainer>
        <TouchableOpacity>
          <ItemsWrapper>
            <Item placeholder="DD.MM.YYYY"></Item>
          </ItemsWrapper>
        </TouchableOpacity>
      </ItemContainer>
      <ItemContainer>
        <LabelContainer>
          <ItemLabel>Country</ItemLabel>
        </LabelContainer>
        <TouchableOpacity>
          <ItemsWrapper>
            <Item placeholder="Choose your country of residence"></Item>
          </ItemsWrapper>
        </TouchableOpacity>
      </ItemContainer>
      <ItemContainer>
        <LabelContainer>
          <ItemLabel>Street address</ItemLabel>
        </LabelContainer>
        <TouchableOpacity>
          <ItemsWrapper>
            <Item placeholder="Street address"></Item>
          </ItemsWrapper>
        </TouchableOpacity>
      </ItemContainer>
      <ItemContainer>
        <LabelContainer>
          <ItemLabel>Apartment/Floor (Optional)</ItemLabel>
        </LabelContainer>
        <TouchableOpacity>
          <ItemsWrapper>
            <Item placeholder="Apartment/Building/Floor"></Item>
          </ItemsWrapper>
        </TouchableOpacity>
      </ItemContainer>
      <ItemContainer>
        <LabelContainer>
          <ItemLabel>City</ItemLabel>
        </LabelContainer>
        <TouchableOpacity>
          <ItemsWrapper>
            <Item placeholder="City"></Item>
          </ItemsWrapper>
        </TouchableOpacity>
      </ItemContainer>
      <ItemContainer>
        <LabelContainer>
          <ItemLabel>Postal code</ItemLabel>
        </LabelContainer>
        <TouchableOpacity>
          <ItemsWrapper>
            <Item placeholder="Postal code"></Item>
          </ItemsWrapper>
        </TouchableOpacity>
      </ItemContainer>
      <ContinueButtonContainer>
        <TouchableOpacity onPress={() => setStep(3)}>
          <ContinueButton>Continue</ContinueButton>
        </TouchableOpacity>
      </ContinueButtonContainer>
    </Container>
  );
};

export default CompleteProfileScreen;
