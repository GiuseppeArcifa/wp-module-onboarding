// <reference types="Cypress" />

import {
	AdminBarCheck,
	DarkBGCheck,
	LightBGCheck,
} from '../wp-module-support/siteGen.cy';
import { apiList, migrationConnection } from '../wp-module-support/MockApi.cy';

describe( 'SiteGen Fork Step', function () {
	before( () => {
		cy.exec(
			'npx wp-env run cli wp option delete nfd_module_onboarding_flow'
		);
		cy.exec(
			`npx wp-env run cli wp option set _transient_nfd_site_capabilities '{"hasAISiteGen": true, "canAccessAI": true}' --format=json`
		);
		cy.exec(
			`npx wp-env run cli wp option set _transient_timeout_nfd_site_capabilities 4102444800`
		);
		cy.wait( 10000 );
		cy.visit( 'wp-admin/?page=nfd-onboarding#/wp-setup/step/fork' );
		cy.timeout( 60000 );
	} );

	it( 'Check for the header admin bar', () => {
		AdminBarCheck();
	} );

	it( 'Check for the existing dark background', () => {
		DarkBGCheck();
	} );

	it( 'Check for the light background', () => {
		LightBGCheck();
	} );

	it( 'Check for the heading and the title', () => {
		cy.get( '.nfd-onboarding-step__heading__title' )
			.should( 'be.visible' )
			.should( 'have.text', 'Welcome to WordPress' );
	} );

	it( 'Check for the subheading', () => {
		cy.get( '.nfd-onboarding-step__heading__subtitle' ).should(
			'be.visible'
		);
	} );

	it( 'Check the number of container options available', () => {
		cy.get( '.nfd-onboarding-sitegen-options__container__options' )
			.should( 'be.visible' )
			.should( 'have.length', 3 );
	} );

	it( 'Check for selection of different container options', () => {
		const className = '.nfd-onboarding-sitegen-options__container__options';
		const arr = cy.get( className );

		arr.each( ( $element ) => {
			const dataSlugText = $element.attr( 'data-flow' );
			if ( dataSlugText == 'sitegen' ) {
				$element.click();
				cy.url().should( 'include', 'sitegen/step/welcome', {
					timeout: 10000,
				} );
				cy.go( 'back' );
			}
		} );
	} );

	it( 'Check for the import your WP account link at the bottom', () => {
		cy.get( '.nfd-onboarding-step--site-gen__fork__importsite' )
			.scrollIntoView()
			.should( 'exist' )
			.should( 'contain', 'Already have a WordPress site' );
	} );
} );

describe( 'SiteGen Fork Step- Migration Screen', function () {
	before( () => {
		cy.exec(
			'npx wp-env run cli wp option delete nfd_module_onboarding_flow'
		);
		cy.exec(
			`npx wp-env run cli wp option update _transient_nfd_site_capabilities '{"hasAISiteGen": true, "canAccessAI": true, "canMigrateSite": true}' --format=json`
		);
		cy.visit( 'wp-admin/?page=nfd-onboarding#/wp-setup/step/fork' );
		cy.wait( 5000 );
	} );

	it( 'Verify Import site leads to migration process initiation screen', () => {
		cy.timeout( 20000 )
		cy.intercept( apiList.migrateConnect, ( req ) => {
			migrationConnection( req );
		} ).as( 'migrateCall' );

		cy.get( '.nfd-onboarding-step--site-gen__fork__importsite', {
		} )
			.scrollIntoView()
			.should('exist')
			.click();
		cy.get( '.nfd-onboarding-step__heading__title' ).should( 'exist' );
		cy.get(
			'.nfd-onboarding-step--site-gen__migration--container__loader'
		).should( 'exist' );
		cy.get(
			'.nfd-onboarding-step--site-gen__migration--container__importtext'
		).should( 'exist' );

		AdminBarCheck();
		DarkBGCheck();
		LightBGCheck();
		cy.wait( '@migrateCall' );
	} );

	it( 'Verify migration connection request is successful and redirection happens', () => {
		cy.url().should( 'contain', 'app.instawp.io/migrate' );
	} );
} );
