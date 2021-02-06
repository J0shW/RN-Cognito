import React from 'react';
import { View, SafeAreaView as RNSafeAreaView, StyleSheet, ViewStyle, StyleProp } from 'react-native';
import { base } from '../../utils';

interface IProps {
	children?: JSX.Element | JSX.Element[];
	style?: StyleProp<ViewStyle>
}

export const Footer: React.FC<IProps> = ( props: IProps ) => {

	return (
		<RNSafeAreaView style={[footerStyles.container, props.style]}>
			<View style={[footerStyles.shadow]} />
			<View style={[footerStyles.children]}>{props.children}</View>
		</RNSafeAreaView>
	);
};

const footerStyles = StyleSheet.create({
	container: {
		...base.bg,
		zIndex: 10,
		elevation: 30,
	},
	children: {
		...base.pb2,
		...base.px3,
		...base.bg,
		zIndex: -1,
		elevation: 30,
	},
	shadow: {
		...base.bg,
		...base.shadow,
		...base.pt2,		
		elevation: 30,
		zIndex: -2,
	},
});
