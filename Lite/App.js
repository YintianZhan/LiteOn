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
import { Container} from 'native-base';
import HeaderExample from './src/components/header'
import NavBar from './src/components/navbar'
import Picker from './src/components/picker'
import FooterTabs from './src/components/footertab'

export default class App extends Component{
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
