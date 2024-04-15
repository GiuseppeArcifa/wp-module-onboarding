import { Fragment, useEffect } from '@wordpress/element';
import { useSelect } from '@wordpress/data';

import { store as nfdOnboardingStore } from '../../../store';
import {
	OnboardingEvent,
	trackOnboardingEvent,
} from '../../../utils/analytics/hiive';
import { ACTION_SITEGEN_ERROR_STATE_TRIGGERED } from '../../../utils/analytics/hiive/constants';
import { SITEGEN_FLOW } from '../../../data/flows/constants';

import SiteGenSiteError from '../../SiteGenError';
import SiteGenMigrationError from '../../SiteGenError/migration';
import { stepMigration } from '../../../steps/SiteGen/Migration/step';

const SitegenAiStateHandler = ( { children } ) => {
	const { siteGenErrorStatus, currentStep } = useSelect( ( select ) => {
		return {
			currentStep: select( nfdOnboardingStore ).getCurrentStep(),
			siteGenErrorStatus:
				select( nfdOnboardingStore ).getSiteGenErrorStatus(),
		};
	} );

	useEffect( () => {
		if ( siteGenErrorStatus === true ) {
			trackOnboardingEvent(
				new OnboardingEvent(
					ACTION_SITEGEN_ERROR_STATE_TRIGGERED,
					undefined,
					{
						source: SITEGEN_FLOW,
					}
				)
			);
		}
	}, [ siteGenErrorStatus ] );
	const isMigrationStep = currentStep === stepMigration;
	const handleRender = () => {
		if ( siteGenErrorStatus ) {
			return isMigrationStep ? (
				<SiteGenMigrationError />
			) : (
				<SiteGenSiteError />
			);
		}

		return children;
	};
	return <Fragment>{ handleRender() }</Fragment>;
};

export default SitegenAiStateHandler;
