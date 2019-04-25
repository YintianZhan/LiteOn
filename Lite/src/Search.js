import React from 'react';
import { SearchBar } from 'react-native-elements';
import {  AppRegistry, StyleSheet, Text, View, ScrollView, Dimensions, TextInput, FlatList, TouchableOpacity } from 'react-native';
import { Container, Header, Left, Body, Right, Button, Icon, Title } from 'native-base';
import { Navigation } from 'react-native-navigation'
import { db } from './config'

var  NumberArr = [];

const cards = require('./src/data/events.json');
/*let cards = null;
const eventRef = db.ref();
eventRef.once('value', (snap) => {
  cards = snap.val()
})*/

for (var name in cards) {
	NumberArr.push({ show: cards[name].name, time: cards[name].startdate, img: cards[name].image });
}
export default class App extends React.Component {
	state = {
	search: '',
    NumberArr:NumberArr,
  };

  updateSearch = search => {
	this.setState({ search });
  }; 

  onChanegeTextKeyword(text){
		  if (text==='') {
			  this.setState({
				  NumberArr:NumberArr,
			  });
			  return;
		  }else{
			  var tempt = [];
			  var t = 0;
			  for (var i = 0; i < NumberArr.length; i++) {
				  if (NumberArr[i].show.indexOf(text) != -1 || NumberArr[i].time.indexOf(text) != -1) {
					  tempt.push(NumberArr[i]);
				  }
			  }this.setState({
				  NumberArr:tempt,
			  });
			  return;
		  }
}

showClicked(item){
  ;
}
  renderItemView({item,index}){
    return(
      <TouchableOpacity style={{flex:1,
                                height:100,
                                backgroundColor:'black',
                        }}
  onPress={() => Navigation.showModal({
	  stack: {
		  children: [{
			  component: {
				  name: 'EventProfile',
				  passProps: {
					  event: NumberArr[index]
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
  render() {
    const { search } = this.state;
    for (var i = 0; i < NumberArr.length; i++) {
      NumberArr[i]['key'] = i;
   }
    return (
      <View  style={styles.container}>
              <Header>
				<Left>
				<Button onPress={() => Navigation.dismissModal(this.props.componentId)}
				transparent>
			<Icon name='arrow-back' />
				</Button>
				</Left>
		<Body>
		<Title>Search</Title>
		</Body>
		<Right/>
</Header>
      <SearchBar
        placeholder="Type Here..."
		onChange={this.updateSearch} 
        onChangeText={this.onChanegeTextKeyword.bind(this)}
        value={search}
      />
      <FlatList style={{backgroundColor:'white',flex:1}}
      data = {this.state.NumberArr}
      renderItem={this.renderItemView.bind(this)}
      keyExtractor = {this.extraUniqueKey}>
     </FlatList>
     </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#FFFFFF',
  },
});
