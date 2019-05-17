import React, { PropTypes } from 'react';
import {
	Text,
	View,
	Image
} from 'react-native';

//import styles from './styles/Casts';

const Info = ({ event }) => {
//let computedHeight = (80 + 15) * length; // (castImage.height + castContainer.marginBottom)
//	computedHeight += 447 + 40; // Header height + container ((20 paddingVertical) = 40)

	return (
	<View style={styles.container} >
	{
		event.map(item => (
		<View style={styles.castContainer}>
			<Text style={styles.asCharacter}>
			"Organization"
			</Text>
			<Text style={styles.chrarcterName}>
			{item.organization}
			</Text>
		</View>
		<View style={styles.castContainer}>
			<Text style={styles.asCharacter}>
				"Genre"
			</Text>
			<Text style={styles.chrarcterName}>
				{item.genre}
			</Text>
		</View>
		<View style={styles.castContainer}>
			<Text style={styles.asCharacter}>
			"Location"
			</Text>
			<Text style={styles.chrarcterName}>
			{item.location}
			</Text>
		</View>
		<View style={styles.castContainer}>
			<Text style={styles.asCharacter}>
			"Time"
			</Text>
			<Text style={styles.chrarcterName}>
			{item.startdate}
			</Text>
		</View>
		<View style={styles.castContainer}>
			<Text style={styles.asCharacter}>
			"Description"
			</Text>
			<Text style={styles.chrarcterName}>
			{item.description}
			</Text>
		</View>
))
}
</View>
);
};

// Casts.propTypes = {
// 	info: PropTypes.object.isRequired,
// 	getTabHeight: PropTypes.func.isRequired
// };

export default Info;
