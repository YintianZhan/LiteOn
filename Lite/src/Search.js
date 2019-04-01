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

  onChanegeTextKeyword(text){

       this.timeA(text);
  }

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
  showClicked(item){
    alert(item.show);
  }

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
  extraUniqueKey(item,index){
    return index+item;
  }
  render() {
    for (var i = 0; i < NumberArr.length; i++) {
       NumberArr[i]['key'] = i;
    }
    return (
       <View style={styles.container}>
         <TextInput style={{height:50,borderColor:'red',borderWidth:1,marginTop:64}}
                    underlineColorAndroid="transparent"
                    maxLength={20} 
                    placeholder={'Search'}
                   onChangeText={this.onChanegeTextKeyword.bind(this)}>
           
         </TextInput>
         <FlatList style={{backgroundColor:'orange',flex:1}}
                   data = {this.state.NumberArr}
                   renderItem={this.renderItemView.bind(this)}
                   keyExtractor = {this.extraUniqueKey}
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
