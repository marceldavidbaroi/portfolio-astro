export type MediaAsset = {
	id: string;
	src: string;
	alt: string;
	caption?: string;
	title?: string;
	group?: string;
};

type MediaEntry = { id: string; data: MediaAsset };

/** Build a Map once per page from getCollection('media') entries. */
export function mediaMap(entries: MediaEntry[]): Map<string, MediaAsset> {
	const map = new Map<string, MediaAsset>();
	for (const entry of entries) {
		const asset = entry.data.id ? entry.data : { ...entry.data, id: entry.id };
		map.set(asset.id, asset);
	}
	return map;
}

/** Sync resolve of media IDs. Throws at build if an ID is missing. */
export function resolveAssets(ids: string[], map: Map<string, MediaAsset>): MediaAsset[] {
	return ids.map((id) => {
		const asset = map.get(id);
		if (!asset) {
			throw new Error(`[media] Unknown media id: "${id}"`);
		}
		return asset;
	});
}

export function resolveAsset(id: string, map: Map<string, MediaAsset>): MediaAsset {
	return resolveAssets([id], map)[0];
}
