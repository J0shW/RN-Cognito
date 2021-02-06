import React from 'react';
import RNModal from 'react-native-modal';
import { Animation } from 'react-native-animatable';
import { constants, base } from '../../utils';
import { StyleProp, ViewStyle } from 'react-native';

interface IProps {
	isVisible: boolean;
	onModalClose: () => void;
	direction?: 'left' | 'right' | 'up' | 'down';
	children: any;
	animationIn?: Animation;
	animationOut?: Animation;
	fullScreen?: boolean;
	backdropOpacity?: number;
	style?: StyleProp<ViewStyle>;
}

export const Modal: React.FC<IProps> = (props: IProps) => {
	return (
		<RNModal
			deviceHeight={constants.dimensions.viewportHeight}
			isVisible={props.isVisible}
			animationIn={
				props.animationIn ? props.animationIn :
				props.direction === 'up' ? 'slideInUp' :
				props.direction === 'down' ? 'slideInDown' :
				props.direction === 'left' ?  'slideInLeft' :
				props.direction === 'right' ? 'slideInRight' : 'slideInUp'
			}
			animationOut={
				props.animationOut ? props.animationOut :
				props.direction === 'up' ? 'slideOutDown' :
				props.direction === 'down' ? 'slideOutUp' :
				props.direction === 'left' ?  'slideOutLeft' :
				props.direction === 'right' ? 'slideOutRight' : 'slideOutDown'
			}
			animationInTiming={250}
			animationOutTiming={200}
			backdropOpacity={props.backdropOpacity || 0.7}
			onBackdropPress={() => props.onModalClose()}
			onBackButtonPress={() => props.onModalClose()}
			useNativeDriver={true} // Smooth the animation
			hideModalContentWhileAnimating={true} // Improve the animation alongside useNativeDriver
			style={props.fullScreen ? [base.justifyContentStart, base.bg, base.flexShrink, base.m0, props.style] : props.style}
			hasBackdrop={true}
		>
			{props.children}
		</RNModal>
	);
};
