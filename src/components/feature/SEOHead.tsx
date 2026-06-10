import { useEffect } from "react";
import {
	BRAND_LOGO_HEIGHT,
	BRAND_LOGO_URL,
	BRAND_LOGO_WIDTH,
	DEFAULT_OG_IMAGE_HEIGHT,
	DEFAULT_OG_IMAGE_WIDTH,
	OG_LOCALE,
	OG_LOCALE_ALTERNATES,
	resolveCanonicalUrl,
	resolveImageUrl,
	SITE_NAME,
	SITE_URL,
	TWITTER_SITE,
} from "@/constants/seo";

interface SEOHeadProps {
	title: string;
	/** Meta description — Google SERP (~150–160 chars) */
	description: string;
	/** Open Graph description — social previews (~125 chars). Falls back to description. */
	ogDescription?: string;
	/** Twitter description (~200 chars). Falls back to ogDescription, then description. */
	twitterDescription?: string;
	keywords?: string | string[];
	canonical?: string;
	ogType?: string;
	noIndex?: boolean;
	schema?: object | object[];
	/** Absolute URL or path to the page's representative image — used for og:image & twitter:image */
	image?: string;
	/** Alt text for og:image and twitter:image */
	imageAlt?: string;
	imageWidth?: number;
	imageHeight?: number;
	/** Twitter card type — defaults to 'summary_large_image' */
	twitterCard?: "summary" | "summary_large_image";
	/** Author name — defaults to VerifyAfrica */
	author?: string;
	/**
	 * ISO 3166-1 alpha-2 country code for per-country geo targeting.
	 * e.g. 'NG' for Nigeria, 'KE' for Kenya, 'ZA' for South Africa.
	 * Falls back to 'AF' (pan-African) when not provided.
	 */
	geoRegion?: string;
	/**
	 * Latitude;Longitude for the geo.position meta tag.
	 * e.g. '9.0820;8.6753' for Nigeria.
	 * Falls back to the African continent centroid when not provided.
	 */
	geoPosition?: string;
	/**
	 * Human-readable place name for the geo.placename meta tag.
	 * e.g. 'Nigeria', 'Kenya', 'South Africa'.
	 * Falls back to 'Africa' when not provided.
	 */
	geoPlacename?: string;
}

