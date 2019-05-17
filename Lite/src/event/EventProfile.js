import React, { Component } from 'react';
import { Container, Header, Left, Body, Right, Title, Text, Button} from 'native-base';
import { View, Image, ScrollView, Modal, TouchableHighlight, StyleSheet } from 'react-native';
import { goHome } from './../components/navigation';
import { Navigation } from 'react-native-navigation';
import Icon from 'react-native-vector-icons/Ionicons';
import ScrollableTabView, {DefaultTabBar, } from 'react-native-scrollable-tab-view';
import Casts from './Casts'
import Comments from './Comments'
import StarRating from 'react-native-star-rating'


export default class EventProfile extends Component {
  state = {
		modalVisible: false,
		starCount: 3.5
	};
	setModalVisible(visible) {
		this.setState({modalVisible: visible});
	}
	onStarRatingPress(rating) {
		this.setState({
			starCount: rating
		});
	}
  render() {
    return (
      <View style={{flex: 1}}>
        <Header>
          <Left>
            <Button onPress={() => Navigation.dismissModal(this.props.componentId) }
                    transparent>
              <Icon name= 'ios-close-circle-outline' size={25} color="blue" />
            </Button>
          </Left>
          <Body>
            <Title>{this.props.event.genre}</Title>
          </Body>
          <Right/>
        </Header>
        <ScrollView style={{backgroundColor: '#586589', flex: 1}}>
          <View>
            <Container style = {cardContainer}>
              <Image style={cardImage} source={{uri: this.props.event.image}} />
              <View style={cardDetails}>
  							<Text style={cardTitle}>{this.props.event.text}</Text>
                <View style = {cardTaglineView}>
                  <Text style={cardTagline}>{this.props.event.description}</Text>
                </View>
                <Modal
					animationType="slide"
					transparent={true}
					visible={this.state.modalVisible}
					onRequestClose={()=>this.setState({visibility:false})}
				>
					<View style={styles.container}>
						<View style={styles.modalContainer}>
							<StarRating
								disabled={false}
								maxStars={5}
								rating={this.state.starCount}
								selectedStar={(rating) => this.onStarRatingPress(rating)}
								fullStarColor= { "yellow" } />
						<View>
						<TouchableHighlight onPress={() => {
							this.setModalVisible(!this.state.modalVisible);
						}}>
						<Text style= {styles.modalMessage}>Submit</Text>
						</TouchableHighlight>
						</View>
						</View>
					</View>
				</Modal>
          <View style={cardNumbers}>
  					<View style={cardStar}>
						<TouchableHighlight title="1" onPress={() => {this.setModalVisible(true);}}>
  						{iconStar}</TouchableHighlight>
  						<Text style={cardStarRatings}>{this.state.starCount}</Text>
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
                <Comments tabLabel='COMMENTS'>Comments</Comments>
            </ScrollableTabView>
  				</View>
        </ScrollView>
      </View>
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
		height: 220,
		width: 160,
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

const cardTaglineView = {
    flex: 0,
    backgroundColor: '#586589',
    height: 160,
		width: 180,
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

const styles = StyleSheet.create({
	container:{
		flex:1,
		backgroundColor:'rgba(0, 0, 0, 0)',
		justifyContent:'center',
		alignItems:'center'
	},
	modalContainer: {
		marginLeft: 20,
		marginRight: 20,
		borderRadius: 3,
		borderWidth: 2,
		borderColor: "gray",
		backgroundColor: "white",
		alignItems:'center',
	},
	modalTitle: {
		color: '#000000',
		fontSize: 16,
		marginTop: 10,
	},
	modalMessage:{
		color:'#8a8a8a',
		fontSize:14,
		marginTop:20,
	},
})
