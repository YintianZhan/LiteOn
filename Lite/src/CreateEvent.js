import React, { Component } from 'react';
import { Container, Header, Left, Body, Right, Button, Icon, Title } from 'native-base';
import { View } from 'react-native'
import { Navigation } from 'react-native-navigation'

export default class CreateEvent extends Component {
  render() {
    return (
      <View style={{backgroundColor: '#586589', flex: 1}}>
        <Header>
          <Left>
            <Button onPress={() => Navigation.dismissModal(this.props.componentId)}
                    transparent>
              <Icon name='arrow-back' />
            </Button>
          </Left>
          <Body>
            <Title>New Event</Title>
          </Body>
          <Right/>
        </Header>
      </View>
    )
  }
}