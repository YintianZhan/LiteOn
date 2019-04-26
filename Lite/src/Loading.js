// Loading.js
import React from 'react'
import { View, Text, ActivityIndicator, StyleSheet } from 'react-native'
import firebase from 'react-native-firebase'

export default class Loading extends React.Component {
    componentDidMount() {
      firebase.auth().onAuthStateChanged(user => 
      //   {
      //   this.props.navigation.navigate(user ? 'Main' : 'SignUp')
      // }
      {Navigation.showModal({
        stack: {
          children: [{
            component: {
              name: user ? 'Home': 'SignUp',
              passProps: {
                // event: item
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
      )
    }
  render() {
    return (
      <View style={styles.container}>
        <Text>Loading</Text>
        <ActivityIndicator size="large" />
      </View>
    )
  }
}
const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  }
})

///Potential Bug