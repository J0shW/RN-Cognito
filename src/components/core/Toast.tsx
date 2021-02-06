
import React from 'react';
import { StyleSheet, View, Animated, Dimensions, Text, StyleProp, ViewStyle, TextStyle, TouchableWithoutFeedback } from 'react-native';
import { base, components, theme } from '../../utils';

export const DURATION = {
    LENGTH_SHORT: 500,
    FOREVER: 0,
};

const { height } = Dimensions.get('window');

interface IProps {
	style?: StyleProp<ViewStyle>
    textStyle?: StyleProp<TextStyle>
    position?: 'top' | 'center' | 'bottom'
    positionValue?: number;
    fadeInDuration?: number;
    fadeOutDuration?: number;
	opacity?: number;
	useNativeAnimation: boolean;
	text: string;
	duration: number | typeof DURATION;
	unsetText?: () => void;
}

export const Toast: React.FC<IProps> = ( props: IProps ) => {

	const [isShow, setIsShow] = React.useState<boolean>(false);
	const [opacityValue] = React.useState(new Animated.Value(props.opacity || 0));
	let animation: any;

	React.useEffect(() => {
		let timer: any;

		if (props.text !== '') {
			setIsShow(true);
			show();

			timer = setTimeout(() => {
				close();
			}, props.duration);
		}
		if (props.text === '') {
			close();
		}

		() => {
			return function cleanup() {
				animation === typeof Animated && animation.stop();
				timer === typeof setTimeout && clearTimeout(timer);
			};
		};
	}, [props.text]);

	let pos;
	switch (props.position) {
		case 'top':
			pos = props.positionValue;
			break;
		case 'center':
			pos = height / 2;
			break;
		case 'bottom':
			pos = height - ( props.positionValue || 0 );
			break;
	}

	const view = (isShow && props.text !== '') ?
		<View style={[styles.container, { top: pos }]}>
			<Animated.View style={[theme.toast, props.style, { opacity: opacityValue }]}>
				<TouchableWithoutFeedback onPress={close}>
					<Text style={[components.regularToast, props.textStyle]}>{props.text}</Text>
				</TouchableWithoutFeedback>
			</Animated.View>
		</View> : <React.Fragment />;
	return view;

	function show() {
		animation = Animated.timing(
            opacityValue,
            {
                toValue: props.opacity || 1,
                duration: props.fadeInDuration,
                useNativeDriver: props.useNativeAnimation,
            }
		);
        animation.start();
    }

    function close() {
		animation = Animated.timing(
			opacityValue,
			{
				toValue: 0.0,
				duration: props.fadeOutDuration,
				useNativeDriver: props.useNativeAnimation,
			}
		);
		animation.start(() => {
			setIsShow(false);
			props.unsetText && props.unsetText();
		});
    }
};


const styles = StyleSheet.create({
    container: {
        position: 'absolute',
        left: 0,
        right: 0,
        elevation: 999,
        alignItems: 'center',
        zIndex: 10000,
    },
});
