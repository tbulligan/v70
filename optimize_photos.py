import os
import json
import re
from PIL import Image, ImageOps

src = "photos"
dst = "web_photos"
os.makedirs(dst, exist_ok=True)

files = sorted([f for f in os.listdir(src) if f.lower().endswith((".jpg", ".jpeg", ".png"))])

mapping = {}

def clean_name(name):
    base, ext = os.path.splitext(name)
    cleaned = re.sub(r'[^a-zA-Z0-9_-]', '_', base)
    cleaned = re.sub(r'_+', '_', cleaned).strip('_')
    return f"{cleaned}.jpg"

print(f"Processing {len(files)} photos...")

for f in files:
    in_path = os.path.join(src, f)
    out_name = clean_name(f)
    out_path = os.path.join(dst, out_name)
    
    with Image.open(in_path) as im:
        # Transpose according to EXIF orientation
        im = ImageOps.exif_transpose(im)
        
        # Convert RGBA/P to RGB if necessary
        if im.mode != "RGB":
            im = im.convert("RGB")
            
        # Resize if larger than 1600 on longest edge
        max_dim = 1600
        w, h = im.size
        if max(w, h) > max_dim:
            if w > h:
                new_w = max_dim
                new_h = int(h * (max_dim / w))
            else:
                new_h = max_dim
                new_w = int(w * (max_dim / h))
            im = im.resize((new_w, new_h), Image.Resampling.LANCZOS)
            
        im.save(out_path, "JPEG", quality=85, optimize=True)
        
    mapping[f] = {
        "original": f,
        "web_file": out_name,
        "width": im.width,
        "height": im.height,
        "aspect": round(im.width / im.height, 2)
    }

with open("photos_manifest.json", "w", encoding="utf-8") as fp:
    json.dump(mapping, fp, indent=2, ensure_ascii=False)

print(f"Successfully processed {len(mapping)} photos into {dst}/")
