import React, { Component } from "react";
import {
  Container,
  Header,
  Left,
  Body,
  Right,
  Button,
  Icon,
  Title
} from "native-base";
import { View, Alert } from "react-native";
import { Navigation } from "react-native-navigation";
import { db } from "./config";

export default class CreateEvent extends Component {
  writeToFirebase = () => {
    //hard code is lyfe
    const newEvent = {
      cast: {
        casts: [
          {
            actor: "Idina Menzel",
            char: "Maureen Johnson",
            id: "IM",
            pic:
              "data:image/jpeg;base64,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"
          }
        ],
        length: 1
      },
      description:
        "It tells the story of a group of impoverished young artists struggling to survive and create a life in Lower Manhattan's East Village in the thriving days of Bohemian Alphabet City, under the shadow of HIV/AIDS.",
      genre: "Musical",
      image: "https://upload.wikimedia.org/wikipedia/en/e/ea/Rentpostera.jpg",
      name: "Rent",
      organization: "StuCo",
      text: "Hard Kode is Lyfe"
    };
    const eventKey = db
      .ref()
      .child("events")
      .push().key;
    const updates = {};
    updates["/events/" + eventKey] = newEvent;

    return db.ref().update(updates);
  };
  render() {
    return (
      <View style={{ backgroundColor: "#586589", flex: 1 }}>
        <Header>
          <Left>
            <Button
              onPress={() => Navigation.dismissModal(this.props.componentId)}
              transparent
            >
              <Icon name="arrow-back" />
            </Button>
          </Left>
          <Body>
            <Title>New Event</Title>
            <Button onPress={this.writeToFirebase}>
              <Icon
                name="firebase"
                reversed="true"
                type="MaterialCommunityIcons"
              />
            </Button>
          </Body>
          <Right />
        </Header>
      </View>
    );
  }
}