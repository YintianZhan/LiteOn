import React, { Component } from 'react';
import {
  AppRegistry,
  StyleSheet,
  Text,
  View,
  ScrollView,
  Dimensions,
  TextInput,
  FlatList,  
  TouchableOpacity
} from 'react-native';
var  NumberArr = [{name:'1',show:'Dolphin show', time:'June 1st'},{name:'2',show:'Panda show', time:'June 2nd'}];


export default class MyMap extends Component {
  constructor(props) {
    super(props);
  
    this.state = {
       NumberArr:[{name:'1',show:'Dolphin show', time:'June 1st'},{name:'2',show:'Panda show', time:'June 2nd'}],
    };
  }
  //改变搜索的文本
  onChanegeTextKeyword(text){

       this.timeA(text);
  }
  //利用防抖方式防止数据过大造成卡顿现象
 timeA(text){
    
     if(this.time){
       clearTimeout(this.time)
     }
     
     this.time = setTimeout(()=>{
              if (text==='') {
                    this.setState({
                      NumberArr:NumberArr,
                      });
                    return;
             }else{
                  for (var i = 0; i < NumberArr.length; i++) {
                     if (NumberArr[i].show.indexOf(text) != -1 || NumberArr[i].time.indexOf(text) != -1) {
                          this.setState({
                               NumberArr:[NumberArr[i]],
                          });
                      return;
              }else{
                   this.setState({
                         NumberArr:[],
                    });
              }
         }
       }
      },500);
      
  }
  //点击城市cell
  showClicked(item){
    alert(item.show);
  }
  //列表的每一行
  renderItemView({item,index}){
    return(
      <TouchableOpacity style={{flex:1,
                                height:60,
                                backgroundColor:'orange',
                        }}
                        onPress={()=>{this.showClicked(item)}}
                       >
        <View style={{backgroundColor:'green',
                      height:59,justifyContent: 'center',
                      alignItems: 'center'}}>
           <Text>{item.show}</Text>
        </View>
      </TouchableOpacity>
    );
  }
  //去除警告
  extraUniqueKey(item,index){
    return index+item;
  }
  render() {
     //给数据追加一个key的字段，不然会有警告的,参数数组中的每一项，需要包含 key 值作为唯一标示
    for (var i = 0; i < NumberArr.length; i++) {
       NumberArr[i]['key'] = i;
    }
    return (
       <View style={styles.container}>
         <TextInput style={{height:50,borderColor:'red',borderWidth:1,marginTop:64}}
                    underlineColorAndroid="transparent"
                    maxLength={20} 
                    placeholder={'输入城市名查询'}
                   // onChangeText={this.onChanegeTextKeyword.bind(this) onSubmitEditing = {this.fetchData.bind(this)}
                   onChangeText={this.onChanegeTextKeyword.bind(this)}>
           
         </TextInput>
         <FlatList style={{backgroundColor:'orange',flex:1}}
                   data = {this.state.NumberArr}
                   renderItem={this.renderItemView.bind(this)}
                   keyExtractor = {this.extraUniqueKey}//去除警告
                  >
           
        </FlatList>
       </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#F5FCFF',
  },
});

AppRegistry.registerComponent('MyMap', () => MyMap);
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
              <Icon name='arrow-back' />
            </Button>
          </Left>
          <Body>
            <Title>Search</Title>
          </Body>
          <Right/>
        </Header>
      </View>
    )
  }
}
*/