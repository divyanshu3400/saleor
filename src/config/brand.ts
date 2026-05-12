/**
 * Brand Configuration
 *
 * Centralized branding settings for the storefront.
 * Update these values when customizing for a new store.
 */

export const brandConfig = {
	/** Site name used in titles, metadata, and headers */
	siteName: "Yugantar Store",

	/** Legal entity name for copyright notices */
	copyrightHolder: "Tech Yugantar",

	/** Organization name for structured data (JSON-LD) */
	organizationName: "Tech Yugantar",

	/** Default brand name for products without a brand */
	defaultBrand: "Yugantar Store",

	/** Tagline/description for the store */
	tagline: "Apne Desh Ke Products, Apne Yugantar Store Se.",

	/** Homepage meta description */
	description:
		"Yugantar Store brings you authentic desi products with quality, trust, and tradition. Explore a curated collection inspired by Indian culture and everyday needs.",

	/** Logo aria-label for accessibility */
	logoAriaLabel: "Yugantar Store",

	/** Title template - %s will be replaced with page title */
	titleTemplate: "%s | Yugantar Store",

	/** Social media handles */
	social: {
		/** Twitter/X handle (without @) - set to null to disable */
		twitter: null as string | null,

		/** Instagram handle (without @) - set to null to disable */
		instagram: null as string | null,

		/** Facebook page URL - set to null to disable */
		facebook: null as string | null,
	},
} as const;

/**
 * Helper to format page title using brand template.
 */
export function formatPageTitle(title: string): string {
	return brandConfig.titleTemplate.replace("%s", title);
}

/**
 * Get copyright text with specified year.
 * Use CopyrightText component for dynamic year in Server Components.
 */
export function getCopyrightText(year: number = new Date().getFullYear()): string {
	return `© ${year} ${brandConfig.copyrightHolder}. All rights reserved.`;
}
