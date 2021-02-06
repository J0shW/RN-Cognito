import React from 'react';
import { StyleProp, ViewStyle } from 'react-native';
import { Radio } from './Radio';

export interface IRadio {
	label?: string;
	value: any;
	disabled?: boolean;
}

interface IProps {
	options: IRadio[];
	disabled?: boolean;
	value?: any;
	onChange: (value: string | boolean) => void;
	style?: StyleProp<ViewStyle>;
}

export const RadioGroup: React.FC<IProps> = (props): JSX.Element => {
	const { options } = props;

	return (
		<React.Fragment>
			{options.map((item, index: number) => {
				return (
					<Radio
						key={`radio-item-${index}`}
						checked={props.value === item.value}
						onPress={() => props.onChange(item.value)}
						disabled={props.disabled || item.disabled}
						label={item.label}
						style={[props.style]}
					/>
				);
			})}
		</React.Fragment>
	);
};
