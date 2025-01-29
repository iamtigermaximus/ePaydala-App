import { StyleSheet, Text, View, TouchableOpacity, Switch } from 'react-native';
import React, { useState } from 'react';
import styled from 'styled-components/native';
import { FontAwesome, MaterialCommunityIcons } from '@expo/vector-icons';

interface SelectFiBankScreenProps {
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

const SelectFiBankScreen: React.FC<SelectFiBankScreenProps> = ({ setStep }) => {
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
        <TouchableOpacity>
          <ItemsWrapper>
            <Item>
              <ItemIcon>
                <MaterialCommunityIcons name="bank" size={30} color="#35166e" />
              </ItemIcon>
              <ItemText>Nordea</ItemText>
            </Item>
          </ItemsWrapper>
        </TouchableOpacity>
      </ItemContainer>
      <ItemContainer>
        <TouchableOpacity>
          <ItemsWrapper>
            <Item>
              <ItemIcon>
                <MaterialCommunityIcons name="bank" size={30} color="#35166e" />
              </ItemIcon>
              <ItemText>Osuuspankki</ItemText>
            </Item>
          </ItemsWrapper>
        </TouchableOpacity>
      </ItemContainer>
      <ItemContainer>
        <TouchableOpacity>
          <ItemsWrapper>
            <Item>
              <ItemIcon>
                <MaterialCommunityIcons name="bank" size={30} color="#35166e" />
              </ItemIcon>
              <ItemText>Danske Bank</ItemText>
            </Item>
          </ItemsWrapper>
        </TouchableOpacity>
      </ItemContainer>
      <ItemContainer>
        <TouchableOpacity>
          <ItemsWrapper>
            <Item>
              <ItemIcon>
                <MaterialCommunityIcons name="bank" size={30} color="#35166e" />
              </ItemIcon>
              <ItemText>Aktia</ItemText>
            </Item>
          </ItemsWrapper>
        </TouchableOpacity>
      </ItemContainer>
      <ItemContainer>
        <TouchableOpacity>
          <ItemsWrapper>
            <Item>
              <ItemIcon>
                <MaterialCommunityIcons name="bank" size={30} color="#35166e" />
              </ItemIcon>
              <ItemText>POP Bank</ItemText>
            </Item>
          </ItemsWrapper>
        </TouchableOpacity>
      </ItemContainer>
      <ItemContainer>
        <TouchableOpacity>
          <ItemsWrapper>
            <Item>
              <ItemIcon>
                <MaterialCommunityIcons name="bank" size={30} color="#35166e" />
              </ItemIcon>
              <ItemText>Handelsbanken</ItemText>
            </Item>
          </ItemsWrapper>
        </TouchableOpacity>
      </ItemContainer>
      <ItemContainer>
        <TouchableOpacity>
          <ItemsWrapper>
            <Item>
              <ItemIcon>
                <MaterialCommunityIcons name="bank" size={30} color="#35166e" />
              </ItemIcon>
              <ItemText>S-Bank</ItemText>
            </Item>
          </ItemsWrapper>
        </TouchableOpacity>
      </ItemContainer>
      <ItemContainer>
        <TouchableOpacity>
          <ItemsWrapper>
            <Item>
              <ItemIcon>
                <MaterialCommunityIcons name="bank" size={30} color="#35166e" />
              </ItemIcon>
              <ItemText>Savings Bank</ItemText>
            </Item>
          </ItemsWrapper>
        </TouchableOpacity>
      </ItemContainer>
    </Container>
  );
};

export default SelectFiBankScreen;
