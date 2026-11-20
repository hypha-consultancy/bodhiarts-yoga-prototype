# BodhiArts 菩提藝術瑜珈 - website prototype

Prototype v2: 2026-11-18, updated after the kick-off meeting. First version: 2026-11-02.

A static prototype of the BodhiArts website, made by Hypha. It is not the live site yet. The planned domain is bodhiartsyoga.com, which has not been bought yet.

- The site is one page: `index.html`. Open it in a browser, or view it on GitHub Pages.
- Languages: Traditional Chinese, Simplified Chinese and English. The visitor switches with the 繁 / 简 / EN buttons.
- Photos and logo are from Ting Ting. The two venue photos (`assets/venue-*.jpg`) are from Auckland Council's bookings site and should be replaced with our own before launch.
- The booking form does not send anything yet. At launch it will send to bodhiarts.yoga@gmail.com.
- The page is set to noindex, so search engines don't list it.

## Editing

Edit `build/src.html`, not `index.html`. The source holds Simplified Chinese (`.zh`) and English (`.en`). The build script adds the Traditional Chinese (`.tc`) text with OpenCC (Taiwan wording) and writes `index.html`:

```
cd build
npm install
node build.js ../index.html
```

## Still to confirm with Ting Ting

- The year she started Iyengar yoga (2013 or 2014) and her certification level and year
- Her new self-introduction, which replaces the draft from Four Winds Yoga
- Blog articles. The blog page currently shows layout samples.
