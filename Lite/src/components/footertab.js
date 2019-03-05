import React, { Component } from 'react';
import { Container, Header, Content, Footer, FooterTab, Button } from 'native-base';
import { Icon } from 'react-native-elements';
import {Navigation} from 'react-native-navigation'
export default class FooterTabs extends Component {
  render() {
    return (
        <Footer style={{backgroundColor: '#171F33'}}>
          <FooterTab>
            <Button>
              <Icon name="dashboard"
                    color= '#586589'
              />
            </Button>
            <Button>
              <Icon name="search"
                    color= '#586589'
              />
            </Button>
            <Button >
              <Icon name='ios-star'
                    color= '#586589'
              />
            </Button>
            <Button>
              <Icon name="person"
                    color= '#586589'
              />
            </Button>
          </FooterTab>
        </Footer>
    );
  }
}
