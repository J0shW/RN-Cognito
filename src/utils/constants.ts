import { Dimensions, Platform, TextStyle } from 'react-native';
import './colours';
import { colours } from './colours';

const {
	primary,
	primaryLight,
	primaryDark,
	secondary,
	secondaryLight,
	secondaryDark,
	tertiary,
	tertiaryLight,
	tertiaryDark,
	quaternary,
	quaternaryLight,
	quaternaryDark,
	quinary,
	quinaryLight,
	quinaryDark,
	gray100,
	gray200,
	gray300,
	gray400,
	gray500,
	gray600,
	gray700,
	gray800,
	gray900,
	info,
	light,
	dark,
	warning,
	warningLight,
	success,
	successLight,
	danger,
	dangerLight,
	black,
	white,
	transparent,
} = colours;
// Brand colours

const bodyBg = white;
const textColor = dark;
const underlayColor = primaryLight;
const disabledOpacity = 0.4;

// Fonts
const bodyFont = 'Manrope';
const bodyFontRegular = `${bodyFont}-Regular`;
const bodyFontBold = `${bodyFont}-Bold`;
const headingFont = 'NunitoSans-Bold';
const bodyFontItalic = `${bodyFont}-Italic`;
const bodyFontBoldItalic = `${bodyFont}-BoldItalic`;

// Dimensions
const viewportWidth = Dimensions.get('window').width;
const viewportHeight = Dimensions.get('window').height;
const spacer = 8;

const borderWidth = 2;
const borderRadius = spacer * 2;

// Fonts
const fontSizeBase = spacer * 2;
const h1FontSize = fontSizeBase * 1.5;
const h1Color = dark;
const headingFontFamily = headingFont;
const headingFontWeight = 'normal';
const h2FontSize = fontSizeBase * 1.25;
const h2Color = dark;
const h3FontSize = fontSizeBase * 1.125;
const h3Color = dark;
const h4FontSize = fontSizeBase * 0.875;
const h4Color = dark;
const smallFontSize = fontSizeBase * 0.875;
const smallColor = dark;
const smallFontFamily = bodyFontRegular;
const linkColor = primary;
const lineheightBase = 1.5;
const lineheightHeading = 1.25;
const lineheightSmall = 1.5;
const iconSize = 24;

// Buttons
const buttonHeight = spacer * 6;
const buttonBorderWidth = 1;
const buttonBorderRadius = borderRadius;
const buttonPaddingHorizontal = spacer * 2;
const buttonPaddingVertical = spacer;
const buttonFontSize = fontSizeBase;
const buttonLineHeight = lineheightBase * buttonFontSize;
const buttonFontFamily = bodyFontBold;
const buttonFontWeight = '700';
const buttonPrimaryColor = white;
const buttonPrimaryBackgroundColor = primary;
const buttonPrimaryBorderColor = primary;
const buttonPrimaryUnderlayColor = primaryDark;
const buttonPrimaryOutlineBackgroundColor = white;
const buttonPrimaryOutlineColor = primary;
const buttonPrimaryOutlineBorderColor = primary;
const buttonPrimaryOutlineUnderlayColor = primaryLight;
const buttonPrimaryGhostBackgroundColor = transparent;
const buttonPrimaryGhostColor = primary;
const buttonPrimaryGhostBorderColor = transparent;
const buttonPrimaryGhostUnderlayColor = primaryLight;
const buttonSecondaryBackgroundColor = secondary;
const buttonSecondaryBorderColor = secondary;
const buttonSecondaryColor = white;
const buttonSecondaryUnderlayColor = secondaryDark;
const buttonSecondaryOutlineBackgroundColor = white;
const buttonSecondaryOutlineColor = secondary;
const buttonSecondaryOutlineBorderColor = secondary;
const buttonSecondaryOutlineUnderlayColor = secondaryLight;
const buttonSecondaryGhostBackgroundColor = transparent;
const buttonSecondaryGhostColor = secondary;
const buttonSecondaryGhostBorderColor = transparent;
const buttonSecondaryGhostUnderlayColor = transparent;

