import { __ } from '@wordpress/i18n';
import { FlexItem } from '@wordpress/components';
import { useSelect, useDispatch } from '@wordpress/data';
import { useState, useEffect, useRef } from '@wordpress/element';

import { store as nfdOnboardingStore } from '../../../store';
import { getGlobalStyles, getThemeFonts } from '../../../utils/api/themes';
import { useGlobalStylesOutput } from '../../../utils/global-styles/use-global-styles-output';

const DesignTypography = () => {

	const drawerFontOptions = useRef();
	const [rerender, doRerender] = useState(0);
	const [isLoaded, setIsLoaded] = useState(false);
	const [selectedFont, setSelectedFont] = useState();
	const [globalStyles, setGlobalStyles] = useState();
	const [fontPalettes, setFontPalettes] = useState();
	const [isAccordionClosed, setIsAccordionClosed] = useState(true);

	const { storedPreviewSettings, currentData } = useSelect(
		(select) => {
			return {
				storedPreviewSettings:
					select(nfdOnboardingStore).getPreviewSettings(),
				currentData:
					select(nfdOnboardingStore).getCurrentOnboardingData(),
			};
		},
		[]
	);

	const { updatePreviewSettings, setCurrentOnboardingData } =
		useDispatch(nfdOnboardingStore);

	const getFontStylesAndPatterns = async () => {
		const fontPalettes = await getThemeFonts();
		const globalStyles = await getGlobalStyles();
		setFontPalettes(fontPalettes?.body);

		let selectedGlobalStyle;
		if (currentData?.data?.theme?.variation) {
			selectedGlobalStyle = globalStyles.body.filter(
				(globalStyle) =>
					globalStyle.title === currentData.data.theme.variation
			)[0];
		} else {
			selectedGlobalStyle = globalStyles.body[0];
		}
		setGlobalStyles(selectedGlobalStyle);

		if(currentData?.data?.typography?.slug !== ''){
			handleClick(currentData?.data?.typography?.slug, selectedGlobalStyle, fontPalettes?.body);
		}else{
			updatePreviewSettings(
				useGlobalStylesOutput(selectedGlobalStyle, storedPreviewSettings)
			);
		}
		let stylesCustom = selectedGlobalStyle?.settings?.styles[0]?.css;
		if (stylesCustom) {
			const regex = /--wp--preset--font-family.*;/;
			drawerFontOptions.current.setAttribute('style', stylesCustom.match(regex));
		}
		setIsLoaded(true);
	};

	useEffect(() => {
		if (!isLoaded) getFontStylesAndPatterns();
	}, [isLoaded]);
	
	const handleClick = async (fontStyle, selectedGlobalStyle = globalStyles, fontPalettesCopy = fontPalettes) => {
		setSelectedFont(fontStyle);
		let globalStylesCopy = selectedGlobalStyle;
		globalStylesCopy.styles.typography.fontFamily = fontPalettesCopy[fontStyle]?.styles?.typography?.fontFamily;
		globalStylesCopy.styles.blocks['core/heading'].typography.fontFamily = 
			fontPalettesCopy[fontStyle]?.styles.blocks['core/heading'].typography.fontFamily;
		
		setGlobalStyles(globalStylesCopy);
		currentData.data.typography.slug = fontStyle;
		currentData.data.typography.data = fontPalettesCopy[fontStyle];
		setCurrentOnboardingData(currentData);

		updatePreviewSettings(
			useGlobalStylesOutput(globalStylesCopy, storedPreviewSettings)
		);
		doRerender(1);
	};

	function buildPalettes() {
		let paletteRenderedList = [];
		for (const fontStyle in fontPalettes) {
			const splitLabel = fontPalettes[fontStyle]?.label.split("&", 2);

			paletteRenderedList.push(
				<div className={`font-palette ${selectedFont == fontStyle ? 'font-palette-selected' : ''} `}
					onClick={(e) => handleClick(fontStyle)}>
					<div className='font-palette__icon'
						style={{ fontFamily: fontPalettes[fontStyle]?.styles?.typography?.fontFamily }}>
						Aa 
					</div>
					<div className='font-palette__name'>
						<span
							style={{ fontFamily: fontPalettes[fontStyle]?.styles.blocks['core/heading'].typography.fontFamily }}>
							{splitLabel[0]}
						</span>
						{splitLabel[1] ? '&' : ''}
						<span
							style={{ fontFamily: fontPalettes[fontStyle]?.styles?.typography?.fontFamily }}>
							{splitLabel[1] ?? ''}
						</span>
					</div>
				</div>
			);
		}

		return paletteRenderedList;
	}

	function buildCustomPalette() {
		return (
			<div className='custom-font-palette'>
				<div className='custom-font-palette__top'
					onClick={(e) => setIsAccordionClosed(!isAccordionClosed)}>
					<div className='custom-font-palette__top-text'>SELECT CUSTOM FONTS</div>
					{isAccordionClosed && <div className='custom-font-palette__top-icon'>+</div>}
					{!isAccordionClosed && <div className='custom-font-palette__top-icon'>-</div>}
				</div>
			</div>
		);
	}

	return (
		<div ref={drawerFontOptions} className='theme-fonts--drawer'>
			<h2>{__('Font Palettes', 'wp-module-onboarding')}</h2>
			{fontPalettes && buildPalettes()}
			{fontPalettes && buildCustomPalette()}
			<div className='custom-font-palette--hidden'>
				{rerender}
			</div>
		</div>
	);
};
export default DesignTypography;
