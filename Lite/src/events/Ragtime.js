import React, { Component } from 'react';
import { Container, Header, Left, Body, Right, Button, Icon, Title } from 'native-base';
import { View } from 'react-native';
import { goHome } from './../components/navigation';

export default class Ragtime extends Component {
  static navigationOptions = {
    headerMode: 'none'
  }
  // goBack = async () => {
  //     goHome()
  // }
  render() {
    return (
      <View style={{backgroundColor: '#586589', flex: 1}}>
        <Header style={{backgroundColor: '#171F33'}}>
          <Left>
            <Button onPress={ goHome }
                    transparent>
              <Icon name='arrow-back' />
            </Button>
          </Left>
          <Body>
            <Title>Ragtime</Title>
          </Body>
          <Right/>
        </Header>
      </View>
    )
  }
}
