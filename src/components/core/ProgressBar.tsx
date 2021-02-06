import React from 'react';
import { View, Animated, StyleProp, ViewStyle, Easing } from 'react-native';
import { base, constants } from '../../utils';

interface IProps {
	start: number;
	end: number;
	style?: StyleProp<ViewStyle>;
}  

export const ProgressBar: React.FC<IProps> = (props: IProps) => {
	const [progress] = React.useState(new Animated.Value(0));
	const backgroundColour =  { backgroundColor: 'rgba(23, 50, 83, 0.3)' };
	React.useEffect(() => {

		Animated.timing(
			progress,
			{
				delay: 300,
				toValue: 1,
				duration: 500,
				easing: Easing.linear,
				useNativeDriver: false,
			}
		).start();
	}, [progress]);


	return (
		<View
			style={[
				base.positionRelative,
				backgroundColour,
				props.style,
			]}
		>
			<Animated.View
				style={[
					base.borderTopWidth2,
					base.borderBottomWidth2,
					base.borderTopPrimary,
					base.borderBottomPrimary,
					base.borderTopRightRadius2,
					base.borderBottomRightRadius2,
					{
						width: progress.interpolate({
							inputRange: [0, 1],
							outputRange: [
								constants.dimensions.viewportWidth * (props.start / 100),
								constants.dimensions.viewportWidth * (props.end / 100),
							],
						}),
					},
				]}
			/>
		</View>
	);
};
