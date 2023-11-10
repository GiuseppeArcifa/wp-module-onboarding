import { memo } from '@wordpress/element';
import AdminBar from '../../../AdminBar';
import ProgressBar from '../../../ProgressBar';

import { Fill } from '@wordpress/components';
import {
	HEADER_SITEGEN,
	HEADER_START,
	HEADER_TOP,
	HEADER_CENTER,
	HEADER_END
} from '../../../../../constants';

import { useSelect } from '@wordpress/data';
import { store as nfdOnboardingStore } from '../../../../store';
import StepNavigation from './step-navigation';
import StepNavigationLeft from '../SiteGenEditorHeader/step-navigation-left';
import StepNavigationCenter from '../SiteGenEditorHeader/step-navigation-center';
import StepNavigationRight from '../SiteGenEditorHeader/step-navigation-right';

// eslint-disable-next-line import/no-extraneous-dependencies
import { findIndex } from 'lodash';

/**
 * Interface header rendered into header render prop in <InterfaceSkeleton />.
 *
 * @return {WPComponent} Header
 */
const SiteGenHeader = () => {
	const { isHeaderNavigationEnabled, currentStep, allSteps } = useSelect(
		( select ) => {
			return {
				currentStep: select( nfdOnboardingStore ).getCurrentStep(),
				isHeaderNavigationEnabled:
					select( nfdOnboardingStore ).isHeaderNavigationEnabled(),
				allSteps: select( nfdOnboardingStore ).getAllSteps(),
			};
		}
	);

	const currentStepIndex = findIndex( allSteps, {
		path: currentStep.path,
	} );
	const progress = ( currentStepIndex / allSteps.length ) * 100;

	const isEditor = currentStep.path === '/sitegen/step/editor';
	console.log(isEditor);
	
	return (
		<>
			<Fill name={ `${ HEADER_SITEGEN }/${ HEADER_TOP }` }>
				<>
					<AdminBar />
					{ isHeaderNavigationEnabled && (
						<ProgressBar progress={ progress } />
					) }
				</>
			</Fill>
			{ !isEditor ? (
				<Fill name={ `${ HEADER_SITEGEN }/${ HEADER_START }` }>
					<>{ isHeaderNavigationEnabled && <StepNavigation /> }</>
				</Fill> 
			) : (
				<>
					<Fill name={ `${ HEADER_SITEGEN }/${ HEADER_START }` }>
						<>{ isHeaderNavigationEnabled && <StepNavigationLeft /> }</>
					</Fill>
					<Fill name={ `${ HEADER_SITEGEN }/${ HEADER_CENTER }` }>
						<>{ isHeaderNavigationEnabled && <StepNavigationCenter /> }</>
					</Fill>
					<Fill name={ `${ HEADER_SITEGEN }/${ HEADER_END }` }>
						<>{ isHeaderNavigationEnabled && <StepNavigationRight /> }</>
					</Fill>
				</>
			)}

			{ currentStep?.header && <currentStep.header /> }
		</>
	);
};

export default memo( SiteGenHeader );
