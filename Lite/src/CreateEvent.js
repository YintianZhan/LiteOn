import React, { Component } from 'react';
import { Container, Header, Left, Body, Right, Button, Icon, Title } from 'native-base';
import { View } from 'react-native'

export default class CreateEvent extends Component {
  render() {
    return (
      <View style={{backgroundColor: '#586589', flex: 1}}>
        <Header style={{backgroundColor: '#171F33'}}>
          <Body>
            <Title>New Event</Title>
          </Body>
        </Header>
      </View>
    )
  }
}
