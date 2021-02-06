import React from 'react';
import { Modal, IconButton, RadioGroup, IRadio, KeyboardAwareScrollView } from '../core';
import { View, Text } from 'react-native';
import { base, constants } from '../../utils';

interface IProps {
	isVisible: boolean;
	onModalClose: () => void;
	options: IRadio[];
	onChange: (value: string | boolean) => void;
	value: any;
	title?: string;
	children?: JSX.Element | JSX.Element[] | false;
}

export const RadioModal: React.FC<IProps> = ( props: IProps ) => {

	return (
		<Modal isVisible={props.isVisible} onModalClose={props.onModalClose}>
			<View style={[base.flex, base.bgWhite, base.borderRadius, base.overflowHidden]}>
				<KeyboardAwareScrollView behavior="height" keyboardVerticalOffset={30} contentContainerStyle={[base.py3]}>
					<View style={[base.px3, base.flexRow, base.justifyContentBetween, base.alignItemsCenter]}>
						{props.title && <Text style={[base.h2]}>{props.title}</Text>}
						<IconButton
							name="close"
							buttonType="primaryGhost"
							size={constants.dimensions.iconSize}
							onPress={props.onModalClose}
						/>
					</View>
					<View style={[base.alignItemsStart]}>
						<RadioGroup
							options={props.options}
							onChange={props.onChange}
							value={props.value}
						/>
						{props.children}
					</View>
				</KeyboardAwareScrollView>
			</View>
		</Modal>
	);
};
