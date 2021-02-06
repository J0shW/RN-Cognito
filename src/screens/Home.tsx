import React from 'react';
import { Text, Container, Button, NavigationBar } from '../components/core';
import { View, Image } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import { AppRoutes, base } from '../utils';

interface IProps {}

const Home: React.FC<IProps> = () => {
	const { navigate } = useNavigation();

	return (
		<Container style={[base.bgSecondaryLight]}>
			{/* <Header hideBack={true}>
				<Image source={require('assets/images/navbar-logo.png')} />
			</Header> */}
			<View style={[base.mx3, base.mt3, base.pt2]}>
				<Text style={[base.h2, base.textWhite, base.mb3]}>
					{'Home'}
				</Text>
				<View style={[base.p4, base.bgWhite, base.borderRadius]}>
					<Button
						title={"View Public Content"}
						buttonType="primary"
						style={[base.mb2]}
						onPress={() => {goToPublicTab()}}
					/>
					<Button
						title={"View Private Content"}
						buttonType="primary"
						style={[base.mb0]}
						onPress={() => {goToPrivateTab()}}
					/>
				</View>
			</View>
		</Container>
	);

	function goToPublicTab() {
		navigate(AppRoutes.Public);
	}

	function goToPrivateTab() {
		navigate(AppRoutes.Private);
	}
};

export default Home;
