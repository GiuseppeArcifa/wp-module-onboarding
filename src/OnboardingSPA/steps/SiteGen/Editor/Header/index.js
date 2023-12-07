import { __ } from '@wordpress/i18n';
import { Fill, Dropdown } from '@wordpress/components';
import {
	HEADER_CENTER,
	HEADER_END,
	HEADER_SITEGEN,
	HEADER_START,
	SIDEBAR_SITEGEN_EDITOR_PATTERNS,
} from '../../../../../constants';
import { Icon, chevronDown, chevronRight } from '@wordpress/icons';
import { store as nfdOnboardingStore } from '../../../../store';

import { useSelect, useDispatch } from '@wordpress/data';

import { useEffect, useState } from '@wordpress/element';
import { getRandom } from '../../../../data/sitegen/homepages/homepages';

const StepSiteGenEditorHeader = () => {
	const [ homepage, setHomepage ] = useState();

	const {
		setCurrentOnboardingData,
		setSidebarActiveView,
		setIsSidebarOpened,
	} = useDispatch( nfdOnboardingStore );
	const { currentData } = useSelect( ( select ) => {
		return {
			currentData:
				select( nfdOnboardingStore ).getCurrentOnboardingData(),
		};
	} );

	const handleFavorite = () => {
		homepage.favorite = ! homepage.favorite;
		currentData.sitegen.homepages.data[ homepage.slug ] = homepage;
		setCurrentOnboardingData( currentData );
	};

	const handleRegenerate = () => {
		const newPage = getRandom( { ...homepage } );
		setHomepage( newPage );
		currentData.sitegen.homepages.data[ newPage.slug ] = newPage;
		currentData.sitegen.homepages.active = newPage;
		setCurrentOnboardingData( currentData );
	};

	const handleViewAll = () => {
		setSidebarActiveView( SIDEBAR_SITEGEN_EDITOR_PATTERNS );
		setIsSidebarOpened( true );
	};

	const generateChildThemes = () => {};

	useEffect( () => {
		if ( currentData?.sitegen?.homepages?.active ) {
			setHomepage( currentData.sitegen.homepages.active );
		}
	}, [ currentData ] );
	return (
		<>
			<Fill name={ `${ HEADER_SITEGEN }/${ HEADER_START }` }>
				<div className="nfd-onboarding-header--sitegen__editor__start">
					<div
						className="nfd-onboarding-header--sitegen__editor__start__regenerate"
						role="button"
						tabIndex={ 0 }
						onClick={ () => handleRegenerate() }
						onKeyDown={ () => handleRegenerate() }
					>
						<div
							className={ `nfd-onboarding-header--sitegen__editor__start__regenerate__icon` }
						></div>
						<div
							className={ `nfd-onboarding-header--sitegen__editor__start__regenerate__text` }
						>
							{ __( 'Regenerate', 'wp-module-onboarding' ) }
						</div>
					</div>
				</div>
			</Fill>
			<Fill name={ `${ HEADER_SITEGEN }/${ HEADER_CENTER }` }>
				{ homepage && (
					<div className="nfd-onboarding-header--sitegen__editor__center">
						<div className="nfd-onboarding-header--sitegen__editor__center__icon"></div>
						<Dropdown
							className="nfd-onboarding-header--sitegen__editor__center__dropdown"
							renderToggle={ ( { onToggle } ) => {
								return (
									<>
										<div
											className={ `nfd-onboarding-header--sitegen__editor__center__dropdown__favorite-icon ${
												homepage.favorite &&
												'nfd-onboarding-header--sitegen__editor__center__dropdown__favorite-icon__fill'
											}` }
											role="button"
											tabIndex={ 0 }
											onKeyDown={ handleFavorite }
											onClick={ handleFavorite }
										></div>
										<div
											className="nfd-onboarding-header--sitegen__editor__center__dropdown__info"
											role="button"
											tabIndex={ 0 }
											onKeyDown={ onToggle }
											onClick={ onToggle }
										>
											<p className="nfd-onboarding-header--sitegen__editor__center__dropdown__info__text">
												{ homepage.title }
											</p>
											<Icon
												className="nfd-onboarding-header--sitegen__editor__center__dropdown__info__down-icon"
												icon={ chevronDown }
											/>
										</div>
									</>
								);
							} }
							renderContent={ () => (
								<div className="nfd-onboarding-header--sitegen__editor__center__dropdown__content">
									<p className="nfd-onboarding-header--sitegen__editor__center__dropdown__content__rename">
										{ __(
											'Rename',
											'wp-module-onboarding'
										) }
									</p>
									<p className="nfd-onboarding-header--sitegen__editor__center__dropdown__content__view-all">
										{ __(
											'View All',
											'wp-module-onboarding'
										) }
									</p>
								</div>
							) }
						/>
					</div>
				) }
			</Fill>
			<Fill name={ `${ HEADER_SITEGEN }/${ HEADER_END }` }>
				<div className="nfd-onboarding-header--sitegen__editor__end">
					<div className="nfd-onboarding-header--sitegen__editor__end__customize-button">
						<div className="nfd-onboarding-header--sitegen__editor__end__customize-button__icon"></div>
						<div className="nfd-onboarding-header--sitegen__editor__end__customize-button__text">
							{ __( 'Customize', 'wp-module-onboarding' ) }
						</div>
					</div>
					<div className="nfd-onboarding-header--sitegen__editor__end__save-button">
						<div
							className="nfd-onboarding-header--sitegen__editor__end__save-button__text"
							role="button"
							tabIndex={ 0 }
							onKeyDown={ generateChildThemes }
							onClick={ generateChildThemes }
						>
							{ __( 'Save & Continue', 'wp-module-onboarding' ) }
						</div>
						<Icon
							icon={ chevronRight }
							className="nfd-onboarding-header--sitegen__editor__end__save-button__text"
						></Icon>
					</div>
				</div>
			</Fill>
		</>
	);
};

export default StepSiteGenEditorHeader;
