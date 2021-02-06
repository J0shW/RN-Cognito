import React, { useRef, useEffect } from 'react';
import { TextInput, TextInputProps, View } from 'react-native';
import { components, base, constants } from '../../utils';
import { Text } from '../core/Text';
import Icon from 'react-native-vector-icons/MaterialIcons';

const { input, inputContainer } = components;

interface IProps extends TextInputProps {
	prepend?: string;
	append?: string;
	errors?: any;
	name?: string;
	preIcon?: string;
	postIcon?: string;
}

export const Input: React.FC<IProps> = (props) => {
	const { value, style, ...otherProps } = props;

	const inputRef = useRef<TextInput>(null);

	useEffect(() => {
		if (props.name && props.errors && props.errors[props.name] && Object.keys(props.errors)[0] === props.name) {
			inputRef?.current?.focus();
		}
	}, [props.errors, props.name]);

	return (
		<View style={[base.flexRow, base.flexGrow, inputContainer, style, base.overflowHidden, props.editable === false && base.bgGray200]}>
			{props.prepend && (
				<View style={[components.inputPrepend, base.justifyContentCenter, base.alignItemsCenter]}>
					<Text>{props.prepend}</Text>
				</View>
			)}
			{props.preIcon && (
				<Icon color={constants.colours.brand.primary} name={props.preIcon} size={constants.dimensions.spacer * 3} style={[base.ml3, base.mrn2, base.alignSelfCenter]} onPress={() => inputRef.current?.focus()} />
			)}
			<TextInput
				ref={inputRef}
				style={[
					input,
					base.flex,
					value === '' && base.textGray500,
					props.multiline && base.textTop,
					props.multiline && { minHeight: 120 },
					props.multiline && base.py2,
					props.editable === false && base.bgGray200,
					props.editable === false && base.textGray600,
				]}
				placeholderTextColor={constants.colours.brand.gray500}
				numberOfLines={props.multiline ? props.numberOfLines || 6 : 1}
				{...otherProps}
				value={props.value}
			/>
			{props.postIcon && (
				<Icon name={props.postIcon} size={constants.dimensions.spacer * 3} color={constants.colours.brand.dark} style={[base.mr2, base.alignSelfCenter]} onPress={() => inputRef.current?.focus()} />
			)}
			{props.append && (
				<View style={[components.inputAppend, base.justifyContentCenter, base.alignItemsCenter]}>
					<Text>{props.append}</Text>
				</View>
			)}
		</View>
	);
};
