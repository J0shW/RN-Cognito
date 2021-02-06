import React from 'react';
import { ActivityIndicator } from 'react-native';
import { base, constants } from '../../utils';
import { Container } from '../core';

interface IProps {
}

export const Loading: React.FC<IProps> = ( props: IProps ) => {

	return (
		<Container style={[base.alignItemsCenter, base.justifyContentCenter]}>
			<ActivityIndicator size={30} color={constants.colours.brand.primary} />
		</Container>
	);
};