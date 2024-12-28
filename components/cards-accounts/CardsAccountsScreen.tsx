import { StyleSheet, Text, View, TouchableOpacity } from 'react-native';
import React from 'react';
import styled from 'styled-components/native';
import { Entypo, MaterialCommunityIcons } from '@expo/vector-icons';

const Container = styled.View`
  /* background-color: pink; */
  /* align-items: center; */
  height: 100%;
  gap: 25px;
  padding: 30px 0;
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

const AddAccountButtonContainer = styled.View`
  /* border: 1px solid red; */
  width: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 8px;
  background-color: #5a2bdb;
`;

const AddAccountButton = styled.Text`
  color: white;
  padding: 10px 16px;
  font-size: 16px;
  font-weight: 700;
`;

const CardsAccountsScreen = () => {
  return (
    <Container>
      <ItemContainer>
        <LabelContainer>
          <ItemLabel>FI Bank Account</ItemLabel>
        </LabelContainer>
        <TouchableOpacity>
          <ItemsWrapper>
            <Item>
              <ItemIcon>
                <MaterialCommunityIcons name="bank" size={30} color="#35166e" />
              </ItemIcon>
              <ItemText>No accounts linked</ItemText>
            </Item>
            <ItemIcon>
              <Entypo
                name="chevron-with-circle-right"
                size={25}
                color="#35166e"
              />
            </ItemIcon>
          </ItemsWrapper>
        </TouchableOpacity>
      </ItemContainer>
      <ItemContainer>
        <LabelContainer>
          <ItemLabel>PH Payment Methods</ItemLabel>
        </LabelContainer>
        <TouchableOpacity>
          <ItemsWrapper>
            <Item>
              <ItemIcon>
                <MaterialCommunityIcons name="bank" size={30} color="#35166e" />
              </ItemIcon>
              <ItemText>No accounts linked</ItemText>
            </Item>
            <ItemIcon>
              <Entypo
                name="chevron-with-circle-right"
                size={25}
                color="#35166e"
              />
            </ItemIcon>
          </ItemsWrapper>
        </TouchableOpacity>
      </ItemContainer>
      <ItemContainer>
        <LabelContainer>
          <ItemLabel>PH Receiving Methods</ItemLabel>
        </LabelContainer>
        <TouchableOpacity>
          <ItemsWrapper>
            <Item>
              <ItemIcon>
                <MaterialCommunityIcons name="bank" size={30} color="#35166e" />
              </ItemIcon>
              <ItemText>No accounts linked</ItemText>
            </Item>
            <ItemIcon>
              <Entypo
                name="chevron-with-circle-right"
                size={25}
                color="#35166e"
              />
            </ItemIcon>
          </ItemsWrapper>
        </TouchableOpacity>
      </ItemContainer>

      <AddAccountButtonContainer>
        <TouchableOpacity>
          <AddAccountButton>Add Account</AddAccountButton>
        </TouchableOpacity>
      </AddAccountButtonContainer>
    </Container>
  );
};

export default CardsAccountsScreen;
