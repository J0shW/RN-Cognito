import React, { ReactElement } from 'react';
import { Text } from '../core';
import { base } from '../../utils';

interface IProps {
	errorMessage: string | ReactElement;
}
export const ErrorText: React.FC<IProps> = ({ errorMessage }) => {
	if (typeof errorMessage === 'string') {
		return <Text style={[base.mt1, base.small, base.textDanger]}>{errorMessage}</Text>;
	} else {
		return errorMessage;
	}
};
