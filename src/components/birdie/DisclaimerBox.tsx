import React from 'react';
import { StyleProp, View, ViewStyle } from 'react-native';
import { Text } from '../core';
import { base, constants } from '../../utils';
import Icon from 'react-native-vector-icons/MaterialIcons';

type TextWithEmail = {
	text: string;
	email: string;
};

interface IProps {
	title?: string;
	texts: (string | TextWithEmail)[];
	containerStyles?: StyleProp<ViewStyle>;
}

const defaultStyles = [base.bgGray100, base.borderRadius, base.p3, base.mx3, base.mb4];

const DisclaimerBox: React.FC<IProps> = ({ title = 'Disclaimer', texts, containerStyles }) => {
	return (
		<View style={[defaultStyles, containerStyles]}>
			<View style={[base.flexRow, base.alignItemsCenter]}>
				<Icon name="info-outline" color={constants.colours.brand.dark} size={20} style={[base.mr2]} />
				<Text style={[base.fontWeightBold]}>{title}</Text>
			</View>
			{texts.map((t, i) =>
				typeof t === 'string' ? (
					<Text style={[i > 0 && base.mt2]} key={i}>{t}</Text>
				) : (
					<Text style={[base.mb1]}>
						{t.text}{' '}
						<Text style={[base.link]} onPress={() => {}} key={i}>
							{t.email}
						</Text>
						.
					</Text>
				),
			)}
		</View>
	);
};

export default DisclaimerBox;
