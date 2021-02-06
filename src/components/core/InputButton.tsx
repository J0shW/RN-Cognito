import React from 'react';
import { View, TouchableHighlight, Text, TouchableHighlightProps } from 'react-native';
import Icon from 'react-native-vector-icons/MaterialIcons';
import { components, base, constants } from '../../utils';

interface IProps extends TouchableHighlightProps {
	value?: string | number;
	icon?: false | string | undefined;
}

export const InputButton: React.FC<IProps> = ({ icon, value, disabled, ...otherProps }) => {
	//button that looks like an input, but is actually a button.

	return (
		<View style={[components.inputContainer, base.overflowHidden]}>
			<TouchableHighlight
				style={[base.flex, disabled && base.bgGray200]}
				underlayColor={constants.touchableHighlight.underlayColor}
				disabled={disabled}
				{...otherProps}
			>
				<View style={[base.flexRow, base.flex, base.justifyContentBetween, base.alignItemsCenter, base.px3]}>
					<Text style={[components.input, base.ml1]}>{value}</Text>
					{icon !== false && (
						<Icon
							name={icon === undefined ? 'keyboard-arrow-down' : icon }
							color={constants.colours.brand.dark}
							size={components.inputIcon.size}
						/>
					)}
				</View>
			</TouchableHighlight>
		</View>
	);
};
