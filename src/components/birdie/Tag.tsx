import React from 'react';
import { View } from 'react-native';
import { base, theme } from '../../utils';
import { Text } from '../core';

interface IProps {
	text: string;
}

export const Tag: React.FC<IProps> = ({ text }) => {
	return (
		<View style={[theme.tag]}>
			<Text style={[base.textPrimary, theme.tagText]}>{text}</Text>
		</View>
	);
};
