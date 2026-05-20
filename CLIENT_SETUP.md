# Client Setup Guide

Use this guide when you want to reuse this website for a new restaurant client.

Do not redesign the layout.
Do not change the animations.
Only replace the client content.

## Step 1: Replace Images

Open this folder:

```txt
src/assets/client/
```

Replace these image files with the new client's images:

- `logo.png`
- `hero.png`
- `gallery1.png`
- `gallery2.png`
- `gallery3.png`

Keep the same file names.

For example, if you have a new hero image, rename it to:

```txt
hero.png
```

Then put it inside:

```txt
src/assets/client/
```

## Step 2: Edit Website Content

Open this file:

```txt
src/data/siteConfig.ts
```

This is the main file for changing restaurant information.

Edit these values:

- `restaurantName`
- `heroTitle`
- `heroSubtitle`
- `phone`
- `address`
- `menuItems`
- `colors`

## What Each Part Means

`restaurantName` is the restaurant name shown on the website.

`heroTitle` is the big title on the first screen.

`heroSubtitle` is the small text under the big title.

`phone` is the phone number and WhatsApp link.

`address` is the restaurant address and map link.

`menuItems` is the food menu.

`colors` controls the main website colors.

## Important Rule

Do not redesign the website.

Only change:

- text
- images
- phone number
- address
- menu items
- colors

The layout and animations should stay the same.
