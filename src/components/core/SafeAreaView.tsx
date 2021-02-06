import React from 'react';
import { SafeAreaView as RNSafeAreaView, ViewProps } from 'react-native';
import { base } from '../../utils';

interface IProps extends ViewProps {
	children?: any;
}

export const SafeAreaView: React.FC<IProps> = (props: IProps): JSX.Element => {
	const { children, style, ...otherProps } = props;
	return (
		<RNSafeAreaView style={[base.flex, style]} {...otherProps}>
			{children}
		</RNSafeAreaView>
	);
};
