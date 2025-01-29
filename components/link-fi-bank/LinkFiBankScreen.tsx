import { StyleSheet, Text, View, TouchableOpacity, Image } from 'react-native';
import React, { useState } from 'react';
import styled from 'styled-components/native';
import { Entypo, MaterialCommunityIcons } from '@expo/vector-icons';
import { useRouter } from 'expo-router';

interface LinkFiBankScreenProps {
  setStep: (step: number) => void;
}

const Container = styled.View`
  /* background-color: pink; */
  /* align-items: center; */
  height: 100%;
  gap: 25px;
  /* padding: 30px 0; */
  flex: 1;
  justify-content: space-between;
  padding-bottom: 100px;
`;

const LogoContainer = styled.View`
  display: flex;
  justify-content: center;
  align-items: center;
`;

const Logo = styled.Image`
  width: 250px;
  height: 250px;
`;

const ContentContainer = styled.View`
  gap: 10px;
  border: 1px solid #05122d;
`;

const ItemContainer = styled.View`
  /* border: 1px solid red; */
  width: 100%;
  display: flex;
  background-color: transparent;
`;

const ItemsWrapper = styled.View`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  padding: 10px 2px;
`;

const Item = styled.View`
  gap: 10px;
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
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
  justify-content: center;
  align-items: center;
  background-color: #05122d;
  padding: 5px 0;
`;

const Label = styled.Text`
  font-size: 12px;
  color: white;
`;

const ItemText = styled.Text`
  font-size: 16px;
  color: #fff;
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

const LinkFiBankScreen: React.FC<LinkFiBankScreenProps> = ({ setStep }) => {
  const router = useRouter();

  return (
    <Container>
      <ContentContainer>
        <LogoContainer>
          <Logo
            source={require('../../assets/images/ePaydala-navy-piclogo.png')}
            resizeMode="contain"
          />
        </LogoContainer>
        <ItemContainer>
          <TouchableOpacity>
            <ItemsWrapper>
              <Item>
                <ItemIcon>
                  <MaterialCommunityIcons name="bank" size={30} color="#fff" />
                </ItemIcon>
                <ItemText>Send and receive money in your account </ItemText>
              </Item>
            </ItemsWrapper>
          </TouchableOpacity>
        </ItemContainer>
        <ItemContainer>
          <TouchableOpacity>
            <ItemsWrapper>
              <Item>
                <ItemIcon>
                  <MaterialCommunityIcons
                    name="file-document"
                    size={30}
                    color="#fff"
                  />
                </ItemIcon>
                <ItemText>
                  More information may be required to verify your identity
                </ItemText>
              </Item>
            </ItemsWrapper>
          </TouchableOpacity>
        </ItemContainer>
        <ItemContainer>
          <TouchableOpacity>
            <ItemsWrapper>
              <Item>
                <ItemIcon>
                  <MaterialCommunityIcons name="lock" size={30} color="#fff" />
                </ItemIcon>
                <ItemText>
                  We use 2048-bit encryption and never store bank login details
                </ItemText>
              </Item>
            </ItemsWrapper>
          </TouchableOpacity>
        </ItemContainer>
      </ContentContainer>
      <ContentContainer>
        <LabelContainer>
          <Label>
            By selecting "Continue" you agree to the Terms of Service and allow
            ePaydala to debit your account.
          </Label>
        </LabelContainer>
        <ContinueButtonContainer>
          <TouchableOpacity onPress={() => setStep(2)}>
            <ContinueButton>Continue</ContinueButton>
          </TouchableOpacity>
        </ContinueButtonContainer>
      </ContentContainer>
    </Container>
  );
};

export default LinkFiBankScreen;
