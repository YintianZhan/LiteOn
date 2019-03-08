import React, { Component } from 'react';
import { Container, Header, Left, Body, Right, Icon, Title, Text, Button} from 'native-base';
import { View, Image } from 'react-native';
import { goHome } from './../components/navigation';
import { Navigation } from 'react-native-navigation'

export default class EventProfile extends Component {
  // static navigationOptions = {
  //   headerMode: 'none'
  // }

  render() {
    // let event = this.props.item;
    return (
      <View style={{backgroundColor: '#586589', flex: 1}}>
        <Header style={{backgroundColor: '#171F33'}}>
          <Left>
            <Button onPress={() => Navigation.dismissModal(this.props.componentId) }
                    transparent>
              <Icon name='close-circle' />
            </Button>
          </Left>
          <Body>
            <Title>{this.props.event.text}</Title>
          </Body>
          <Right/>
        </Header>
        <View>
          <Image style={{ width: 250, height: 250, resizeMode: 'contain' }} source={{uri: this.props.event.image}} />
        </View>
      </View>
    )
  }
}
