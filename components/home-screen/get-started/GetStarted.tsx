import { Text, View, TouchableOpacity } from 'react-native';
import React from 'react';
import {
  MaterialCommunityIcons,
  Entypo,
  MaterialIcons,
} from '@expo/vector-icons';
import { useNavigation } from '@react-navigation/native';
import styled from 'styled-components/native';
import { useRouter } from 'expo-router';

const Container = styled.View`
  flex: 1;
  padding: 10px 0;
  font-size: 12px;
`;

const SectionTitle = styled.Text`
  font-size: 13px;
  padding: 0 8px;
  color: #cfcfe8;
`;

const LinkContainer = styled.View`
  /*
    shadowColor: 'gray',
    shadowOffset: {
      width: 0,
      height: 0.5,
    },
    shadowOpacity: 0.25,
    shadowRadius: 3.84,
    elevation: 5,
  */
  display: flex;
  justify-content: space-between;
  align-items: center;
  flex-direction: row;
  padding: 10px;
  background-color: #cfcfe8;
  margin: 5px 0;
  height: 80px;
`;

const LinkItemContainer = styled.View`
  display: flex;
  flex-direction: row;
`;

const LinkItemIcon = styled.Text`
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 5px;
  margin-right: 5px;
`;
const LinkItem = styled.View`
  display: flex;
  justify-content: flex-start;
  align-items: flex-start;
  padding: 5px;
`;

const LinkItemHeader = styled.Text`
  font-size: 13px;
  color: #35166e;
`;

const LinkItemSubtext = styled.Text`
  font-size: 11px;
  color: #35166e;
`;

export default function GetStarted() {
  const router = useRouter();
  return (
    <View>
      <Container>
        <SectionTitle>Get started</SectionTitle>
        <TouchableOpacity>
          <LinkContainer>
            <LinkItemContainer>
              <LinkItemIcon>
                <MaterialCommunityIcons name="bank" size={35} color="#35166e" />
              </LinkItemIcon>
              <LinkItem>
                <LinkItemHeader>Link a Finnish bank</LinkItemHeader>
                <LinkItemSubtext>
                  Send or receive money securely
                </LinkItemSubtext>
              </LinkItem>
            </LinkItemContainer>
            <View>
              <Text>
                <Entypo
                  name="chevron-with-circle-right"
                  size={30}
                  color="#35166e"
                  onPress={() => router.push('/link-fi-bank')}
                />
              </Text>
            </View>
          </LinkContainer>
        </TouchableOpacity>
        <TouchableOpacity>
          <LinkContainer>
            <LinkItemContainer>
              <LinkItemIcon>
                <MaterialCommunityIcons name="bank" size={35} color="#35166e" />
              </LinkItemIcon>
              <LinkItem>
                <LinkItemHeader>Add a PH bank</LinkItemHeader>
                <LinkItemSubtext>
                  Receive PHP from your family and friends
                </LinkItemSubtext>
              </LinkItem>
            </LinkItemContainer>
            <View>
              <Text>
                <Entypo
                  name="chevron-with-circle-right"
                  size={30}
                  color="#35166e"
                  onPress={() => router.push('/link-ph-bank')}
                />
              </Text>
            </View>
          </LinkContainer>
        </TouchableOpacity>
        <TouchableOpacity>
          <LinkContainer>
            <LinkItemContainer>
              <LinkItemIcon>
                <MaterialIcons
                  name="account-balance-wallet"
                  size={30}
                  color="#35166e"
                />
              </LinkItemIcon>
              <LinkItem>
                <LinkItemHeader>Add a PH e-wallet</LinkItemHeader>
                <LinkItemSubtext>
                  Receive PHP from your family and friends
                </LinkItemSubtext>
              </LinkItem>
            </LinkItemContainer>
            <View>
              <Text>
                <Entypo
                  name="chevron-with-circle-right"
                  size={30}
                  color="#35166e"
                  onPress={() => router.push('/link-e-wallet')}
                />
              </Text>
            </View>
          </LinkContainer>
        </TouchableOpacity>
        <TouchableOpacity>
          <LinkContainer>
            <LinkItemContainer>
              <LinkItemIcon>
                <MaterialCommunityIcons name="bank" size={35} color="#35166e" />
              </LinkItemIcon>
              <LinkItem>
                <LinkItemHeader>Link a PH payment method</LinkItemHeader>
                <LinkItemSubtext>Send to FI from a PH bank</LinkItemSubtext>
              </LinkItem>
            </LinkItemContainer>
            <View>
              <Text>
                <Entypo
                  name="chevron-with-circle-right"
                  size={30}
                  color="#35166e"
                  onPress={() => router.push('/link-ph-payment-method')}
                />
              </Text>
            </View>
          </LinkContainer>
        </TouchableOpacity>
      </Container>

      <Container>
        <SectionTitle>Scheduled transfers</SectionTitle>
        <TouchableOpacity>
          <LinkContainer>
            <LinkItemContainer>
              <LinkItemIcon>
                <MaterialCommunityIcons
                  name="calendar-month"
                  size={35}
                  color="#35166e"
                />
              </LinkItemIcon>
              <LinkItem>
                <LinkItemHeader>Schedule a transfer</LinkItemHeader>
                <LinkItemSubtext>Set up repeating payments</LinkItemSubtext>
              </LinkItem>
            </LinkItemContainer>
            <View>
              <Text>
                <Entypo
                  name="chevron-with-circle-right"
                  size={30}
                  color="#35166e"
                />
              </Text>
            </View>
          </LinkContainer>
        </TouchableOpacity>
      </Container>
    </View>
  );
}
