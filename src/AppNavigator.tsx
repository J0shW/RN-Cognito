import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import Tabs from './screens/Tabs';

const AppNavigator: React.FC<{}> = () => {
	return (
		<NavigationContainer>
			<Tabs />
		</NavigationContainer>
	);
};

export default AppNavigator;
