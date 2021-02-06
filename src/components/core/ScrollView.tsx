import React from 'react';
import { Platform, ScrollView as RNScrollView, ScrollViewProps, StyleProp, View, ViewStyle } from 'react-native';
import { base } from '../../utils';

interface IProps extends ScrollViewProps {
	children?: JSX.Element | JSX.Element[] | false;
	style?: StyleProp<ViewStyle>;
	contentContainerStyle?: StyleProp<ViewStyle>;
	colorOffset?: boolean;
	forwardedRef?: React.RefObject<RNScrollView>;
}

export const ScrollView: React.FC<IProps> = ( props: IProps ) => {
	const { children, style, forwardedRef, ...otherProps } = props;
	const SPACER_SIZE = 1000;

	return (
		<RNScrollView
			contentContainerStyle={[base.flexGrow, base.positionRelative, props.contentContainerStyle]}
			contentInsetAdjustmentBehavior={props.contentInsetAdjustmentBehavior}
			keyboardDismissMode={props.keyboardDismissMode}
			scrollIndicatorInsets={{ right: 1 }}
			keyboardShouldPersistTaps={props.keyboardShouldPersistTaps ? props.keyboardShouldPersistTaps : 'handled'}

			style={[style]}
			ref={forwardedRef}
			{...otherProps}
		>
			{children}
			{(props.colorOffset && Platform.OS === 'ios') && (
				<View style={[base.bgWhite, base.left0, base.right0, base.positionAbsolute,  {bottom: -SPACER_SIZE, height: SPACER_SIZE}]} />
			)}
		</RNScrollView>
	);
};
