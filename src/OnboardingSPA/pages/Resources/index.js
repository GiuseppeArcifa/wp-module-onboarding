import CommonLayout from '../../components/Layouts/Common';
import { VIEW_NAV_PAGE } from '../../../constants';
import { store as nfdOnboardingStore } from '../../store';
import { useDispatch } from '@wordpress/data';
import { useEffect } from '@wordpress/element';
import { __ } from '@wordpress/i18n';

const PageResources = () => {
	const { setIsDrawerOpened, setDrawerActiveView } =
		useDispatch(nfdOnboardingStore);

	useEffect(() => {
		setIsDrawerOpened(true);
		setDrawerActiveView(VIEW_NAV_PAGE);
	}, []);

	return <CommonLayout isPadded>{__('Resources Page.')}</CommonLayout>;
};

export default PageResources;