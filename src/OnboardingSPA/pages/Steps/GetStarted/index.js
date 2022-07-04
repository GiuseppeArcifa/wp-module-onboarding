import CommonLayout from '../../../components/Layouts/Common';
import { useEffect } from '@wordpress/element';
import { useLocation } from 'react-router-dom';
import NewfoldLargeCard from '../../../components/NewfoldLargeCard';
import ExperienceWithWPSetup from '../ExperienceWithWPSetup';

const StepGetStarted = () => {
	const location = useLocation();

	useEffect(() => {}, [location]);

	return (
		<CommonLayout isBgPrimary isCentered>
			<NewfoldLargeCard/>
		</CommonLayout>
	);
};

export default StepGetStarted;
