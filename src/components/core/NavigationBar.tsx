import React from 'react';
import {
  View,
  TouchableHighlight,
  SafeAreaView as RNSafeAreaView,
} from 'react-native';
import { base, constants } from '../../utils';
import { Text } from './Text';

interface IProps {
  state: any;
  descriptors: any;
  navigation: any;
}

export const NavigationBar: React.FC<IProps> = (props: IProps) => {
	const indicatorStyle = {
		width: '50%',
		marginTop: -3,
		zIndex: 2,
	};
	return (
		<RNSafeAreaView style={[base.flexRow, base.bgWhite]}>
			{props.state.routes.map((route: any, index: number) => {
				const { options } = props.descriptors[route.key];
				const { tabBarIcon: TabBarIcon } = options;
				const isFocused = props.state.index === index;

				const onPress = () => {
					const event = props.navigation.emit({
						type: 'tabPress',
						target: route.key,
					});

					if (!isFocused && !event.defaultPrevented) {
						props.navigation.navigate(route.name);
					}
				};

				return (
					<TouchableHighlight
						style={[base.flex]}
						key={index}
						onPress={onPress}
						underlayColor={constants.colours.brand.light}
					>
						<View style={[base.borderTopGray100, base.borderTopWidth2, base.alignItemsCenter, {zIndex: 1}]}>
							<View
								style={[
									indicatorStyle,
									isFocused ? base.borderTopPrimary : base.borderTopTransparent,
									isFocused ? base.borderBottomPrimary : base.borderBottomTransparent,
									base.borderTopWidth2,
									base.borderBottomWidth2,
									base.borderRadius2,
								]}
							/>
							<View
								style={[
									base.alignItemsCenter,
									base.justifyContentCenter,
									base.py2,
								]}>
								<TabBarIcon focused={isFocused} />
								<Text
									style={[
										base.small,
										base.textGray600,
										isFocused && base.textPrimary,
										isFocused && base.fontWeightBold,
									]}
								>
									{options.title}
								</Text>
							</View>
						</View>
					</TouchableHighlight>
				);
			})}
		</RNSafeAreaView>
	);
};
