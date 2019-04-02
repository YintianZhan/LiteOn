import React, { Component } from 'react';
import { Container, Header, Left, Body, Right, Title, Text, Button} from 'native-base';
import { View, Image, ScrollView } from 'react-native';
import { goHome } from './../components/navigation';
import { Navigation } from 'react-native-navigation';
import Icon from 'react-native-vector-icons/Ionicons';
import ScrollableTabView, {DefaultTabBar, } from 'react-native-scrollable-tab-view';
import Casts from './Casts'


export default class EventProfile extends Component {

  render() {
    return (
      <ScrollView style={{backgroundColor: '#586589', flex: 1}}>
        <Header>
          <Left>
            <Button onPress={() => Navigation.dismissModal(this.props.componentId) }
                    transparent>
              <Icon name= 'ios-close-circle-outline' size={25} color="blue" />
            </Button>
          </Left>
          <Body>
            <Title>{this.props.event.text}</Title>
          </Body>
          <Right/>
        </Header>
        <View>
          <Container style = {cardContainer}>
            <Image style={cardImage} source={{uri: this.props.event.image}} />
            <View style={cardDetails}>
							<Text style={cardTitle}>{this.props.event.text}</Text>
							<Text style={cardTagline}>{this.props.event.description}</Text>
							<View style={cardGenre}>
								<Text>
									{this.props.event.genre}
								</Text>
							</View>
							<View style={cardNumbers}>
								<View style={cardStar}>
									{iconStar}
									<Text style={cardStarRatings}>8.9</Text>
								</View>
								<Text style={cardRunningHours} />
							</View>
						</View>
          </Container>
        </View>
        <View style={contentContainer}>
          <ScrollableTabView
              style={{marginTop: 20, }}
              initialPage={1}
              renderTabBar={() => <DefaultTabBar />}
          >
              <Text tabLabel='INFO'>{this.props.event.description}</Text>
              <Casts tabLabel='CAST' info={this.props.event.cast.casts} length = {this.props.event.cast.length}/>
              <Text tabLabel='COMMENTS'>Comments</Text>
          </ScrollableTabView>
				</View>
      </ScrollView>
    )
  }
}

const cardContainer = {
		flex: 1,
		position: 'absolute',
		top: 20,
		right: 16,
		left: 16,
		flexDirection: 'row',
    backgroundColor: '#586589'
}

const cardImage = {
		height: 184,
		width: 135,
		borderRadius: 3
}

const cardDetails = {
		paddingLeft: 10,
		flex: 1,
		paddingTop: 5
}

const cardTitle = {
		color: 'white',
		fontSize: 19,
		fontWeight: '500',
		paddingTop: 10
}

const	cardTagline = {
		color: 'white',
		fontSize: 15
}

const	cardGenre = {
		flexDirection: 'row'
}

const	cardGenreItem = {
		textAlign: 'left',
		fontSize: 11,
		marginRight: 5,
		color: 'white'
}

const cardNumbers = {
		flexDirection: 'row',
		marginTop: 5
}

const cardStar = {
		flexDirection: 'row'
}

const	cardStarRatings = {
		marginLeft: 5,
		fontSize: 12,
		color: 'white'
}

const cardRunningHours = {
		marginLeft: 5,
		fontSize: 12
}

const contentContainer = {
		flex: 1,
		marginTop: 250
}

const textStyle = {
		color: 'white',
		paddingTop: 10,
		fontSize: 12,
		fontWeight: 'bold'
}

const underlineStyle =  {
		backgroundColor: '#EA0000'
}

const	tabBar = {
		backgroundColor: '#131313'
}

const iconStar = <Icon name="ios-star" size={16} color="#F5B642" />
