import React, { Component } from 'react'
import { View } from 'react-native'
import { Container}  from 'native-base';
import HeaderExample from './components/header'
import NavBar from './components/navbar'
import Picker from './components/picker'
import FooterTabs from './components/footertab'

export default class Home extends Component {
  render() {
    return (
      <Container>
        <View style={{backgroundColor: '#586589', flex: 1}}>
            <HeaderExample />
            <View>
                <Picker />
            </View>
        </View>
        <View>
          <FooterTabs />
        </View>
      </Container>
    )
  }
}
