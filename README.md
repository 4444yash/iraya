# 💎 IRAYA — Fine Indian Silver Jewellery

> **Live Storefront Preview:** **[https://4444yash.github.io/iraya/](https://4444yash.github.io/iraya/)**

[![GitHub Pages Deployment](https://img.shields.io/badge/Deploy-GitHub%20Pages-success?style=for-the-badge&logo=github)](https://4444yash.github.io/iraya/)
[![Shopify OS 2.0](https://img.shields.io/badge/Shopify-Online%20Store%202.0-7AB55C?style=for-the-badge&logo=shopify)](https://shopify.dev/docs/themes)
[![US Market](https://img.shields.io/badge/Target%20Market-United%20States-blue?style=for-the-badge)](https://4444yash.github.io/iraya/)

---

## 🔗 Live Interactive Links for Stakeholders & Partners

Test and experience the live mobile-first storefront across all core conversion pages:

| Page | Live URL | Key Features to Test |
| :--- | :--- | :--- |
| 🏠 **Homepage** | **[Launch Homepage](https://4444yash.github.io/iraya/)** | All 10 homepage sections, editorial hero, mega-menu, category tiles, bestsellers with visible ratings, craft story, and gifting block. |
| 💍 **Product Page (PDP)** | **[Launch Product Page](https://4444yash.github.io/iraya/pdp.html)** | Scroll-snap image gallery, US sizing swatches, **Sticky Mobile Bottom Bar** (scroll down to trigger), interactive **US Size Guide Modal**, real-time delivery estimator, and spec accordions. |
| 📿 **Collection Page (PLP)** | **[Launch Collection Page](https://4444yash.github.io/iraya/plp.html)** | Responsive 2-column mobile grid, hover image swap (studio to on-model), slide-out **Faceted Filter Drawer**, and bottom SEO content block. |
| 🔨 **Our Craft & Story** | **[Launch Our Craft](https://4444yash.github.io/iraya/our-craft.html)** | Cuttack & Jaipur artisan lineages, *Tarakasi* wire filigree breakdown, ethical living wages, and 925 BIS Hallmarking standards. |

---

## 🎯 Brand Identity & Market Positioning

- **Brand:** **Iraya**
- **Product:** Artisanal, solid 925 sterling silver Indian handcrafted jewellery.
- **Target Audience:** Modern US mobile shoppers discovering via Instagram, TikTok, and Pinterest who seek heirloom craft without ornamental digital clutter.
- **US Trust Pillars:**
  - 🛡️ **925 Hallmarked Purity:** Every piece assayed and certified solid sterling silver.
  - 🌿 **Skin-Safe & Hypoallergenic:** 100% nickel-free and lead-free.
  - ✨ **Anti-Tarnish Shield:** Organic protective micro-coating for lasting shine.
  - 🇺🇸 **US Confidence:** Transparent USD pricing, pre-paid import duties, free shipping over $100, and 30-day domestic US returns.

---

## 📱 Mobile-First UX Architecture

Designed from 375px upward to prioritize one-handed thumb ergonomics:

1. **Sticky Mobile Action Bar (PDP):** An `IntersectionObserver`-powered persistent purchase bar docks at the bottom of the screen once the user scrolls past the main buy button.
2. **AJAX Slide-Over Cart Drawer:** Zero full-page reloads. Displays a real-time **Free US Shipping Progress Bar** ($100 threshold), in-cart gift wrapping with handwritten notes, and 1-click accelerated checkout badges (Shop Pay, Apple Pay, PayPal).
3. **Touch Targets:** All buttons, swatches, and navigation links maintain a minimum `48px × 48px` bounding box. Form inputs are locked at `16px` to prevent disorienting iOS Safari viewport zooming.
4. **Hardware-Accelerated Scroll-Snap:** High-speed native touch carousels without heavy 3rd-party library dependencies.

---

## 🎨 Design System & Visual Tokens

- **Typography:**
  - **Headlines & Titles:** *Cormorant Garamond* (Editorial luxury serif)
  - **Body, UI & Pricing:** *Plus Jakarta Sans* (Clean, legible modern sans-serif)
- **Palette:**
  - **Canvas:** `#FAF8F5` (Warm Alabaster)
  - **Text:** `#121212` (High-contrast deep charcoal, WCAG AA compliant >= 4.5:1)
  - **Accent:** `#C5A880` (Muted antique gold)
  - **Trust & Stock:** `#1F3B2B` (Deep heritage emerald)

---

## 🛍️ Shopify Online Store 2.0 Integration Guide

This repository contains the complete JSON-first Online Store 2.0 theme structure ready to link directly to Shopify Admin:

```
iraya/
├── assets/                       # CSS design tokens, JS controllers, brand photography
├── config/                       # Merchant settings schema (colors, typography, thresholds)
├── layout/theme.liquid           # Master HTML layout with JSON-LD schema & meta tags
├── locales/en.default.json       # US English copy strings
├── sections/                     # 15+ reorderable Liquid sections with JSON schema presets
├── snippets/                     # Micro-partials (product cards, sticky bar, prices, SVGs)
└── templates/                    # JSON-first templates (index, product, collection, cart, 404)
```

### Steps to Connect to Shopify Admin:
1. In **Shopify Admin**, navigate to **Online Store** → **Themes**.
2. Under **Theme library**, click **Add theme** → **Connect from GitHub**.
3. Select this repository: `4444yash/iraya`.
4. Connect branch:
   - `main` → Live Production Theme
   - `staging` → Unpublished Staging / QA Theme
5. Customize sections or upload new products directly through the Shopify Visual Theme Customizer.

---

## 📦 Local Development

To run or preview locally on your machine:

```bash
# Clone the repository
git clone https://github.com/4444yash/iraya.git
cd iraya

# Preview with any static server or Python
python -m http.server 3000

# Open in browser
# http://localhost:3000
```

---

© 2026 Iraya Studio LLC. Designed for the US Market. Handcrafted with reverence in India.
