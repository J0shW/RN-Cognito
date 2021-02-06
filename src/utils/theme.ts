import { StyleSheet } from 'react-native';
import { constants } from './constants';
import { base } from './base';

export const theme = StyleSheet.create({
	square: {
		width: 50,
		height: 50,
		...base.borderRadius,
	},
	roundedTop: {
		...base.bgWhite,
		borderTopLeftRadius: constants.dimensions.spacer * 4,
		borderTopRightRadius: constants.dimensions.spacer * 4,
		...base.pt4,
		...base.overflowHidden,
	},
	imageOverlay: {
		marginTop: -32,
	},
	toast: {
		width: constants.dimensions.viewportWidth - ( constants.dimensions.gutter * 4 ),
		paddingVertical: constants.dimensions.spacer * 1.5,
		...base.px3,
		...base.borderRadius,
		...base.bgDark,
		...base.overflowHidden,
	},
	card: {
		padding: constants.dimensions.spacer * 1.5,
	},
	cardStatusIcon: {
		marginRight: constants.dimensions.spacer * 1.5,
	},
	cardSmallText: {
		fontSize: constants.dimensions.spacer * 1.5,
		lineHeight: constants.dimensions.spacer * 2.25,
	},
	tag: {
		paddingHorizontal: constants.dimensions.spacer * 0.75,
		paddingVertical: constants.dimensions.spacer * 0.25,
		marginRight: constants.dimensions.spacer * 0.75,
		...base.flexRow,
		...base.alignItemsCenter,
		...base.borderPrimary,
		...base.borderRadius6,
		...base.borderWidth1,
	},
	tagText: {
		fontSize: constants.dimensions.spacer * 1.5,
		lineHeight: constants.dimensions.spacer * 2.25,
	},
	tagIcon: {
		marginRight: constants.dimensions.spacer * 0.5,
	},
	cardNumberField: {
		flex: 0.75,
	},
	cvcField: {
		flex: 0.25,
	},
});
