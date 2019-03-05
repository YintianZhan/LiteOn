import React, { Component } from 'react';
import { Button , Image } from 'react-native'
import { Container, View, DeckSwiper, Card, CardItem, Thumbnail, Text, Left, Body, Icon } from 'native-base';
import { goToEvent } from './navigation'
const cards = [
  {
    text: 'Ragtime',
    name: 'Ragtime',
    image: require('./img/Ragtime.png'),
  }
];
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
                    <Thumbnail source={item.image} />
                    <Body>
                      <Text>{item.text}</Text>
                      <Text note>DolphinShow</Text>
                    </Body>
                  </Left>
                </CardItem>
                <CardItem cardBody>
                  <Image style={{ height: 300, flex: 1 }} source={item.image} />
                </CardItem>
                <CardItem>
                  <Icon name="heart" style={{ color: '#ED4A6A' }} />
                  <Text>{item.name}</Text>
                </CardItem>
                <CardItem>
                  <Button
                    style={{fontSize: 20, color: 'green'}}
                    onPress={() => this.goToEvent()}
                    title="Info"
                  />
                </CardItem>
              </Card>
            }
          />
         </View>
       </Container>
    );
  }
}
