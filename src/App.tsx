import React from 'react';
import { Platform, StatusBar } from 'react-native';
import AppNavigator from './AppNavigator';

const App: React.FC = () => {
	return (
		<React.Fragment>
			{Platform.OS === 'ios' && <StatusBar barStyle="dark-content" />}
				<AppNavigator />
		</React.Fragment>
	);
};

export default App;
