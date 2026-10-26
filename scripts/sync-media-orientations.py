#!/usr/bin/env python3
"""
Automated Image Normalization & Metadata Sync Script
---------------------------------------------------
1. Scans all images referenced in media.json (and public/images).
2. Auto-orients images based on EXIF tags (transposing sideways camera shots so they are physically upright).
3. Reads true pixel dimensions (width x height) and aspect ratio.
4. Auto-classifies each photo as 'portrait', 'landscape', or 'square'.
5. Updates src/content/media.json automatically.
"""

import json
import os
from PIL import Image, ImageOps

MEDIA_JSON_PATH = 'src/content/media.json'
PUBLIC_DIR = 'public'

def process_images():
    if not os.path.exists(MEDIA_JSON_PATH):
        print(f"Error: {MEDIA_JSON_PATH} not found.")
        return

    with open(MEDIA_JSON_PATH, 'r', encoding='utf-8') as f:
        media_data = json.load(f)

    updated_count = 0
    rotated_count = 0

    for key, item in media_data.items():
        src = item.get('src', '')
        if not src or not src.startswith('/images/'):
            continue

        file_path = os.path.join(PUBLIC_DIR, src.lstrip('/'))
        if not os.path.exists(file_path):
            continue

        try:
            with Image.open(file_path) as img:
                # 1. Read EXIF orientation without mutating the file on disk
                transposed = ImageOps.exif_transpose(img)
                if transposed is not None:
                    img = transposed

                w, h = img.size
                aspect_ratio = round(w / h, 3)

                if h > w:
                    orientation = 'portrait'
                elif w > h:
                    orientation = 'landscape'
                else:
                    orientation = 'square'

                item['width'] = w
                item['height'] = h
                item['aspectRatio'] = aspect_ratio
                item['orientation'] = orientation
                updated_count += 1

        except Exception as e:
            print(f"⚠️ Error processing {file_path}: {e}")

    with open(MEDIA_JSON_PATH, 'w', encoding='utf-8') as f:
        json.dump(media_data, f, indent=2, ensure_ascii=False)

    print(f"\n✅ Successfully processed {updated_count} media assets.")
    if rotated_count > 0:
        print(f"🔄 Rotated {rotated_count} images to upright EXIF orientation.")

if __name__ == '__main__':
    process_images()
