/**
 * List of monochrome (black / single-tone) SVG technology logos.
 * In dark mode, these logos need to be inverted/lightened to maintain high contrast and readability.
 */
export const MONOCHROME_SKILL_LOGOS = new Set([
	'/images/tech/ai-synthesis.svg',
	'/images/tech/barcode-scanner.svg',
	'/images/tech/cloudinary.svg',
	'/images/tech/data-modeling.svg',
	'/images/tech/ddd.svg',
	'/images/tech/expo.svg',
	'/images/tech/express.svg',
	'/images/tech/github.svg',
	'/images/tech/jwt.svg',
	'/images/tech/knockout.svg',
	'/images/tech/migrations.svg',
	'/images/tech/monorepo.svg',
	'/images/tech/nextjs.svg',
	'/images/tech/package-arch.svg',
	'/images/tech/phosphor.svg',
	'/images/tech/postgresql-rpc.svg',
	'/images/tech/prisma.svg',
	'/images/tech/push-notifications.svg',
	'/images/tech/rapid-prototyping.svg',
	'/images/tech/saas-security.svg',
	'/images/tech/shadcn.svg',
	'/images/tech/tanstack.svg',
	'/images/tech/testing-validation.svg',
	'/images/tech/ubuntu.svg',
	'/images/tech/vercel.svg',
	'/images/tech/web-scraping.svg'
]);

/**
 * Checks whether a given logo URL is a monochrome SVG requiring dark-mode inversion.
 */
export function isMonochromeLogo(logo?: string): boolean {
	if (!logo) return false;
	return MONOCHROME_SKILL_LOGOS.has(logo);
}
