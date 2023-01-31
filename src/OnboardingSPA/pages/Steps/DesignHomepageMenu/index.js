import { useLocation } from 'react-router-dom';
import { useState, useEffect } from '@wordpress/element';
import { useSelect, useDispatch } from '@wordpress/data';

import { getPatterns } from '../../../utils/api/patterns';
import { store as nfdOnboardingStore } from '../../../store';
import CommonLayout from '../../../components/Layouts/Common';
import {
	VIEW_NAV_DESIGN,
	THEME_STATUS_ACTIVE,
	THEME_STATUS_NOT_ACTIVE,
	SIDEBAR_LEARN_MORE,
} from '../../../../constants';
import HeadingWithSubHeading from '../../../components/HeadingWithSubHeading';
import { DesignStateHandler } from '../../../components/StateHandlers';
import {
	LivePreviewSelectableCard,
	LivePreviewSkeleton,
	GlobalStylesProvider,
} from '../../../components/LivePreview';

const StepDesignHomepageMenu = () => {
	const homepagePatternList = [
		'yith-wonder/homepage-1',
		'yith-wonder/homepage-2',
		'yith-wonder/homepage-3',
	];

	const homepagesList = {
		'homepage-1': [
			'yith-wonder/site-header-left-logo-navigation-inline',
			'yith-wonder/homepage-1',
			'yith-wonder/site-footer',
		],
		'homepage-2': [
			'yith-wonder/site-header-left-logo-navigation-inline',
			'yith-wonder/homepage-2',
			'yith-wonder/site-footer',
		],
		'homepage-3': [
			'yith-wonder/site-header-left-logo-navigation-inline',
			'yith-wonder/homepage-3',
			'yith-wonder/site-footer',
		],
	};

	const location = useLocation();
	const [ isLoaded, setisLoaded ] = useState( false );
	const [ homepagePattern, setHomepagePattern ] = useState();
	const [ selectedHomepage, setSelectedHomepage ] = useState( 0 );

	const {
		currentStep,
		currentData,
		storedPreviewSettings,
		themeStatus,
		themeVariations,
	} = useSelect( ( select ) => {
		return {
			currentStep: select( nfdOnboardingStore ).getStepFromPath(
				location.pathname
			),
			currentData:
				select( nfdOnboardingStore ).getCurrentOnboardingData(),
			storedPreviewSettings:
				select( nfdOnboardingStore ).getPreviewSettings(),
			themeStatus: select( nfdOnboardingStore ).getThemeStatus(),
			themeVariations: select( nfdOnboardingStore ).getStepPreviewData(),
		};
	}, [] );

	const {
		setDrawerActiveView,
		setSidebarActiveView,
		setCurrentOnboardingData,
		updateThemeStatus,
	} = useDispatch( nfdOnboardingStore );

	useEffect( () => {
		setSidebarActiveView( SIDEBAR_LEARN_MORE );
		setDrawerActiveView( VIEW_NAV_DESIGN );
	}, [] );

	function refactorPatterns( homepagePatternData ) {
		const makeHomepagePattern = [];

		for ( const key in homepagesList ) {
			const homepagePatterns = homepagesList[ key ];
			let patternData = '';
			homepagePatterns.forEach( ( patternName ) => {
				homepagePatternData?.body.forEach( ( homepagePatternData ) => {
					if ( homepagePatternData.slug === patternName ) {
						patternData += homepagePatternData.content;
					}
				} );
			} );
			makeHomepagePattern.push( patternData );
		}

		return makeHomepagePattern;
	}

	async function getHomepagePatternsData() {
		const homepagePatternData = await getPatterns( currentStep.patternId );
		if ( homepagePatternData?.error ) {
			return updateThemeStatus( THEME_STATUS_NOT_ACTIVE );
		}

		setHomepagePattern( refactorPatterns( homepagePatternData ) );

		if ( currentData?.data.sitePages.length !== 0 ) {
			setSelectedHomepage(
				homepagePatternList?.indexOf(
					currentData?.data.sitePages.homepage
				)
			);
		} else {
			currentData.data.sitePages = {
				...currentData.data.sitePages,
				homepage: homepagePatternList[ 0 ],
			};
			setCurrentOnboardingData( currentData );
		}
		setisLoaded( true );
	}

	function saveDataForHomepage( idx ) {
		setSelectedHomepage( idx );
		currentData.data.sitePages = {
			...currentData.data.sitePages,
			homepage: homepagePatternList[ idx ],
		};
		setCurrentOnboardingData( currentData );
	}

	useEffect( () => {
		if ( ! isLoaded && themeStatus === THEME_STATUS_ACTIVE ) {
			getHomepagePatternsData();
		}
	}, [ isLoaded, themeStatus ] );

	function buildHomepagePreviews() {
		return homepagePattern?.map( ( homepage, idx ) => {
			if ( homepage ) {
				return (
					<LivePreviewSelectableCard
						key={ idx }
						className={ 'homepage_preview__list__item' }
						selected={ idx === selectedHomepage }
						blockGrammer={ homepage }
						viewportWidth={ 1200 }
						styling={ 'custom' }
						previewSettings={ storedPreviewSettings }
						overlay={ false }
						onClick={ () => saveDataForHomepage( idx ) }
					/>
				);
			}
			return null;
		} );
	}

	return (
		<DesignStateHandler>
			<GlobalStylesProvider>
				<CommonLayout>
					<div className="homepage_preview">
						<HeadingWithSubHeading
							title={ currentStep?.heading }
							subtitle={ currentStep?.subheading }
						/>
						<div className="homepage_preview__list">
							<LivePreviewSkeleton
								watch={ homepagePattern }
								count={
									themeVariations[ currentStep?.patternId ]
										?.previewCount
								}
								callback={ buildHomepagePreviews }
								className={ 'homepage_preview__list__item' }
								viewportWidth={ 1200 }
							/>
						</div>
					</div>
				</CommonLayout>
			</GlobalStylesProvider>
		</DesignStateHandler>
	);
};

export default StepDesignHomepageMenu;