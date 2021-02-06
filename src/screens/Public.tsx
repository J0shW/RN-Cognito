import React from 'react';
import { Text, Container, Button } from '../components/core';
import { View, Image } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import { base } from '../utils';

interface IProps {}

const Public: React.FC<IProps> = () => {
	const { navigate } = useNavigation();

	return (
		<Container style={[base.bgSecondaryLight]}>
			{/* <Header hideBack={true}>
				<Image source={require('assets/images/navbar-logo.png')} />
			</Header> */}
			<View style={[base.mx3, base.mt3, base.pt2]}>
				<Text style={[base.h2, base.textWhite, base.mb1]}>
					{'Public Content'}
				</Text>
			</View>
		</Container>
	);

	// function goToBookingDetails(bookingId?: number) {
	// 	navigate(AppRoutes.ParentBookingDetails, { bookingId });
	// }

	// function goToCreateBookingTab() {
	// 	navigate(AppRoutes.CreateBooking);
	// }
};

export default Public;
