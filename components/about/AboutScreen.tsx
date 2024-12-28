import { StyleSheet, Text, View, TouchableOpacity, Switch } from 'react-native';
import React, { useState } from 'react';
import styled from 'styled-components/native';
import {
  Entypo,
  Ionicons,
  MaterialIcons,
  MaterialCommunityIcons,
  Octicons,
} from '@expo/vector-icons';

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

const FingerPrintSwitch = styled.Switch`
  transform: scale(0.8);
  display: flex;
  justify-content: center;
  align-items: center;
`;

const SwitchIcon = styled.View`
  display: flex;
  justify-content: center;
  align-items: center;
`;

const AboutScreen = () => {
  const [isEnabled, setIsEnabled] = useState(false);
  const toggleSwitch = () => setIsEnabled((previousState) => !previousState);
  return (
    <Container>
      <ItemContainer>
        <LabelContainer>
          <ItemLabel>Terms of service</ItemLabel>
        </LabelContainer>
        <TouchableOpacity>
          <ItemsWrapper>
            <Item>
              <ItemIcon>
                <Ionicons name="document-text" size={30} color="#35166e" />
              </ItemIcon>
              <ItemText>Rules and guidelines for using our app</ItemText>
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
          <ItemLabel>Open source licenses</ItemLabel>
        </LabelContainer>
        <TouchableOpacity>
          <ItemsWrapper>
            <Item>
              <ItemIcon>
                <MaterialCommunityIcons
                  name="license"
                  size={30}
                  color="#35166e"
                />
              </ItemIcon>
              <ItemText>View opensource libraries</ItemText>
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
          <ItemLabel>Version</ItemLabel>
        </LabelContainer>
        <TouchableOpacity>
          <ItemsWrapper>
            <Item>
              <ItemIcon>
                <Octicons name="versions" size={30} color="#35166e" />
              </ItemIcon>
              <ItemText>Version 1.0</ItemText>
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
    </Container>
  );
};

export default AboutScreen;
