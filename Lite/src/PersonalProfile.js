import React, { Component } from 'react';
import {StyleSheet,Text,View,Image,TouchableOpacity,ScrollView, FlatList} from 'react-native';
import { Navigation } from 'react-native-navigation';
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

var  ComingUp = [];
var past_Activity = [];

const cards = require('./data/events.json');
var tempt = 0;
var oName = "DolphinShow"
for (var name in cards) {
  if(oName == cards[name].organization)
  {
  ComingUp.push({ show: cards[name].name, time: cards[name].startdate, img: cards[name].image, index: tempt });
  tempt++;
  }
}

export default class ProfileView extends Component {

  state = {
    NumberArr:ComingUp,
  };

 renderItemView({item,index}){
    return(
      <TouchableOpacity style={{flex:1,
                                height:100,
                                backgroundColor:'gray',
                        }}
  onPress={() => Navigation.showModal({
    stack: {
      children: [{
        component: {
          name: 'EventProfile',
          passProps: {
            event: cards[index]
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
                       >
    <View  style={{flex: 1, flexDirection: 'row', backgroundColor:'white',
      height:98,alignItems: 'flex-start', borderWidth: 1}}>
      <Image style= { { width: 100, height: 100}}
        source= {{ uri: item.img }} />
      <View style={{justifyContent: 'center', width: 200}}>
        <Text style= { {fontSize: 24}}>{item.show}</Text>
        <Text> {item.time} </Text>
      </View>
     </View>
      </TouchableOpacity>
    );
  }
    extraUniqueKey(item,index){
    return index+item;
  }

onPress1 = () => { this.setState({NumberArr: past_Activity})}
onPress2 = () => { this.setState({NumberArr: ComingUp})}

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
                  Tony Zhang
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
          <ScrollView style={styles.container}>
          <View style={styles.body}>
            <View style={styles.bodyContent}>
              <Text style={styles.description}>
                My Recent Activities
              </Text>
              <View style={{flexDirection: 'row',}}>
              </View>
            </View>
            <FlatList style={{backgroundColor:'white',flex:1}}
                   data = {this.state.NumberArr}
                   renderItem={this.renderItemView.bind(this)}
                   keyExtractor = {this.extraUniqueKey}>
            </FlatList>
          </View>
          </ScrollView>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  Header:{
    marginTop: 500, 
  }, 
  header:{ 
    backgroundColor: "#586589",
  },
  headerContent:{
    padding:30,
    alignItems: 'center',
  },
  avatar: {
    width: 130,
    height: 130,
    borderRadius: 63,
    borderWidth: 4,
    borderColor: "white",
    marginBottom:10,
  },
  name:{
    fontSize:22,
    color:"#FFFFFF",
    fontWeight:'600',
  },
  profileDetail:{
    alignSelf: 'center',
    marginTop:300,
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
    marginTop:40
  },
  textInfo:{
    fontSize:18,
    marginTop:20,
    color: "#696969",
  },
  buttonContainer: {
    marginTop:10,
    height:45,
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
    marginBottom:10,
    width:200,
    borderRadius:30,
    backgroundColor: "#00CED1",
  },
  description:{
    fontSize:20,
    textAlign: 'center'
  },
});





/*
import React, { Component } from 'react';
import {
  StyleSheet,
  Text,
  View,
  Image,
  TouchableOpacity,
  ScrollView,
  FlatList
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
    marginTop: 340,
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
    fontSize:30,
    textAlign: 'center'
  },
});


*/