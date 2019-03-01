/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow
 * @lint-ignore-every XPLATJSCOPYRIGHT1
 */

import React, {Component} from 'react'
import {View} from 'react-native'
import HeaderExample from './src/components/header'
import NavBar from './src/components/navbar'
import Picker from './src/components/picker'

export default class App extends Component{
    render() {
      return (
        <View style={{ flex: 1 }}>
          <HeaderExample />
          <Picker />
          <NavBar />
        </View>
      )
    }
 }
