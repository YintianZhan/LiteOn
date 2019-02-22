/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow
 * @lint-ignore-every XPLATJSCOPYRIGHT1
 */

 import React, {Component} from 'react';
 import {Platform, StyleSheet, Text, View} from 'react-native';
 import { Icon } from 'react-native-elements'
 import BottomNavigation, {
   FullTab
 } from 'react-native-material-bottom-navigation'

 export default class App extends React.Component {
   tabs = [
     {
       key: 'dashboard',
       icon: 'dashboard',
       label: 'Dashboard',
       barColor: '#388E3C',
       pressColor: 'rgba(255, 255, 255, 0.16)'
     },
     {
       key: 'search',
       icon: 'search',
       label: 'Search',
       barColor: '#B71C1C',
       pressColor: 'rgba(255, 255, 255, 0.16)'
     },
     {
       key: 'discussion',
       icon: 'chat',
       label: 'Discussion',
       barColor: '#E64A19',
       pressColor: 'rgba(255, 255, 255, 0.16)'
     },
     {
       key: 'profile',
       icon: 'person',
       label: 'Profile',
       barColor: '#FFA500', //gold
       pressColor: 'rgba(255, 255, 255, 0.16)'
     }
   ]

   renderIcon = icon => ({ isActive }) => (
     <Icon size={24} color="white" name={icon} />
   )

   renderTab = ({ tab, isActive }) => (
     <FullTab
       isActive={isActive}
       key={tab.key}
       label={tab.label}
       renderIcon={this.renderIcon(tab.icon)}
     />
   )

   render() {
     return (
       <View style={{ flex: 1 }}>
         <View style={{ flex: 1 }}>
           {/* Your screen contents depending on current tab. */}
         </View>
         <BottomNavigation
           onTabPress={newTab => this.setState({ activeTab: newTab.key })}
           renderTab={this.renderTab}
           tabs={this.tabs}
         />
       </View>
     )
   }
 }
