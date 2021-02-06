import React from 'react';
import { KeyboardAvoidingView, KeyboardAvoidingViewProps, Platform, ScrollView as RNScrollView, ScrollViewProps, StyleProp, ViewStyle } from 'react-native';
import { base } from '../../utils';
import { ScrollView } from './ScrollView';

interface IProps extends KeyboardAvoidingViewProps, ScrollViewProps {
	children?: any;
	style?: StyleProp<ViewStyle>;
	contentContainerStyle?: StyleProp<ViewStyle>;
	colorOffset?: boolean;
	forwardedRef?: React.RefObject<RNScrollView>;
}

export const KeyboardAwareScrollView: React.FC<IProps> = ( props: IProps ): JSX.Element => {
	const { children, style, forwardedRef, ...otherProps } = props;
	return (
		<KeyboardAvoidingView
			style={[base.flex, style]}
			behavior={props.behavior ? props.behavior : Platform.OS === 'ios' ? 'padding' : undefined}
			keyboardVerticalOffset={props.keyboardVerticalOffset ? props.keyboardVerticalOffset : Platform.OS === 'android' ? 500 : undefined}
			{...otherProps}
		>
			<ScrollView
				contentContainerStyle={[props.contentContainerStyle]}
				contentInsetAdjustmentBehavior={props.contentInsetAdjustmentBehavior}
				keyboardDismissMode={props.keyboardDismissMode}
				forwardedRef={forwardedRef}
				colorOffset={props.colorOffset}
			>
				{children}
			</ScrollView>
		</KeyboardAvoidingView>
	);
};
