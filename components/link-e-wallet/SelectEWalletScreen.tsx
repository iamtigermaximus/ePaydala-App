import { StyleSheet, Text, View, TouchableOpacity, Switch } from 'react-native';
import React, { useState } from 'react';
import styled from 'styled-components/native';
import { FontAwesome, MaterialCommunityIcons } from '@expo/vector-icons';

interface SelectEWalletScreenProps {
  setStep: (step: number) => void;
}
const Container = styled.View`
  /* background-color: pink; */
  /* align-items: center; */
  height: 100%;
  gap: 10px;
  padding: 30px 0;
`;

const ItemContainer = styled.View`
  /* border: 1px solid red; */
  width: 100%;
  display: flex;
  background-color: #cfcfe8;
`;

const SearchBarContainer = styled.View`
  /* border: 1px solid red; */
  width: 100%;
  display: flex;
  background-color: #cfcfe8;
  margin-bottom: 20px;
`;

const SearchBarWrapper = styled.View`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  padding: 8px 2px;
`;

const ItemsWrapper = styled.View`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  padding: 4px 2px;
`;

const Item = styled.View`
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
  justify-content: flex-start;
  background-color: #05122d;
  padding: 5px 0;
`;

const ItemLabel = styled.Text`
  font-size: 16px;
  color: white;
`;

const ItemText = styled.Text`
  font-size: 16px;
  color: #35166e;
`;

const SelectEWalletScreen: React.FC<SelectEWalletScreenProps> = ({
  setStep,
}) => {
  return (
    <Container>
      <SearchBarContainer>
        <TouchableOpacity>
          <SearchBarWrapper>
            <Item>
              <ItemIcon>
                <FontAwesome name="search" size={30} color="#35166e" />
              </ItemIcon>
              <ItemText>Search for e-wallet</ItemText>
            </Item>
          </SearchBarWrapper>
        </TouchableOpacity>
      </SearchBarContainer>
      <ItemContainer>
        <TouchableOpacity onPress={() => setStep(3)}>
          <ItemsWrapper>
            <Item>
              <ItemIcon>
                <MaterialCommunityIcons name="bank" size={30} color="#35166e" />
              </ItemIcon>
              <ItemText>GCash</ItemText>
            </Item>
          </ItemsWrapper>
        </TouchableOpacity>
      </ItemContainer>
      <ItemContainer>
        <TouchableOpacity onPress={() => setStep(3)}>
          <ItemsWrapper>
            <Item>
              <ItemIcon>
                <MaterialCommunityIcons name="bank" size={30} color="#35166e" />
              </ItemIcon>
              <ItemText>Maya</ItemText>
            </Item>
          </ItemsWrapper>
        </TouchableOpacity>
      </ItemContainer>
      <ItemContainer>
        <TouchableOpacity onPress={() => setStep(3)}>
          <ItemsWrapper>
            <Item>
              <ItemIcon>
                <MaterialCommunityIcons name="bank" size={30} color="#35166e" />
              </ItemIcon>
              <ItemText>GrabPay</ItemText>
            </Item>
          </ItemsWrapper>
        </TouchableOpacity>
      </ItemContainer>
      <ItemContainer>
        <TouchableOpacity onPress={() => setStep(3)}>
          <ItemsWrapper>
            <Item>
              <ItemIcon>
                <MaterialCommunityIcons name="bank" size={30} color="#35166e" />
              </ItemIcon>
              <ItemText>ShopeePay</ItemText>
            </Item>
          </ItemsWrapper>
        </TouchableOpacity>
      </ItemContainer>
      <ItemContainer>
        <TouchableOpacity onPress={() => setStep(3)}>
          <ItemsWrapper>
            <Item>
              <ItemIcon>
                <MaterialCommunityIcons name="bank" size={30} color="#35166e" />
              </ItemIcon>
              <ItemText>PalawanPay</ItemText>
            </Item>
          </ItemsWrapper>
        </TouchableOpacity>
      </ItemContainer>
      <ItemContainer>
        <TouchableOpacity onPress={() => setStep(3)}>
          <ItemsWrapper>
            <Item>
              <ItemIcon>
                <MaterialCommunityIcons name="bank" size={30} color="#35166e" />
              </ItemIcon>
              <ItemText>Coins.PH</ItemText>
            </Item>
          </ItemsWrapper>
        </TouchableOpacity>
      </ItemContainer>
      <ItemContainer>
        <TouchableOpacity onPress={() => setStep(3)}>
          <ItemsWrapper>
            <Item>
              <ItemIcon>
                <MaterialCommunityIcons name="bank" size={30} color="#35166e" />
              </ItemIcon>
              <ItemText>StarPay</ItemText>
            </Item>
          </ItemsWrapper>
        </TouchableOpacity>
      </ItemContainer>
      <ItemContainer>
        <TouchableOpacity onPress={() => setStep(3)}>
          <ItemsWrapper>
            <Item>
              <ItemIcon>
                <MaterialCommunityIcons name="bank" size={30} color="#35166e" />
              </ItemIcon>
              <ItemText>TayoCash Inc.</ItemText>
            </Item>
          </ItemsWrapper>
        </TouchableOpacity>
      </ItemContainer>
    </Container>
  );
};

export default SelectEWalletScreen;
