import { getCollection } from 'astro:content';
import { mediaMap } from './media';

export interface GalleryPhoto {
	id: string;
	title?: string;
	caption?: string;
	story?: string;
	date?: string;
	location?: string;
	span?: 'full' | 'wide' | 'normal';
	isEmblem?: boolean;
	src: string;
	alt: string;
}

export interface GalleryStoryChapter {
	id?: string;
	title: string;
	tag?: string;
	date?: string;
	storyParagraphs: string[];
	imageIds: string[];
}

export interface Album {
	id: string;
	galleryId: string;
	owner: string;
	tag: string;
	title: string;
	category: 'work' | 'education' | 'civic' | 'life';
	period?: string;
	location?: string;
	description?: string;
	story?: string;
	memoirHref?: string;
	coverImage?: string;
	previewThumbs: string[];
	photoCount: number;
	stories: GalleryStoryChapter[];
	photos: GalleryPhoto[];
}

export async function getAllAlbums(): Promise<Album[]> {
	const media = mediaMap(await getCollection('media'));
	const galleryEntries = await getCollection('galleries');

	return galleryEntries.flatMap((g) => {
		return g.data.albums.map((album) => {
			const resolvedPhotos: GalleryPhoto[] = album.photos
				.map((p) => {
					let src = '';
					let alt = '';
					let caption = p.caption;
					const asset = media.get(p.id);
					if (asset) {
						src = asset.src;
						alt = asset.alt;
						caption = caption || asset.caption;
					}
					return {
						...p,
						src,
						alt,
						caption
					};
				})
				.filter((p) => Boolean(p.src));

			const previewThumbs = resolvedPhotos.slice(0, 3).map((p) => p.src);
			const cover = resolvedPhotos[0]?.src || '';

			return {
				id: album.id,
				galleryId: g.id,
				owner: g.data.owner,
				tag: album.tag,
				title: album.title,
				category: album.category || 'life',
				period: album.period,
				location: album.location,
				description: album.description,
				story: album.story,
				memoirHref: album.memoirHref,
				coverImage: cover,
				previewThumbs,
				photoCount: resolvedPhotos.length,
				stories: album.stories || [],
				photos: resolvedPhotos
			};
		});
	}).sort((a, b) => {
		// Custom recency sort priority:
		// 1. proficient-engineering-team (2024 — Present / 2026 Textech)
		// 2. diu-undergraduate-years (2020 — 2024)
		// 3. group-13-brotherhood (2017 — 2019)
		// 4. ndc-visit-dec-2018 (2018)
		// 5. civic-movement-2018 (2018)
		// 6. pope-francis-2017 (2017)
		// 7. ndc-college-memories (2017)
		const order: Record<string, number> = {
			'proficient-engineering-team': 1,
			'diu-undergraduate-years': 2,
			'group-13-brotherhood': 3,
			'ndc-visit-dec-2018': 4,
			'civic-movement-2018': 5,
			'pope-francis-2017': 6,
			'ndc-college-memories': 7
		};
		return (order[a.id] ?? 99) - (order[b.id] ?? 99);
	});
}
