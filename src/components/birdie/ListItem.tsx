import React from 'react';
import { Text } from '../core';
import { base } from '../../utils';
import { StyleProp, TextStyle, View, ViewStyle } from 'react-native';

interface IProps {
	children: string | number | false;
	style?: StyleProp<ViewStyle>
	textStyle?: StyleProp<TextStyle>
}

export const ListItem: React.FC<IProps> = ( props: IProps ) => {

	return (
		<View style={[base.flexRow, base.mb1, props.style]}>
			<Text style={[base.fontWeightBold]}>-&nbsp;&nbsp;</Text>
			<Text style={[base.flex, props.textStyle]}>{props.children}</Text>
		</View>
	);
};