import { StyleSheet, Text, View, TouchableOpacity, Switch } from 'react-native';
import React, { useState } from 'react';
import styled from 'styled-components/native';
import { FontAwesome, MaterialCommunityIcons } from '@expo/vector-icons';

interface SelectPhBankScreenProps {
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

const SelectPhBankScreen: React.FC<SelectPhBankScreenProps> = ({ setStep }) => {
  return (
    <Container>
      <SearchBarContainer>
        <TouchableOpacity>
          <SearchBarWrapper>
            <Item>
              <ItemIcon>
                <FontAwesome name="search" size={30} color="#35166e" />
              </ItemIcon>
              <ItemText>Enter bank name</ItemText>
            </Item>
          </SearchBarWrapper>
        </TouchableOpacity>
      </SearchBarContainer>
      <ItemContainer>
        <TouchableOpacity onPress={() => setStep(4)}>
          <ItemsWrapper>
            <Item>
              <ItemIcon>
                <MaterialCommunityIcons name="bank" size={30} color="#35166e" />
              </ItemIcon>
              <ItemText>BDO Unibank</ItemText>
            </Item>
          </ItemsWrapper>
        </TouchableOpacity>
      </ItemContainer>
      <ItemContainer>
        <TouchableOpacity onPress={() => setStep(4)}>
          <ItemsWrapper>
            <Item>
              <ItemIcon>
                <MaterialCommunityIcons name="bank" size={30} color="#35166e" />
              </ItemIcon>
              <ItemText>Land Bank of the Philippines</ItemText>
            </Item>
          </ItemsWrapper>
        </TouchableOpacity>
      </ItemContainer>
      <ItemContainer>
        <TouchableOpacity onPress={() => setStep(4)}>
          <ItemsWrapper>
            <Item>
              <ItemIcon>
                <MaterialCommunityIcons name="bank" size={30} color="#35166e" />
              </ItemIcon>
              <ItemText>Bano of the Philippine Islands</ItemText>
            </Item>
          </ItemsWrapper>
        </TouchableOpacity>
      </ItemContainer>
      <ItemContainer>
        <TouchableOpacity onPress={() => setStep(4)}>
          <ItemsWrapper>
            <Item>
              <ItemIcon>
                <MaterialCommunityIcons name="bank" size={30} color="#35166e" />
              </ItemIcon>
              <ItemText>Philippine National Bank</ItemText>
            </Item>
          </ItemsWrapper>
        </TouchableOpacity>
      </ItemContainer>
      <ItemContainer>
        <TouchableOpacity onPress={() => setStep(4)}>
          <ItemsWrapper>
            <Item>
              <ItemIcon>
                <MaterialCommunityIcons name="bank" size={30} color="#35166e" />
              </ItemIcon>
              <ItemText>Metrobank</ItemText>
            </Item>
          </ItemsWrapper>
        </TouchableOpacity>
      </ItemContainer>
      <ItemContainer>
        <TouchableOpacity onPress={() => setStep(4)}>
          <ItemsWrapper>
            <Item>
              <ItemIcon>
                <MaterialCommunityIcons name="bank" size={30} color="#35166e" />
              </ItemIcon>
              <ItemText>Development Bank of the Philippines</ItemText>
            </Item>
          </ItemsWrapper>
        </TouchableOpacity>
      </ItemContainer>
      <ItemContainer>
        <TouchableOpacity onPress={() => setStep(4)}>
          <ItemsWrapper>
            <Item>
              <ItemIcon>
                <MaterialCommunityIcons name="bank" size={30} color="#35166e" />
              </ItemIcon>
              <ItemText>East West Banking Corporation</ItemText>
            </Item>
          </ItemsWrapper>
        </TouchableOpacity>
      </ItemContainer>
      <ItemContainer>
        <TouchableOpacity onPress={() => setStep(4)}>
          <ItemsWrapper>
            <Item>
              <ItemIcon>
                <MaterialCommunityIcons name="bank" size={30} color="#35166e" />
              </ItemIcon>
              <ItemText>Security Bank</ItemText>
            </Item>
          </ItemsWrapper>
        </TouchableOpacity>
      </ItemContainer>
    </Container>
  );
};

export default SelectPhBankScreen;
