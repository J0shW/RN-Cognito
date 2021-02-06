import React from 'react';
import { View, TouchableHighlight, StyleSheet, TextStyle, StyleProp, ViewStyle } from 'react-native';
import { base, constants, components } from '../../utils';
import { Text } from './Text';

const { radio } = components;

interface IProps {
	name?: string;
	disabled?: boolean;
	checked?: boolean;
	label?: string;
	onPress?: () => void;
	style?: StyleProp<ViewStyle>;
	boxStyle?: StyleProp<ViewStyle>;
	checkStyle?: StyleProp<TextStyle>;
}

export const Radio: React.FC<IProps> = (props: IProps): JSX.Element => {

	return (
		<TouchableHighlight
			disabled={props.disabled}
			style={[props.disabled && base.disabled, base.flexRow, base.flex, base.px3, base.py2, base.alignItemsCenter, props.style]}
			underlayColor={constants.colours.brand.light}
			onPress={props.onPress}
		>
			<React.Fragment>
				<View
					style={[
						base.my2,
						radioStyles.radio,
						props.checked && radioStyles.checked,
						props.disabled && base.disabled,
					]}
				>
					{props.checked &&
					<View style={[radioStyles.checkedInner]} />}
				</View>
				{props.label && <Text style={[base.pl2, base.flex, radioStyles.label]}>{props.label}</Text>}
			</React.Fragment>
		</TouchableHighlight>
	);
};
const radioStyles = StyleSheet.create({
	radio: {
		borderColor: radio.unchecked.borderColor,
		backgroundColor: radio.unchecked.backgroundColor,
		borderWidth: radio.borderWidth,
		height: radio.height,
		width: radio.width,
		borderRadius: radio.borderRadius,
		...base.alignItemsCenter,
		...base.justifyContentCenter,
	},
	checked: {
		borderColor: radio.checked.borderColor,
		backgroundColor: radio.checked.backgroundColor,
	},
	checkedInner: {
		backgroundColor: radio.checked.inner.backgroundColor,
		borderColor: radio.checked.inner.borderColor,
		borderWidth: radio.checked.inner.borderWidth,
		height: radio.checked.inner.height,
		width: radio.checked.inner.width,
		borderRadius: radio.borderRadius,
	},
	label: {
		marginTop: -1
	},
});
