import React from 'react';
import { Modal, IconButton } from '../core';
import { View, Text } from 'react-native';
import { base, constants } from '../../utils';

interface IProps {
	isVisible: boolean;
	onModalClose: () => void;
    title?: string
	children?: JSX.Element | JSX.Element[] | false;
}

export const CustomModal: React.FC<IProps> = ( props: IProps ) => {

	return (
		<Modal isVisible={props.isVisible} onModalClose={props.onModalClose}>
			<View style={[base.flexShrink, base.bgWhite, base.borderRadius, base.overflowHidden, base.p3]}>
				<View style={[base.flexRow, base.justifyContentBetween, base.alignItemsCenter]}>
					{props.title && <Text style={[base.h2]}>{props.title}</Text>}
					<IconButton
						name="close"
						buttonType="primaryGhost"
						size={constants.dimensions.iconSize}
						onPress={props.onModalClose}
						style={[base.mtn2, base.mrn2]}
					/>
				</View>
				{props.children}
			</View>
		</Modal>
	);
};
