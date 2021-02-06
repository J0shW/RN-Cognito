import React from 'react';
import { View, Linking, TouchableHighlight } from 'react-native';
import { Button, SafeAreaView, Text, Modal } from '../core';
import Icon from 'react-native-vector-icons/MaterialIcons';
import Clipboard from '@react-native-community/clipboard';
import { base, constants } from '../../utils';

// TypeScript: Types
interface Action {
	title: string;
	type: 'Email' | 'Phone' | 'SMS' | 'Link' | 'Copy';
	content: string;
	callback?: () => void;
}

interface IProps {
	visible: boolean;
	toggle: any;
	actionList: Array<Action>;
}

// Component: Action Sheet
const ActionSheet: React.FC<IProps> = (props: IProps) => {
	// Render Action Selectors
	const renderActionSelectors = () => {
		// Check If Actions List Is Less Than 6 Actions Items
		if (props.actionList.length > 6) {
			console.warn('React-Native-Contact-Action-Sheet Error: Maximum of 6 actions allowed.');
		}
		else {
			// Map Actions List To Action Selector
			return props.actionList.map((action: Action, index: number) => {
				// Render Single Action List

				return (
					<View style={[base.alignSelfStretch, base.bgWhite, index !== 0 && base.borderTopGray200, index !== 0 && base.borderTopWidth1]} key={`button-${index}`}>
						<TouchableHighlight underlayColor={constants.touchableHighlight.underlayColor} style={[base.alignItemsCenter, base.flexRow, base.py2]} onPress={() => executeAction(action)}>
							<React.Fragment>
								{renderIcon(action) !== '' && <Icon name={renderIcon(action)} size={20} style={[base.ml3]} color={constants.colours.brand.dark} />}
								<View style={[base.ml3]}>
									<Text style={[base.fontWeightBold]}>{action.title}</Text>
									<Text style={[base.textGray700]} numberOfLines={1}>{action.content}</Text>
								</View>
							</React.Fragment>
						</TouchableHighlight>
					</View>
				);
			});
		}
	};

	// Format Phone Number
	const formatPhoneNumber = (phoneNumber: string) => {
		// Remove Spaces
		phoneNumber = phoneNumber.replace(/ /g, '');

		// Remove Special Characters
		phoneNumber = phoneNumber.replace(/[^a-zA-Z0-9]/g, '');

		// Add Area Code 1
		phoneNumber = '1'.concat('', phoneNumber);

		return phoneNumber;
	};

	const executeAction = (action: Action) => {
		// Check Type: Email
		if (action.type === 'Email') {
			// Email Details
			let email = `${action.content}`;
			let subject = `${action.title}`;
			let body = '';

			// Send Email
			Linking.openURL(`mailto:${email}?subject=${subject}&body=${body}`);
		}

		// Check Type: Phone
		else if (action.type === 'Phone') {
			// Call Phone Number
			Linking.openURL(`tel:${formatPhoneNumber(action.content)}`);
		}

		// Check Type: SMS
		else if (action.type === 'SMS') {
			// Call Phone Number
			Linking.openURL(`sms:${formatPhoneNumber(action.content)}`);
		}

		// Check Type: Link
		else if (action.type === 'Link') {
			// Open Link
			Linking.openURL(action.content);
		}

		// Check Type: Copy
		else if (action.type === 'Copy') {
			// Copy To Clipboard
			Clipboard.setString(action.content);
		}
		if (action.callback) {
			action.callback();
		}
		// Toggle Modal
		props.toggle();
	};

	// Render Icon
	const renderIcon = (action: Action) => {
		// Type: Email
		if (action.type === 'Email') {
			return 'email';
		}

		// Type: Phone Number
		else if (action.type === 'Phone') {
			return 'call';
		}

		// Type: SMS
		else if (action.type === 'SMS') {
			return 'sms';
		}

		// Type: Link
		else if (action.type === 'Link') {
			return 'link';
		}

		// Type: Copy
		else if (action.type === 'Copy') {
			return 'content-copy';
		}
		return '';
	};

	return (
		<React.Fragment>
			<Modal
				isVisible={props.visible}
				style={[base.m0]}
				direction="up"
				fullScreen={false}
				onModalClose={props.toggle}
				backdropOpacity={0.3}
			>
				<SafeAreaView>
					<View style={[base.flex, base.alignItemsCenter, base.justifyContentEnd, base.mx3]}>
						<View style={[base.bgWhite, base.borderRadius, base.alignSelfStretch, base.overflowHidden, base.mb3]}>
							{renderActionSelectors()}
						</View>
						<Button
							buttonType="primary"
							title="Cancel"
							onPress={() => props.toggle()}
							style={[base.alignSelfStretch]}
						/>
					</View>
				</SafeAreaView>
			</Modal>
		</React.Fragment>
	);
};

export default ActionSheet;