const buttonSuccessBackgroundColor = success;
const buttonSuccessBorderColor = success;
const buttonSuccessColor = white;
const buttonSuccessUnderlayColor = successLight;

const buttonDangerBackgroundColor = danger;
const buttonDangerBorderColor = danger;
const buttonDangerColor = white;
const buttonDangerUnderlayColor = dangerLight;

const buttonWarningBackgroundColor = warning;
const buttonWarningBorderColor = warning;
const buttonWarningColor = dark;
const buttonWarningUnderlayColor = warningLight;

// Card
const cardBackgroundColor = white;
const cardPaddingHorizontal = spacer * 3;
const cardPaddingVertical = spacer * 4;
const cardBorderTopWidth = 2;
const cardBorderBottomWidth = 2;
const cardBorderLeftWidth = 0;
const cardBorderRightWidth = 0;
const cardBorderColor = primary;

// checkbox
const checkboxBorderColor = gray400;
const checkboxHeight = spacer * 2.5;
const checkboxWidth = checkboxHeight;
const checkboxBorderRadius = 4;
const checkboxBorderWidth = 2;
const checkboxCheckedBorderColor = primary;
const checkboxBackgroundColor = white;
const checkboxCheckedBackgroundColor = primary;
const checkColor = white;
const checkSize = spacer * 2;

// radio
const radioBorderColor = gray500;
const radioHeight = spacer * 2.5;
const radioWidth = radioHeight;
const radioBackgroundColor = white;
const radioBorderRadius = 30;
const radioBorderWidth = 1;

const radioCheckedBorderColor = primary;
const radioCheckedInnerBackgroundColor = primary;
const radioCheckedInnerBorderColor = white;
const radioCheckedInnerBorderWidth = 2;
const radioCheckedInnerHeight = spacer * 2;
const radioCheckedInnerWidth = radioCheckedInnerHeight;
const radioCheckedBackgroundColor = primary;

// input
const inputBorderColor = gray400;
const inputBorderRadius = 8;
const inputBorderWidth = 1;
const inputTextColor = textColor;
const inputFontFamily = bodyFontRegular;
const inputFontSize = fontSizeBase;
const inputPaddingHorizontal = spacer * 2;
const inputMinHeight = 48;
const inputBackgroundColor = white;
const inputIconSize = spacer * 3;
const inputAppendPrependBackgroundColor = gray200;

const activeOpacity = 0.7;

const dateFormat = 'ddd, MMM D, YYYY';
const timeFormat = 'h:mm A';
const dateFormatListItem = 'YYYY-MM-DD';

// Profile image should be square, width and hight are calculated
// by subtracting the padding on each side of the screen from the
// viewport width.
const imageWidth = viewportWidth - spacer * 4;

export const constants = {
	colours: {
		backgroundColor: bodyBg,
		brand: {
			primary,
			primaryLight,
			primaryDark,
			secondary,
			secondaryLight,
			secondaryDark,
			tertiary,
			tertiaryLight,
			tertiaryDark,
			quaternary,
			quaternaryLight,
			quaternaryDark,
			quinary,
			quinaryLight,
			quinaryDark,
			dark,
			light,
			gray100,
			gray200,
			gray300,
			gray400,
			gray500,
			gray600,
			gray700,
			gray800,
			gray900,
			warning,
			danger,
			dangerLight,
			success,
			successLight,
			info,
		},
		body: {
			border: gray200,
			text: dark,
			shadow: black,
		},
		common: {
			black,
			white,
		},
	},
	touchableHighlight: {
		underlayColor,
	},
	dimensions: {
		borderWidth,
		borderRadius,
		spacer,
		gutter: spacer,
		viewportHeight,
		viewportWidth,
		iconSize,
		profileImage: {
			width: imageWidth,
			height: imageWidth,
		},
	},
	touchableOpacity: {
		activeOpacity,
		disabledOpacity,
	},
	toast: {
		duration: 7000,
		position: 160,
	},
	format: {
		dateFormat,
		timeFormat,
		dateFormatListItem,
	},
	regex: {
		// https://regex101.com/r/xm1ljq/1
		// https://stackoverflow.com/questions/52483260/validate-phone-number-with-yup
		phoneNumberRegex: /^((\+\d{1,3}(-| )?\(?\d\)?(-| )?\d{1,3})|(\(?\d{2,3}\)?))(-| )?(\d{3,4})(-| )?(\d{4})(( x| ext)\d{1,5}){0,1}$/,
	},
};

