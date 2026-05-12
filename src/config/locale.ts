/**
 * Locale settings for display formatting.
 * Currency comes from Saleor channels, not here.
 */

export const localeConfig = {
	/** Locale for Intl APIs (number/date formatting) - Indian English */
	default: "en-IN",

	/** Language code for Saleor API - controls translated content */
	graphqlLanguageCode: "EN_IN" as const,

	/** HTML lang attribute */
	htmlLang: "en-IN",

	/** Open Graph locale */
	ogLocale: "en_IN",

	/** Available locales (for future i18n) */
	available: ["en-IN"] as const,

	/**
	 * Fallback currency - ONLY used when API returns null.
	 * Real currency comes from the channel via Saleor API.
	 */
	fallbackCurrency: "INR",
} as const;

/**
 * Format a price with the configured locale.
 */
export function formatPrice(amount: number, currency: string): string {
	return new Intl.NumberFormat(localeConfig.default, {
		style: "currency",
		currency: currency,
		maximumFractionDigits: 2,
	}).format(amount);
}

/**
 * Format a date with the configured locale.
 */
export function formatDate(date: Date | number, options?: Intl.DateTimeFormatOptions): string {
	return new Intl.DateTimeFormat(localeConfig.default, {
		dateStyle: "medium",
		...options,
	}).format(date);
}

/**
 * Format a number with the configured locale.
 * Example: 1,00,000 instead of 100,000
 */
export function formatNumber(value: number, options?: Intl.NumberFormatOptions): string {
	return new Intl.NumberFormat(localeConfig.default, options).format(value);
}
