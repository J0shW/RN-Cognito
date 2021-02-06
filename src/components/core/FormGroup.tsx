import React, { ReactElement } from 'react';
import { View, ViewProps, StyleProp, TextStyle } from 'react-native';
import { base } from '../../utils';
import { Text } from './Text';
import { ErrorText } from '../birdie';

interface IProps extends ViewProps {
	label?: string;
	required?: boolean;
	optional?: boolean;
	helperText?: string;
	helperTextStyle?: StyleProp<TextStyle>;
	errorText?: string | ReactElement;
}

export const FormGroup: React.FC<IProps> = (props): JSX.Element => {
	const {
		style,
		label,
		children,
		optional,
		required,
		helperText,
		helperTextStyle,
		errorText,
		...otherProps
	} = props;
	return (
		<View style={[base.mb3, style]} {...otherProps}>
			{label && (
				<View style={[base.flexRow, base.justifyContentBetween]}>
					<Text style={[base.fontWeightBold, base.mb1]}>
						{label}
						{required && (
							<Text style={[base.fontWeightBold, base.textSecondary, base.mb1]}>
								*
							</Text>
						)}
					</Text>
					{optional && <Text style={[base.small]}>optional</Text>}
					{helperText && (
						<Text style={[base.small, base.alignSelfCenter, helperTextStyle]}>
							{helperText}
						</Text>
					)}
				</View>
			)}
			{children}
			{errorText !== undefined && <ErrorText errorMessage={errorText} />}
		</View>
	);
};
