import { useLocation } from 'react-router-dom';
import { useState, useEffect } from '@wordpress/element';
import { useSelect, useDispatch } from '@wordpress/data';

import { getPatterns } from '../../../utils/api/patterns';
import { store as nfdOnboardingStore } from '../../../store';
import CommonLayout from '../../../components/Layouts/Common';
import {
	SIDEBAR_LEARN_MORE,
	THEME_STATUS_FAILURE,
	VIEW_DESIGN_TYPOGRAPHY,
	THEME_STATUS_NOT_ACTIVE,
} from '../../../../constants';
import { DesignStateHandler } from '../../../components/StateHandlers';
import {
	LivePreview,
	GlobalStylesProvider,
} from '../../../components/LivePreview';

const StepDesignTypography = () => {
	const location = useLocation();
	const [ pattern, setPattern ] = useState();
	const [ isLoaded, setIsLoaded ] = useState( false );

	const { currentStep } = useSelect( ( select ) => {
		return {
			currentStep: select( nfdOnboardingStore ).getStepFromPath(
				location.pathname
			),
		};
	}, [] );

	const { updateThemeStatus, setDrawerActiveView, setSidebarActiveView } =
		useDispatch( nfdOnboardingStore );

	useEffect( () => {
		setSidebarActiveView( SIDEBAR_LEARN_MORE );
		setDrawerActiveView( VIEW_DESIGN_TYPOGRAPHY );
	}, [] );

	const handleAPIError = ( error ) => {
		if ( error?.data?.status ) {
			switch ( error.data.status ) {
				case 404:
					return updateThemeStatus( THEME_STATUS_NOT_ACTIVE );
			}
		}
		return updateThemeStatus( THEME_STATUS_FAILURE );
	};

	const getFontPatterns = async () => {
		const patternsResponse = await getPatterns(
			currentStep.patternId,
			true
		);
		if ( patternsResponse?.error ) {
			return handleAPIError( patternsResponse.error );
		}
		setPattern( patternsResponse?.body );
		setIsLoaded( true );
	};

	useEffect( () => {
		if ( ! isLoaded ) getFontPatterns();
	}, [ isLoaded ] );

	return (
		<DesignStateHandler>
			<GlobalStylesProvider>
				<CommonLayout className="theme-fonts-preview">
					<div className="theme-fonts-preview__title-bar">
						<div className="theme-fonts-preview__title-bar__browser">
							<span className="theme-fonts-preview__title-bar__browser__dot"></span>
							<span className="theme-fonts-preview__title-bar__browser__dot"></span>
							<span className="theme-fonts-preview__title-bar__browser__dot"></span>
						</div>
					</div>
					<div className="theme-fonts-preview__live-preview-container">
						{ ! pattern && (
							<LivePreview
								blockGrammer={ '' }
								styling={ 'custom' }
								viewportWidth={ 1300 }
							/>
						) }
						{ pattern && (
							<LivePreview
								blockGrammer={ pattern }
								styling={ 'custom' }
								viewportWidth={ 1300 }
							/>
						) }
					</div>
				</CommonLayout>
			</GlobalStylesProvider>
		</DesignStateHandler>
	);
};

export default StepDesignTypography;