export const components = {
	button: {
		height: buttonHeight,
		borderRadius: buttonBorderRadius,
		borderWidth: buttonBorderWidth,
		paddingHorizontal: buttonPaddingHorizontal,
		paddingVertical: buttonPaddingVertical,
		fontFamily: buttonFontFamily,
		fontWeight: buttonFontWeight,
		fontSize: buttonFontSize,
		lineHeight: buttonLineHeight,
		disabledOpacity,
		primary: {
			backgroundColor: buttonPrimaryBackgroundColor,
			borderColor: buttonPrimaryBorderColor,
			color: buttonPrimaryColor,
			underlayColor: buttonPrimaryUnderlayColor,
		},
		primaryOutline: {
			backgroundColor: buttonPrimaryOutlineBackgroundColor,
			borderColor: buttonPrimaryOutlineBorderColor,
			color: buttonPrimaryOutlineColor,
			underlayColor: buttonPrimaryOutlineUnderlayColor,
		},
		primaryGhost: {
			backgroundColor: buttonPrimaryGhostBackgroundColor,
			borderColor: buttonPrimaryGhostBorderColor,
			color: buttonPrimaryGhostColor,
			underlayColor: buttonPrimaryGhostUnderlayColor,
		},
		secondary: {
			backgroundColor: buttonSecondaryBackgroundColor,
			borderColor: buttonSecondaryBorderColor,
			color: buttonSecondaryColor,
			underlayColor: buttonSecondaryUnderlayColor,
		},
		secondaryOutline: {
			backgroundColor: buttonSecondaryOutlineBackgroundColor,
			borderColor: buttonSecondaryOutlineBorderColor,
			color: buttonSecondaryOutlineColor,
			underlayColor: buttonSecondaryOutlineUnderlayColor,
		},
		secondaryGhost: {
			backgroundColor: buttonSecondaryGhostBackgroundColor,
			borderColor: buttonSecondaryGhostBorderColor,
			color: buttonSecondaryGhostColor,
			underlayColor: buttonSecondaryGhostUnderlayColor,
		},
		success: {
			backgroundColor: buttonSuccessBackgroundColor,
			borderColor: buttonSuccessBorderColor,
			color: buttonSuccessColor,
			underlayColor: buttonSuccessUnderlayColor,
		},
		danger: {
			backgroundColor: buttonDangerBackgroundColor,
			borderColor: buttonDangerBorderColor,
			color: buttonDangerColor,
			underlayColor: buttonDangerUnderlayColor,
		},
		warning: {
			backgroundColor: buttonWarningBackgroundColor,
			borderColor: buttonWarningBorderColor,
			color: buttonWarningColor,
			underlayColor: buttonWarningUnderlayColor,
		},
	},
	text: {
		regular: {
			color: textColor,
			fontSize: fontSizeBase,
			fontFamily: bodyFontRegular,
			fontWeight: 'normal',
			lineHeight: lineheightBase * fontSizeBase,
			uppercase: false,
		},
		h1: {
			color: h1Color,
			fontSize: h1FontSize,
			fontFamily: headingFontFamily,
			fontWeight: headingFontWeight,
			lineHeight: lineheightHeading * h1FontSize,
			uppercase: false,
		},
		h2: {
			color: h2Color,
			fontSize: h2FontSize,
			fontFamily: headingFontFamily,
			fontWeight: headingFontWeight,
			lineHeight: lineheightHeading * h2FontSize,
			uppercase: false,
		},
		h3: {
			color: h3Color,
			fontSize: h3FontSize,
			fontFamily: headingFontFamily,
			fontWeight: headingFontWeight,
			lineHeight: lineheightHeading * h3FontSize,
			uppercase: false,
		},
		h4: {
			color: h4Color,
			fontSize: h4FontSize,
			fontFamily: headingFontFamily,
			fontWeight: headingFontWeight,
			lineHeight: lineheightHeading * h4FontSize,
			uppercase: false,
		},
		small: {
			color: smallColor,
			fontSize: smallFontSize,
			fontFamily: smallFontFamily,
			lineHeight: lineheightSmall * smallFontSize,
			fontWeight: 'normal',
			uppercase: false,
		},
		link: {
			color: linkColor,
		},
		bold: {
			fontFamily: bodyFontBold,
			fontWeight: '700',
		},
		italic: {
			fontFamily: bodyFontItalic,
			fontStyle: 'italic',
		},
		boldItalic: {
			fontFamily: bodyFontBoldItalic,
			fontWeight: '700',
			fontStyle: 'italic',
		},
	},
	card: {
		backgroundColor: cardBackgroundColor,
		paddingHorizontal: cardPaddingHorizontal,
		paddingVertical: cardPaddingVertical,
		borderTopWidth: cardBorderTopWidth,
		borderBottomWidth: cardBorderBottomWidth,
		borderLeftWidth: cardBorderLeftWidth,
		borderRightWidth: cardBorderRightWidth,
		borderColor: cardBorderColor,
	},
	checkbox: {
		height: checkboxHeight,
		width: checkboxWidth,
		borderWidth: checkboxBorderWidth,
		borderRadius: checkboxBorderRadius,
		unchecked: {
			backgroundColor: checkboxBackgroundColor,
			borderColor: checkboxBorderColor,
		},
		checked: {
			backgroundColor: checkboxCheckedBackgroundColor,
			borderColor: checkboxCheckedBorderColor,
			checkColor,
			checkSize,
		},
	},
	radio: {
		height: radioHeight,
		width: radioWidth,
		borderWidth: radioBorderWidth,
		borderRadius: radioBorderRadius,
		unchecked: {
			backgroundColor: radioBackgroundColor,
			borderColor: radioBorderColor,
		},
		checked: {
			backgroundColor: radioCheckedBackgroundColor,
			borderColor: radioCheckedBorderColor,
			inner: {
				backgroundColor: radioCheckedInnerBackgroundColor,
				borderColor: radioCheckedInnerBorderColor,
				height: radioCheckedInnerHeight,
				width: radioCheckedInnerWidth,
				borderWidth: radioCheckedInnerBorderWidth,
			},
		},
	},
	input: {
		color: inputTextColor,
		fontFamily: inputFontFamily,
		// fontStyle: 'normal',
		fontSize: inputFontSize,
		marginLeft: inputPaddingHorizontal,
		marginRight: inputPaddingHorizontal,

	},
	inputAppend: {
		backgroundColor: inputAppendPrependBackgroundColor,
		borderLeftWidth: inputBorderWidth,
		borderLeftColor: inputBorderColor,
		paddingHorizontal: inputPaddingHorizontal,
		minWidth: inputMinHeight,
	},
	inputPrepend: {
		backgroundColor: inputAppendPrependBackgroundColor,
		borderRightWidth: inputBorderWidth,
		borderRightColor: inputBorderColor,
		paddingHorizontal: inputPaddingHorizontal,
		minWidth: inputMinHeight,
	},
	inputContainer: {
		borderColor: inputBorderColor,
		borderRadius: inputBorderRadius,
		borderWidth: inputBorderWidth,
		minHeight: inputMinHeight,
		backgroundColor: inputBackgroundColor,
	},
	inputIcon: {
		size: inputIconSize,
	},
	regularToast: {
		color: white,
		fontSize: fontSizeBase,
		fontFamily: bodyFontRegular,
		fontWeight: '400' as TextStyle['fontWeight'],
		lineHeight: lineheightBase * fontSizeBase,
	},
};
