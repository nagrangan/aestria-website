# Aestria Website - Image Setup Guide

## Images Needed from Instagram (@aestriabykiki)

### 1. Hero Product Image
- **Filename**: `hero-product.png`
- **Location**: `/public/hero-product.png`
- **Description**: Your best product shot - a beautiful charm or jewelry piece
- **Recommended**: High-resolution, well-lit product photography
- **Dimensions**: Preferably 800x1000px or similar 4:5 aspect ratio

### 2. Luxury Packaging Image
- **Filename**: `luxury-packaging.png`
- **Location**: `/public/luxury-packaging.png`
- **Description**: Your kraft packaging/unboxing experience
- **Recommended**: Show the luxury packaging, maybe slightly opened to reveal contents
- **Dimensions**: Square aspect ratio (1:1) works best

### 3. Collection Showcase Image
- **Filename**: `collection-showcase.png`
- **Location**: `/public/collection-showcase.png`
- **Description**: Multiple pieces together or lifestyle shot
- **Recommended**: Collection layout or styled flat lay
- **Dimensions**: Preferably 800x1000px or similar 4:5 aspect ratio

## How to Add Images

1. **Download images** from your Instagram posts
2. **Rename them** according to the filenames above
3. **Place them** in the `/public` folder of your project
4. **Optimize them** (optional but recommended):
   - Use tools like TinyPNG to reduce file size
   - Recommended max width: 1200px
   - Keep file sizes under 500KB each

## Image Guidelines for Best Results

### Product Photography Tips:
- **Hero Image**: Should showcase your finest piece with excellent lighting
- **Packaging**: Show the unboxing experience, emphasize luxury feel
- **Collection**: Multiple pieces arranged beautifully, showing variety

### Technical Requirements:
- **Format**: PNG (preferred for transparency and quality)
- **Quality**: High resolution but optimized for web
- **Aspect Ratios**: 
  - Hero & Collection: 4:5 (portrait)
  - Packaging: 1:1 (square)

## Alternative Image Sources

If you need placeholder images while preparing your actual photos:
- Use high-quality stock photos of luxury jewelry
- Consider hiring a professional photographer for best results
- Unsplash.com has some luxury jewelry photos you can use temporarily

## Image Credits

Make sure you have rights to use all images. Since these are from your own Instagram account (@aestriabykiki), you should have full rights to use them.

## Next Steps

1. Add the three images to `/public` folder
2. Test the website locally with `npm run dev`
3. Commit and push changes to GitHub
4. Deploy updated version to production

## Fallback Behavior

The website includes fallback gradients that will show if images fail to load, ensuring the site always looks professional.
