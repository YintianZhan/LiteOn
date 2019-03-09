import React, { PropTypes } from 'react';
import {
	Text,
	View,
	Image
} from 'react-native';

import styles from './styles/Casts';

const Casts = ({ info , length }) => {
	let computedHeight = (80 + 15) * length; // (castImage.height + castContainer.marginBottom)
	computedHeight += 447 + 40; // Header height + container ((20 paddingVertical) = 40)

	return (
		<View style={styles.container} >
			{
				info.map(item => (
					<View key={item.id} style={styles.castContainer}>
						<Image source={{ uri: item.pic }} style={styles.castImage} />
						<View style={styles.characterContainer}>
							<Text style={styles.characterName}>
								{item.actor}
							</Text>
							<Text style={styles.asCharacter}>
								{item.char }
							</Text>
						</View>
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

export default Casts;
