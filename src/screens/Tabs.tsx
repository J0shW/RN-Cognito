import React from 'react';
import { NavigationBar } from '../components/core';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { TabParamList } from '../utils/types';
import { AppRoutes, base, constants } from '../utils';
import Icon from 'react-native-vector-icons/MaterialIcons';
import Home from './Home';
import Public from './Public';
import Private from './Private';

interface IProps {}

const Tab = createBottomTabNavigator<TabParamList>();

const Tabs: React.FC<IProps> = () => {

	return (
		<Tab.Navigator tabBar={(props) => <NavigationBar {...props} />}>
			<Tab.Screen
				name={AppRoutes.Home}
				component={Home}
				options={{
					title: 'Home',
					tabBarIcon: ({ focused }) => (
						<Icon
							name="home"
							size={constants.dimensions.iconSize}
							style={[focused ? base.textPrimary : base.textGray600]}
							
						/>
					),
				}}
			/>
			<Tab.Screen
				name={AppRoutes.Public}
				component={Public}
				options={{
					title: 'Public',
					tabBarIcon: ({ focused }) => (
						<Icon
							name="lock-open"
							size={constants.dimensions.iconSize}
							style={[focused ? base.textPrimary : base.textGray600]}
						/>
					),
				}}
			/>
			<Tab.Screen
				name={AppRoutes.Private}
				component={Private}
				options={{
					title: 'Private',
					tabBarIcon: ({ focused }) => (
						<Icon
							name="lock"
							size={constants.dimensions.iconSize}
							style={[focused ? base.textPrimary : base.textGray600]}
						/>
					),
				}}
			/>
		</Tab.Navigator>
	);
};

export default Tabs;
