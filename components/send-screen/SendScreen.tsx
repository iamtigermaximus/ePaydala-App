import { StyleSheet, Text, View, TouchableOpacity, Switch } from 'react-native';
import React, { useState } from 'react';
import styled from 'styled-components/native';
import { Entypo, Ionicons, FontAwesome } from '@expo/vector-icons';

const Container = styled.View`
  /* background-color: pink; */
  /* align-items: center; */
  height: 100%;
  gap: 25px;
  padding: 30px 0;
`;
const SuggestionItem = styled.View`
  border: 0.2px solid #35166e;
  display: flex;
  padding: 10px 0;
  background-color: #cfcfe8;
  width: 100px;
`;

const UserImage = styled.View`
  display: flex;
  justify-content: center;
  align-items: center;
  align-self: center;
  background-color: #35166e;
  width: 50px;
  height: 50px;
  border-radius: 50%;
  margin-bottom: 5px;
`;

const UserFullname = styled.Text`
  font-size: 12px;
  font-weight: 700;
  color: #35166e;
  display: flex;
  justify-content: center;
  align-items: center;
  align-self: center;
`;
const ItemContainer = styled.View`
  /* border: 1px solid red; */
  width: 100%;
  display: flex;
  background-color: #cfcfe8;
`;

const SuggestionsContainer = styled.View`
  /* border: 2px solid yellow; */
  display: flex;
  flex-direction: row;
  justify-content: space-evenly;
  background-color: #cfcfe8;
  padding: 5px;
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

const SendScreen = () => {
  return (
    <Container>
      <ItemContainer>
        <TouchableOpacity>
          <ItemsWrapper>
            <Item>
              <ItemIcon>
                <FontAwesome name="search" size={30} color="#35166e" />
              </ItemIcon>
              <ItemText>Search by name or number</ItemText>
            </Item>
          </ItemsWrapper>
        </TouchableOpacity>
      </ItemContainer>
      <ItemContainer>
        <LabelContainer>
          <ItemLabel>Suggestions</ItemLabel>
        </LabelContainer>
        <SuggestionsContainer>
          <SuggestionItem>
            <UserImage />
            <UserFullname>Jose Garcia Marquez</UserFullname>
          </SuggestionItem>
          <SuggestionItem>
            <UserImage />
            <UserFullname>Jose Garcia Marquez</UserFullname>
          </SuggestionItem>
          <SuggestionItem>
            <UserImage />
            <UserFullname>Jose Garcia Marquez</UserFullname>
          </SuggestionItem>
        </SuggestionsContainer>
      </ItemContainer>
    </Container>
  );
};

export default SendScreen;
