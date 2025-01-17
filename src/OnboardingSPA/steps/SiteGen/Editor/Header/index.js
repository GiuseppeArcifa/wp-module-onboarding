import { __ } from '@wordpress/i18n';
import { Fill } from '@wordpress/components';
import { Icon, chevronRight } from '@wordpress/icons';
import { useSelect, useDispatch } from '@wordpress/data';
import { useEffect, useState, render } from '@wordpress/element';
import { useViewportMatch } from '@wordpress/compose';
// eslint-disable-next-line import/no-extraneous-dependencies
import { cloneDeep } from 'lodash';

import {
	HEADER_CENTER,
	HEADER_END,
	HEADER_SITEGEN,
	HEADER_START,
	SIDEBAR_SITEGEN_EDITOR_PATTERNS,
	pluginDashboardPage,
} from '../../../../../constants';
import { store as nfdOnboardingStore } from '../../../../store';
import { setFlow, completeFlow } from '../../../../utils/api/flow';
import Spinner from '../../../../components/Loaders/Spinner';
import { regenerateHomepage } from '../../../../utils/api/siteGen';
import StepEditorHeaderCenter from './center';
import { getGlobalStyles } from '../../../../utils/api/themes';
import { LivePreview } from '../../../../components/LivePreview';
import { blockRenderScreenshot } from '../../../../utils/api/blockRender';
import {
	OnboardingEvent,
	sendOnboardingEvent,
	trackOnboardingEvent,
} from '../../../../utils/analytics/hiive';
import {
	ACTION_ONBOARDING_COMPLETE,
	ACTION_SITEGEN_HOMEPAGE_FAVORITED,
	ACTION_SITEGEN_HOMEPAGE_REGENERATED,
	ACTION_SITEGEN_HOMEPAGE_RENAMED,
	ACTION_SITEGEN_SIDEBAR_OPENED,
} from '../../../../utils/analytics/hiive/constants';
import { SITEGEN_FLOW } from '../../../../data/flows/constants';

