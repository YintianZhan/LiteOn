/*
import React, { Component } from 'react';
import { Container, Header, Left, Body, Right, Button, Icon, Title } from 'native-base';
import { View } from 'react-native'
import { Navigation } from 'react-native-navigation'

export default class PersonalProfile extends Component {
  render() {
    return (
      <View style={{backgroundColor: '#586589', flex: 1}}>
        <Header>
          <Left>
            <Button onPress={() => Navigation.dismissModal(this.props.componentId)}
                    transparent>
              <Icon name= "arrow-back" />
            </Button>
          </Left>
          <Body>
            <Title>Hongrui</Title>
          </Body>
          <Right/>
        </Header>
      </View>
    )
  }
}
*/



import React, { Component } from 'react';
import {
  StyleSheet,
  Text,
  View,
  Image,
  TouchableOpacity,
} from 'react-native';
import { Navigation } from "react-native-navigation";
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

export default class ProfileView extends Component {

  render() {
    return (
      <View style={styles.container}>
        <Header>
          <Left>
            <Button
              onPress={() => Navigation.dismissModal(this.props.componentId)}
              transparent>
              <Icon name="arrow-back" />
            </Button>
          </Left>
          <Body>
            <Title>My Profile</Title>
          </Body>
          <Right>
            <Text>Log Out</Text>
          </Right>
        </Header>

        <View style={styles.header}>
          <View style={styles.headerContent}>
                <Image style={styles.avatar} source={{uri: 'https://bootdey.com/img/Content/avatar/avatar2.png'}}/>
                <Text style={styles.name}>
                  Ian Horswill
                </Text>
          </View>
        </View>

        <View style={styles.profileDetail}>
            <View style={styles.detailContent}>
              <Text style={styles.title}>Watched</Text>
              <Text style={styles.count}>17</Text>
            </View>
            <View style={styles.detailContent}>
              <Text style={styles.title}>Coming Up</Text>
              <Text style={styles.count}>2</Text>
            </View>
            <View style={styles.detailContent}>
              <Text style={styles.title}>Favorite</Text>
              <Text style={styles.count}>4</Text>
            </View>
        </View>

      </View>
    );
  }
}

const styles = StyleSheet.create({
  header:{
    backgroundColor: "#586589",
  },
  headerContent:{
    padding:20,
    alignItems: 'center',
  },
  avatar: {
    width: 100,
    height: 100,
    borderRadius: 50,
    borderWidth: 4,
    borderColor: "white",
    marginBottom:0,
  },
  name:{
    fontSize:22,
    color:"#FFFFFF",
    fontWeight:'600',
  },
  profileDetail:{
    alignSelf: 'center',
    marginTop: 240,
    alignItems: 'center',
    flexDirection: 'row',
    position:'absolute',
    backgroundColor: "#ffffff"
  },
  detailContent:{
    margin:10,
    alignItems: 'center'
  },
  title:{
    fontSize:20,
    color: "#586589"
  },
  count:{
    fontSize:18,
  },
  bodyContent: {
    flex: 1,
    alignItems: 'center',
    padding:30,
    marginTop:400
  },
  textInfo:{
    fontSize:18,
    marginTop:20,
    color: "#696969",
  },
  buttonContainer: {
    marginTop:100,
    height:45,
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
    marginBottom:20,
    width:250,
    borderRadius:30,
    backgroundColor: "#00CED1",
  },
  description:{
    fontSize:20,
    color: "#00CED1",
    marginTop:10,
    textAlign: 'center'
  },
});