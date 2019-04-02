import React, { Component } from 'react'
import { View } from 'react-native'
import { Container, Footer }  from 'native-base';
import HeaderExample from './components/header'
import NavBar from './components/navbar'
import Picker from './components/picker'
import FooterTabsOrg from './components/footertaborg'
import { Navigation } from 'react-native-navigation'

export default class Home extends Component {
  render() {
    return (
        <View style={{backgroundColor: '#586589', flex: 1}}>
            <HeaderExample />
            <View>
                <Picker />
            </View>
            <View style = {{width: '100%', height: 100, position: 'absolute', bottom: 0 }}>
              <FooterTabsOrg />
            </View>
        </View>
    )
  }
}
