import React, { Component } from 'react';
import { Button , Image } from 'react-native'
import { Container, View, DeckSwiper, Card, CardItem, Thumbnail, Text, Left, Right, Body, Icon } from 'native-base';
import { goToEvent } from './navigation'
import { EventProfile } from '../event/EventProfile'
import { Navigation } from 'react-native-navigation'


const cards = require('../data/events.json')
export default class Picker extends Component {
  goToEvent = async () => {
    try {
       goToEvent()
    } catch (err) {
      console.log('error: fail to to event', err)
    }
  }
  render() {
    return (
       <Container>
        <View>
          <DeckSwiper
            dataSource={cards}
            renderItem={item =>
              <Card style={{ elevation: 3 }}>
                <CardItem>
                  <Left>
                    <Thumbnail source={{uri: item.image}} />
                    <Body>
                      <Text>{item.text}</Text>
                      <Text note>{item.organization}</Text>
                    </Body>
                  </Left>
                  <Right>
                    <Icon
                      size = {50}
                      style={{ color: 'green'}}
                      onPress={() => Navigation.showModal({
                                stack: {
                                  children: [{
                                    component: {
                                      name: 'EventProfile',
                                      passProps: {
                                        event: item
                                      },
                                      options: {
                                        topBar: {
                                          visible: false
                                        }
                                      }
                                    }
                                  }]
                                }
                              })}
                      name= 'information-circle'/>
                  </Right>
                </CardItem>
                <CardItem cardBody>
                  <Image style={{ height: 300, flex: 1 }} source={{uri: item.image}} />
                </CardItem>
                <CardItem>
                  <Icon name="heart" style={{ color: '#ED4A6A' }} />
                  <Text>{item.name}</Text>
                </CardItem>
              </Card>
            }
          />
         </View>
       </Container>
    );
  }
}
