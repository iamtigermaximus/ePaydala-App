import { StyleSheet, Text, View, TouchableOpacity } from 'react-native';
import React from 'react';
import styled from 'styled-components/native';

const Container = styled.View`
  /* background-color: pink; */
  align-items: center;
  height: 100%;
  gap: 25px;
`;

const ItemContainer = styled.View`
  /* border: 1px solid red; */
  width: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  align-self: center;
  background-color: #cfcfe8;
`;

const HeaderItem = styled.View`
  /* border: 1px solid red; */
  width: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  align-self: center;
  padding: 10px 0;
  background-color: #cfcfe8;
`;

const Item = styled.View`
  /* border: 1px solid red; */
  width: 100%;
  display: flex;

  padding: 10px 0;
  background-color: #cfcfe8;
`;

const UserImage = styled.View`
  display: flex;
  justify-content: center;
  align-items: center;
  align-self: center;
  background-color: #35166e;
  width: 80px;
  height: 80px;
  border-radius: 50%;
  margin-bottom: 5px;
`;

const UserFullname = styled.Text`
  font-size: 25px;
  font-weight: 700;
  color: #35166e;
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

const Email = styled.Text`
  color: #35166e;
  padding: 8px 5px;
  font-size: 16px;
  font-weight: 500;
`;

const PhoneNumber = styled.Text`
  color: #35166e;
  padding: 8px 5px;
  font-size: 16px;
  font-weight: 500;
`;

const Address = styled.Text`
  color: #35166e;
  padding: 8px 5px;
  font-size: 16px;
  font-weight: 500;
`;

const Country = styled.Text`
  color: #35166e;
  padding: 8px 5px;
  font-size: 16px;
  font-weight: 500;
`;

const DeleteButtonContainer = styled.View`
  /* border: 1px solid red; */
  width: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 10px;
`;

const DeleteLabel = styled.Text`
  background-color: tomato;
  color: white;
  padding: 10px 16px;
  font-size: 16px;
  font-weight: 700;
`;

const PersonalInfoScreen = () => {
  return (
    <Container>
      <HeaderItem>
        <UserImage />
        <UserFullname>Jose Garcia Marquez</UserFullname>
      </HeaderItem>
      <ItemContainer>
        <LabelContainer>
          <ItemLabel>Email</ItemLabel>
        </LabelContainer>
        <Item>
          <Email>jose_garcia_marquez@gmail.com</Email>
        </Item>
      </ItemContainer>
      <ItemContainer>
        <LabelContainer>
          <ItemLabel>Phone Number</ItemLabel>
        </LabelContainer>
        <Item>
          <PhoneNumber>+358123456789</PhoneNumber>
        </Item>
      </ItemContainer>
      <ItemContainer>
        <LabelContainer>
          <ItemLabel>Address</ItemLabel>
        </LabelContainer>
        <Item>
          <Address>Paaskylanrine 5 C23 Helsinki 00500</Address>
        </Item>
      </ItemContainer>
      <ItemContainer>
        <LabelContainer>
          <ItemLabel>Country of Residence</ItemLabel>
        </LabelContainer>
        <Item>
          <Country>FI</Country>
        </Item>
      </ItemContainer>
      <DeleteButtonContainer>
        <TouchableOpacity>
          <DeleteLabel>Delete Account</DeleteLabel>
        </TouchableOpacity>
      </DeleteButtonContainer>
    </Container>
  );
};

export default PersonalInfoScreen;