export default function SEOHead({
	title,
	description,
	ogDescription,
	twitterDescription,
	keywords,
	canonical,
	ogType = "website",
	noIndex = false,
	schema,
	image,
	imageAlt,
	imageWidth,
	imageHeight,
	twitterCard = "summary_large_image",
	author = SITE_NAME,
	geoRegion,
	geoPosition,
	geoPlacename,
}: SEOHeadProps) {
	const canonicalUrl = resolveCanonicalUrl(canonical);
	const resolvedImage = image ?? BRAND_LOGO_URL;
	const imageUrl = resolveImageUrl(resolvedImage);
	const resolvedImageAlt = imageAlt ?? title;
	const resolvedImageWidth =
		imageWidth ?? (resolvedImage === BRAND_LOGO_URL ? BRAND_LOGO_WIDTH : DEFAULT_OG_IMAGE_WIDTH);
	const resolvedImageHeight =
		imageHeight ?? (resolvedImage === BRAND_LOGO_URL ? BRAND_LOGO_HEIGHT : DEFAULT_OG_IMAGE_HEIGHT);
	const keywordsContent = Array.isArray(keywords) ? keywords.join(", ") : keywords;
	const resolvedOgDescription = ogDescription ?? description;
	const resolvedTwitterDescription =
		twitterDescription ?? ogDescription ?? description;

	useEffect(() => {
		document.title = title;

		const setMeta = (selector: string, attr: string, value: string) => {
			let el = document.querySelector<HTMLMetaElement>(selector);
			if (!el) {
				el = document.createElement("meta");
				const inner = selector.slice("meta[".length, -1);
				const eqIdx = inner.indexOf("=");
				const attrName = inner.slice(0, eqIdx);
				const attrValue = inner.slice(eqIdx + 1).replace(/^"|"$/g, "");
				el.setAttribute(attrName, attrValue);
				document.head.appendChild(el);
			}
			el.setAttribute(attr, value);
		};

		const setLink = (rel: string, href: string) => {
			let el = document.querySelector<HTMLLinkElement>(`link[rel="${rel}"]`);
			if (!el) {
				el = document.createElement("link");
				el.rel = rel;
				document.head.appendChild(el);
			}
			el.href = href;
		};

		const removeMeta = (selector: string) => {
			const el = document.querySelector(selector);
			if (el) el.remove();
		};

		const removeMetaByProperty = (property: string) => {
			document
				.querySelectorAll(`meta[property="${property}"]`)
				.forEach((el) => el.remove());
		};

		// ── Core meta ────────────────────────────────────────────────
		setMeta('meta[name="description"]', "content", description);
		if (keywordsContent) {
			setMeta('meta[name="keywords"]', "content", keywordsContent);
		} else {
			removeMeta('meta[name="keywords"]');
		}
		setMeta('meta[name="author"]', "content", author);
		setMeta(
			'meta[name="robots"]',
			"content",
			noIndex ? "noindex, nofollow" : "index, follow",
		);
		setMeta(
			'meta[name="last-modified"]',
			"content",
			new Date().toISOString().split("T")[0],
		);

		// ── Canonical ────────────────────────────────────────────────
		setLink("canonical", canonicalUrl);

		// ── Open Graph ───────────────────────────────────────────────
		setMeta('meta[property="og:title"]', "content", title);
		setMeta('meta[property="og:description"]', "content", resolvedOgDescription);
		setMeta('meta[property="og:url"]', "content", canonicalUrl);
		setMeta('meta[property="og:type"]', "content", ogType);
		setMeta('meta[property="og:site_name"]', "content", SITE_NAME);
		setMeta('meta[property="og:locale"]', "content", OG_LOCALE);

		removeMetaByProperty("og:locale:alternate");
		for (const locale of OG_LOCALE_ALTERNATES) {
			const el = document.createElement("meta");
			el.setAttribute("property", "og:locale:alternate");
			el.setAttribute("content", locale);
			document.head.appendChild(el);
		}

		if (imageUrl) {
			setMeta('meta[property="og:image"]', "content", imageUrl);
			setMeta(
				'meta[property="og:image:width"]',
				"content",
				String(resolvedImageWidth),
			);
			setMeta(
				'meta[property="og:image:height"]',
				"content",
				String(resolvedImageHeight),
			);
			setMeta('meta[property="og:image:alt"]', "content", resolvedImageAlt);
			setMeta(
				'meta[property="og:image:type"]',
				"content",
				imageUrl.endsWith(".svg") ? "image/svg+xml" : "image/png",
			);
		} else {
			removeMeta('meta[property="og:image"]');
			removeMeta('meta[property="og:image:width"]');
			removeMeta('meta[property="og:image:height"]');
			removeMeta('meta[property="og:image:alt"]');
			removeMeta('meta[property="og:image:type"]');
		}

		// ── Twitter Card ─────────────────────────────────────────────
		setMeta('meta[name="twitter:card"]', "content", twitterCard);
		setMeta('meta[name="twitter:site"]', "content", TWITTER_SITE);
		setMeta('meta[name="twitter:creator"]', "content", TWITTER_SITE);
		setMeta('meta[name="twitter:title"]', "content", title);
		setMeta(
			'meta[name="twitter:description"]',
			"content",
			resolvedTwitterDescription,
		);

		if (imageUrl) {
			setMeta('meta[name="twitter:image"]', "content", imageUrl);
			setMeta('meta[name="twitter:image:alt"]', "content", resolvedImageAlt);
		} else {
			removeMeta('meta[name="twitter:image"]');
			removeMeta('meta[name="twitter:image:alt"]');
		}

		// ── Schema.org JSON-LD ───────────────────────────────────────
		const existingScript = document.getElementById("schema-jsonld");
		if (existingScript) existingScript.remove();

		if (schema) {
			const script = document.createElement("script");
			script.id = "schema-jsonld";
			script.type = "application/ld+json";
			const schemas = Array.isArray(schema) ? schema : [schema];
			script.textContent = JSON.stringify(
				schemas.length === 1 ? schemas[0] : schemas,
			);
			document.head.appendChild(script);
		}

		// ── LCP image preload for article pages ──────────────────────
		if (ogType === "article" && imageUrl) {
			const preloadId = "article-hero-preload";
			let preloadEl = document.getElementById(
				preloadId,
			) as HTMLLinkElement | null;
			if (!preloadEl) {
				preloadEl = document.createElement("link") as HTMLLinkElement;
				preloadEl.id = preloadId;
				preloadEl.rel = "preload";
				preloadEl.setAttribute("as", "image");
				(preloadEl as HTMLLinkElement & { fetchpriority?: string }).fetchpriority =
					"high";
				document.head.insertBefore(preloadEl, document.head.firstChild);
			}
			preloadEl.href = imageUrl;
		}

		// ── Geo / Localized SEO ──────────────────────────────────────
		const resolvedGeoRegion = geoRegion ?? "AF";
		const resolvedGeoPosition = geoPosition ?? "8.7832;34.5085";
		const resolvedGeoPlacename = geoPlacename ?? "Africa";
		const resolvedICBM = resolvedGeoPosition.replace(";", ", ");

		setMeta('meta[name="geo.region"]', "content", resolvedGeoRegion);
		setMeta('meta[name="geo.position"]', "content", resolvedGeoPosition);
		setMeta('meta[name="geo.placename"]', "content", resolvedGeoPlacename);
		setMeta('meta[name="ICBM"]', "content", resolvedICBM);

		return () => {
			const s = document.getElementById("schema-jsonld");
			if (s) s.remove();
			if (ogType === "article") {
				const p = document.getElementById("article-hero-preload");
				if (p) p.remove();
			}
		};
	}, [
		title,
		description,
		resolvedOgDescription,
		resolvedTwitterDescription,
		keywordsContent,
		canonicalUrl,
		ogType,
		noIndex,
		schema,
		imageUrl,
		resolvedImageAlt,
		resolvedImageWidth,
		resolvedImageHeight,
		twitterCard,
		author,
		geoRegion,
		geoPosition,
		geoPlacename,
	]);

	return null;
}

export { SITE_URL };
