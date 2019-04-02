import React, { Component } from 'react';
import { Container, Header, Content, Footer, FooterTab, Button } from 'native-base';
import { Icon } from 'react-native-elements';
import {Navigation} from 'react-native-navigation'
export default class FooterTabs extends Component {
  render() {
    return (
        <Footer style = {{ position: 'absolute', bottom: 0 }}>
          <FooterTab>
            <Button>
              <Icon name="dashboard"
                    color= '#586589'
              />
            </Button>
            <Button onPress={() => Navigation.showModal({
                      stack: {
                        children: [{
                          component: {
                            name: 'Search',
                            options: {
                              topBar: {
                                visible: false
                              }
                            }
                          }
                        }]
                      }
                    })}>
              <Icon name="search"
                    color= '#586589'
              />
            </Button>
            <Button onPress={() => Navigation.showModal({
                      stack: {
                        children: [{
                          component: {
                            name: 'PersonalProfile',
                            options: {
                              topBar: {
                                visible: false
                              }
                            }
                          }
                        }]
                      }
                    })}>
              <Icon name="person"
                    color= '#586589'
              />
            </Button>
          </FooterTab>
        </Footer>
    );
  }
}
