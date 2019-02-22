/**
 * @format
 * @lint-ignore-every XPLATJSCOPYRIGHT1
 */
import React from 'react'
// import ReactNative from 'react-native'

import {AppRegistry} from 'react-native';
import App from './App';
import {name as appName} from './app.json';
import Header from './src/components/header'

// const App = () =>  (
//   <Header />
// );

AppRegistry.registerComponent(appName, () => App);
