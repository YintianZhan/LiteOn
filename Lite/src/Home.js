import React, { Component } from 'react'
import { View } from 'react-native'
import { Container, Footer }  from 'native-base';
import HeaderExample from './components/header'
import NavBar from './components/navbar'
import Picker from './components/picker'
import FooterTabs from './components/footertab'

export default class Home extends Component {

  componentDidMount() {
    const { currentUser } = firebase.auth()
    this.setState({ currentUser })
}

  render() {
    return (
        <View style={{backgroundColor: '#586589', flex: 1}}>
            <HeaderExample />
            <View>
                <Picker />
            </View>
            <View style = {{width: '100%', height: 100, position: 'absolute', bottom: 0 }}>
              <FooterTabs />
            </View>
        </View>
    )
  }
}
