import React, { Component } from 'react';
import { Container, Header, Left, Body, Right, Button, Icon, Title } from 'native-base';
import { AsyncStorage } from 'react-native'
import { goToAuth } from './navigation'
import {Navigation} from 'react-native-navigation';
import { USER_KEY } from './config'

export default class HeaderExample extends Component {
  logout = async () => {
    try {
      await AsyncStorage.removeItem(USER_KEY)
      goToAuth()
    } catch (err) {
      console.log('error signing out...: ', err)
    }
  }
  render() {
    return (
        <Header>
          <Left>
            <Button onPress={this.logout}
                    transparent>
              <Icon name='arrow-back' />
            </Button>
          </Left>
          <Body>
            <Title>Discover</Title>
          </Body>
          <Right>
            <Button transparent>
              <Icon name='menu' />
            </Button>
          </Right>
        </Header>

    )
  }
}
