import React from 'react';
import { SafeAreaView as RNSafeAreaView, StyleProp, View, ViewStyle } from 'react-native';
import { base } from '../../utils';
import { IconButton } from '../core';
import { useNavigation } from '@react-navigation/native';

interface IProps {
	children?: JSX.Element | JSX.Element[] | false | Element | undefined;
	style?: StyleProp<ViewStyle>;
	onPressBack?: () => void;
	icon?: string;
	hideBack?: boolean;
}

export const Header: React.FC<IProps> = ( props: IProps ) => {
	const navigation = useNavigation();
	return (
		<RNSafeAreaView>
			<View
				style={[
					base.bgTransparent,
					base.flexRow,
					base.px3,
					base.py2,
					base.alignItemsCenter,
					props.style,
				]}
			>
				{((navigation.canGoBack() || props.onPressBack)) && (
					<IconButton
						name={props.icon ? props.icon : 'arrow-back'}
						buttonType="primaryGhost"
						size={24}
						disabled={props.hideBack}
						style={props.hideBack ? [{opacity: 0, width: 0, borderWidth: 0}] : [base.mnx3, base.mr2]}
						onPress={props.onPressBack ? props.onPressBack : () => navigation.goBack()}
					/>
				)}
				{props.children && props.children}
			</View>
		</RNSafeAreaView>
	);
};