const StepSiteGenEditorHeader = () => {
	const [ homepage, setHomepage ] = useState();
	const [ isSaving, setIsSaving ] = useState( false );
	const [ isRegenerating, setIsRegenerating ] = useState( false );
	const [ globalStyles, setGlobalStyles ] = useState( false );

	const isLargeViewport = useViewportMatch( 'medium' );

	const {
		setCurrentOnboardingData,
		setSidebarActiveView,
		setIsSidebarOpened,
		setInteractionDisabled,
	} = useDispatch( nfdOnboardingStore );
	const { currentData, sideBarView, isSidebarOpened } = useSelect(
		( select ) => {
			return {
				currentData:
					select( nfdOnboardingStore ).getCurrentOnboardingData(),
				sideBarView: select( nfdOnboardingStore ).getSidebarView(),
				isSidebarOpened: select( nfdOnboardingStore ).isSidebarOpened(),
			};
		}
	);

	const handleFavorite = () => {
		if ( isSaving ) {
			return;
		}
		const homepages = currentData.sitegen.homepages.data;
		if ( ! ( homepage.slug in homepages ) ) {
			return;
		}

		const isFavorite = ! homepage.isFavorite;
		homepage.isFavorite = isFavorite;
		currentData.sitegen.homepages.data[ homepage.slug ] = homepage;
		currentData.sitegen.homepages.active = homepage;
		setCurrentOnboardingData( currentData );
		trackOnboardingEvent(
			new OnboardingEvent(
				ACTION_SITEGEN_HOMEPAGE_FAVORITED,
				homepage.slug,
				{
					favorite: isFavorite,
					placement: 'editor_toolbar',
					source: SITEGEN_FLOW,
				}
			)
		);
	};

	const handleRegenerate = async () => {
		if ( isSaving ) {
			return;
		}

		setIsRegenerating( true );
		if ( currentData.sitegen.siteDetails?.prompt === '' ) {
			setIsRegenerating( false );
			return;
		}

		const homepages = currentData.sitegen.homepages.data;
		if ( ! ( homepage.slug in homepages ) ) {
			setIsRegenerating( false );
			return;
		}

		const { slug, title, color, isFavorite } = homepage || {};
		const response = await regenerateHomepage(
			currentData.sitegen.siteDetails.prompt,
			slug,
			color,
			isFavorite
		);

		if ( response.error ) {
			setIsRegenerating( false );
			return;
		}

		const regeneratedHomepage = response.body;
		/* The below condition is a temp work-around as during the rename the homepage title is not saved the options table directly,
		but is update in the local state only, so to display the Title of the newly regeneated page we assign the newly renamed title */
		if ( isFavorite ) {
			const renamedTitleWithSuffix = `${ title } (Copy)`;
			if ( renamedTitleWithSuffix !== regeneratedHomepage?.title ) {
				regeneratedHomepage.title = renamedTitleWithSuffix;
			}
		}
		homepages[ regeneratedHomepage.slug ] = regeneratedHomepage;
		currentData.sitegen.homepages.data = homepages;
		currentData.sitegen.homepages.active = regeneratedHomepage;
		setCurrentOnboardingData( currentData );
		setIsRegenerating( false );
		trackOnboardingEvent(
			new OnboardingEvent( ACTION_SITEGEN_HOMEPAGE_REGENERATED, slug, {
				source: SITEGEN_FLOW,
				placement: 'editor_toolbar',
			} )
		);
	};

	const handleViewAll = () => {
		if (
			isSidebarOpened &&
			sideBarView === SIDEBAR_SITEGEN_EDITOR_PATTERNS
		) {
			return;
		}

		setSidebarActiveView( SIDEBAR_SITEGEN_EDITOR_PATTERNS );
		setIsSidebarOpened( true );
		trackOnboardingEvent(
			new OnboardingEvent(
				ACTION_SITEGEN_SIDEBAR_OPENED,
				'all_versions',
				{
					source: SITEGEN_FLOW,
				}
			)
		);
	};

	const handleCustomize = async () => {
		const isSidebarOpenedNew =
			sideBarView === 'Customize' ? ! isSidebarOpened : isSidebarOpened;
		setSidebarActiveView( 'Customize' );
		setIsSidebarOpened( isSidebarOpenedNew );

		if ( isSidebarOpenedNew === true ) {
			trackOnboardingEvent(
				new OnboardingEvent(
					ACTION_SITEGEN_SIDEBAR_OPENED,
					'customize'
				)
			);
		}

		const globalStylesResponse = await getGlobalStyles();
		setGlobalStyles( globalStylesResponse.body );
	};

	const handleRename = ( title ) => {
		homepage.title = title;
		currentData.sitegen.homepages.data[ homepage.slug ] = homepage;
		currentData.sitegen.homepages.active = homepage;
		setCurrentOnboardingData( currentData );
		trackOnboardingEvent(
			new OnboardingEvent(
				ACTION_SITEGEN_HOMEPAGE_RENAMED,
				homepage.slug,
				{
					name: title,
					source: SITEGEN_FLOW,
				}
			)
		);
	};

	const buildPreviewsForScreenshot = ( homepages, activeHomepage ) => {
		return (
			<div className="nfd-onboarding-screenshot-container__pages">
				{ Object.keys( homepages ).map( ( slug, idx ) => {
					const data = homepages[ slug ];
					if ( ! data.isFavorite && slug !== activeHomepage.slug ) {
						return false;
					}
					const newPreviewSettings = cloneDeep( globalStyles[ 0 ] );
					newPreviewSettings.settings.color.palette =
						data.color.palette;
					let blockGrammar = '';
					[ 'header', 'content', 'footer' ].forEach( ( part ) => {
						if ( part in data ) {
							blockGrammar += data[ part ];
						}
					} );
					return (
						<LivePreview
							key={ idx }
							blockGrammer={ blockGrammar }
							previewSettings={ newPreviewSettings }
							slug={ slug }
							tabIndex="0"
							role="button"
						/>
					);
				} ) }
			</div>
		);
	};

	const saveAndContinue = async () => {
		setIsSaving( true );

		const homepages = currentData.sitegen.homepages.data;
		const activeHomepage = currentData.sitegen.homepages.active;
		const finalPreviews = buildPreviewsForScreenshot(
			homepages,
			activeHomepage
		);
		const ele = document.querySelector(
			'.nfd-onboarding-screenshot-container'
		);
		if ( ele ) {
			render( finalPreviews, ele );

			const delay = ( ms ) =>
				new Promise( ( res ) => setTimeout( res, ms ) );
			await delay( 5000 );

			const screenshots = await Promise.all(
				Object.keys( homepages ).map( ( slug ) => {
					const data = homepages[ slug ];
					if ( ! data.isFavorite && slug !== activeHomepage.slug ) {
						return false;
					}

					const iframe = ele.querySelector(
						`div > div[data-slug="nfd-onboarding-block-preview-${ slug }"] > div.block-editor-block-preview__container > div > div > .block-editor-iframe__scale-container > iframe`
					) || ele.querySelector( `div > div[data-slug="nfd-onboarding-block-preview-${ slug }"] > .block-editor-block-preview__container > div > iframe` );

					const html = iframe.contentWindow.document.querySelector(
						'.block-editor-block-preview__content-iframe'
					);

					return blockRenderScreenshot( html.innerHTML );
				} )
			);

			Object.keys( homepages ).forEach( ( slug, idx ) => {
				if ( screenshots[ idx ]?.body?.screenshot ) {
					homepages[ slug ].screenshot =
						screenshots[ idx ].body.screenshot;
					if ( slug === activeHomepage.slug ) {
						activeHomepage.screenshot =
							screenshots[ idx ].body.screenshot;
					}
				}
			} );

			currentData.sitegen.homepages.data = homepages;
			currentData.sitegen.homepages.active = activeHomepage;
			setCurrentOnboardingData( currentData );
		}
		await setFlow( currentData );
		await completeFlow();
		sendOnboardingEvent(
			new OnboardingEvent( ACTION_ONBOARDING_COMPLETE, undefined, {
				source: SITEGEN_FLOW,
			} )
		);
		window.location.replace( pluginDashboardPage );
	};

	useEffect( () => {
		handleCustomize();
	}, [] );

	useEffect( () => {
		if ( currentData?.sitegen?.homepages?.active ) {
			setHomepage( currentData.sitegen.homepages.active );
		}
	}, [ currentData ] );

	useEffect( () => {
		if ( isSaving || isRegenerating ) {
			setInteractionDisabled( true );
		} else {
			setInteractionDisabled( false );
		}

		return () => {
			setInteractionDisabled( false );
		};
	}, [ isSaving, isRegenerating ] );

	return (
		<>
			<Fill name={ `${ HEADER_SITEGEN }/${ HEADER_START }` }>
				<div className="nfd-onboarding-header--sitegen__editor__start">
					{ isLargeViewport && (
						<div
							className={ `nfd-onboarding-header--sitegen__editor__start__regenerate ${
								isSaving &&
								'nfd-onboarding-header--sitegen__editor__start__regenerate__disabled'
							}` }
							role="button"
							tabIndex={ 0 }
							onClick={ handleRegenerate }
							onKeyDown={ handleRegenerate }
						>
							<div
								className={ `nfd-onboarding-header--sitegen__editor__start__regenerate__icon` }
							></div>
							<div
								className={ `nfd-onboarding-header--sitegen__editor__start__regenerate__text` }
							>
								{ __( 'Regenerate', 'wp-module-onboarding' ) }
							</div>
							{ isRegenerating && (
								<Spinner
									className={
										'nfd-onboarding-header--sitegen__editor__start__regenerate__spinner'
									}
								/>
							) }
						</div>
					) }
				</div>
			</Fill>
			<Fill name={ `${ HEADER_SITEGEN }/${ HEADER_CENTER }` }>
				{ homepage && (
					<div className="nfd-onboarding-header--sitegen__editor__center">
						<StepEditorHeaderCenter
							handleFavorite={ handleFavorite }
							handleViewAll={ handleViewAll }
							handleCustomize={ handleCustomize }
							handleRegenerate={ handleRegenerate }
							handleRename={ handleRename }
							homepageTitle={ homepage.title }
							isFavorite={ homepage.isFavorite }
						/>
					</div>
				) }
			</Fill>
			<Fill name={ `${ HEADER_SITEGEN }/${ HEADER_END }` }>
				<div className="nfd-onboarding-header--sitegen__editor__end">
					{ isLargeViewport && (
						<div
							className={ `nfd-onboarding-header--sitegen__editor__end__customize-button ${
								isSaving &&
								'nfd-onboarding-header--sitegen__editor__end__customize-button__disabled'
							}` }
							onClick={ handleCustomize }
							onKeyDown={ handleCustomize }
							role="presentation"
						>
							<div className="nfd-onboarding-header--sitegen__editor__end__customize-button__icon"></div>
							<div className="nfd-onboarding-header--sitegen__editor__end__customize-button__text">
								{ __( 'Customize', 'wp-module-onboarding' ) }
							</div>
						</div>
					) }
					<div className="nfd-onboarding-header--sitegen__editor__end__save-button">
						<div
							className="nfd-onboarding-header--sitegen__editor__end__save-button__text"
							onClick={ saveAndContinue }
							role="button"
							tabIndex={ 0 }
							onKeyDown={ saveAndContinue }
						>
							{ isLargeViewport
								? __(
									'Save & Continue',
									'wp-module-onboarding'
								)
								: __( 'Next', 'wp-module-onboarding' ) }
						</div>
						{ isSaving ? (
							<Spinner
								className={
									'nfd-onboarding-header--sitegen__editor__end__save-button__spinner'
								}
							/>
						) : (
							<Icon
								icon={ chevronRight }
								className={
									'nfd-onboarding-header--sitegen__editor__end__save-button__icon'
								}
							></Icon>
						) }
					</div>
				</div>
			</Fill>
		</>
	);
};

export default StepSiteGenEditorHeader;
