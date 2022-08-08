import apiFetch from '@wordpress/api-fetch';
import { CheckboxControl, RadioControl } from '@wordpress/components';
import { useViewportMatch } from '@wordpress/compose';
import { useDispatch, useSelect } from '@wordpress/data';
import { useEffect } from '@wordpress/element';
import { __ } from '@wordpress/i18n';
import {
	VIEW_NAV_ECOMMERCE_STORE_INFO,
	YITH_BOOKING_PLUGIN,
	YITH_PRODUCT_FILTER_PLUGIN,
	YITH_SEARCH_PLUGIN,
	YITH_SHIPPO_PLUGIN
} from '../../../../../constants';
import NavCardButton from '../../../../components/Button/NavCardButton';
import CardHeader from '../../../../components/CardHeader';
import CommonLayout from '../../../../components/Layouts/Common';
import NeedHelpTag from '../../../../components/NeedHelpTag';
import NewfoldLargeCard from '../../../../components/NewfoldLargeCard';
import { store as nfdOnboardingStore } from '../../../../store';
import {
	installYithPlugin,
	updateWCOnboarding
} from '../../../../utils/api/ecommerce';
import { resolve } from '../../../../utils/api/resolve';
import content from '../content.json';

const StepProducts = () => {
	const isLargeViewport = useViewportMatch( 'medium' );
	const {
		setDrawerActiveView,
		setIsDrawerOpened,
		setIsDrawerSuppressed,
		setIsSidebarOpened,
		setCurrentOnboardingData,
	} = useDispatch(nfdOnboardingStore);

	let currentData = useSelect((select) =>
		select(nfdOnboardingStore).getCurrentOnboardingData()
	);

	useEffect(() => {
		if (isLargeViewport) {
			setIsDrawerOpened(true);
		}
		setIsSidebarOpened(false);
		setIsDrawerSuppressed(false);
		setDrawerActiveView(VIEW_NAV_ECOMMERCE_STORE_INFO);
		setCurrentOnboardingData({ productInfo: { product_types: [] } });
	}, []);

	const getPluginInstall = async (data) => {
		return await resolve(
			apiFetch({
				path: `/newfold-ecommerce/v1/plugins/install`,
				method: 'POST',
				data,
			})
		);
	};

	const handleCheckbox = (value, checked) => {
		setCurrentOnboardingData({
			productInfo: {
				...currentData.productInfo,
				product_types: checked
					? [...currentData.productInfo?.product_types, value]
					: currentData.productInfo.product_types.filter(
							(product) => product !== value
					  ),
			},
		});
	};

	const getPluginName = (productType) => {
		switch (productType) {
			case 'physical':
				return YITH_SHIPPO_PLUGIN;
			case 'bookings':
				return YITH_BOOKING_PLUGIN;
			default:
				return null;
		}
	};

	const handleButtonClick = async () => {
		currentData.productInfo?.product_types.forEach(async (product) => {
			const data = { plugin: getPluginName(product) };
			data.plugin && (await getPluginInstall(data));
		});

		// TODO: Put off install until onboarding is complete
		if (
			currentData.productInfo?.product_count !== '0' &&
			currentData.productInfo?.product_count !== '1-10'
		) {
			await installYithPlugin(YITH_SEARCH_PLUGIN);
			await installYithPlugin(YITH_PRODUCT_FILTER_PLUGIN);
		}
		const wcData = {
			completed: true,
			product_types: currentData.productInfo?.product_types,
			product_count: currentData.productInfo?.product_count,
		};
		await updateWCOnboarding(wcData);
	};

	return (
		<CommonLayout isBgPrimary isCentered>
			<NewfoldLargeCard>
				<div className='nfd-onboarding-experience-step onboarding-product-step onboarding-ecommerce-step'>
					<div className='nfd-card-heading center'>
						<CardHeader
							heading={__(content.stepProductsHeading, 'wp-module-onboarding')}
							subHeading={__(content.stepProductsSubHeading, 'wp-module-onboarding')}
						/>
					</div>
					<div className='nfd-product-step-options'>
						{content.productOptions.map((product) => (
							<CheckboxControl
								checked={currentData.productInfo?.product_types.includes(
									product.value
								)}
								label={product.content}
								onChange={(e) => handleCheckbox(product.value, e)}
							/>
						))}
					</div>
					<div className='step-product-numbers'>
						<span style={{ fontSize: '16px' }}>
							{__(content.stepProductsQuestion, 'wp-module-onboarding')}
						</span>
						<RadioControl
							className='components-radio-control__input'
							selected={currentData.productInfo?.product_count}
							options={content.stepProductNumbers.map((option) => {
								return {
									label: __(option.content, 'wp-module-onboarding'),
									value: __(option.value, 'wp-module-onboarding'),
								};
							})}
							onChange={(value) =>
								setCurrentOnboardingData({
									productInfo: {
										...currentData.productInfo,
										product_count: value,
									},
								})
							}
						/>
					</div>
					<NavCardButton text={__(content.buttonText, 'wp-module-onboarding')} />
					<NeedHelpTag />
				</div>
			</NewfoldLargeCard>
		</CommonLayout>
	);
};

export default StepProducts;
