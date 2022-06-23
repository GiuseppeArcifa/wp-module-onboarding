export const NFD_ONBOARDING_ELEMENT_ID = 'nfd-onboarding';
export const runtimeDataExists =
	'object' === typeof window?.nfdOnboarding && 'url' in window.nfdOnboarding;
export const apiBase = '?rest_route=/newfold-onboarding/v1/';
export const VIEW_NAV_PRIMARY = 'nav-primary';
export const VIEW_NAV_DESIGN = 'nav-design';
export const VIEW_NAV_PAGE = 'nav-page';
export const VIEW_DESIGN_THEMES = 'design-themes';
export const VIEW_DESIGN_THEME_STYLES = 'design-theme-styles';
export const VIEW_DESIGN_COLORS = 'design-colors';
export const VIEW_DESIGN_TYPOGRAPHY = 'design-typography';
export const VIEW_DESIGN_HEADER_MENU = 'design-header-menu';

/**
 * All views for the <Drawer /> component.
 */
export const DRAWER_VIEWS = [
	VIEW_NAV_PRIMARY,
	VIEW_NAV_DESIGN,
	VIEW_NAV_PAGE,
	VIEW_DESIGN_THEMES,
	VIEW_DESIGN_THEME_STYLES,
	VIEW_DESIGN_COLORS,
	VIEW_DESIGN_TYPOGRAPHY,
	VIEW_DESIGN_HEADER_MENU,
];

/**
 * All Navigation views for the <Drawer /> component.
 */
export const DRAWER_NAV_VIEWS = [
	VIEW_NAV_PRIMARY,
	VIEW_NAV_DESIGN,
	VIEW_NAV_PAGE,
];