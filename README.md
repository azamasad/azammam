# Azam Mam

The site of Quddusia Azam, English teacher, writer, and painter, in Ranchi. It will live at [azammam.com](https://azammam.com).

Writing and paintings are the front of the site. The teaching page is a plain record of her classroom work, for anyone who wants to invite her to teach.

## Preview

```bash
npm install
npm run dev
```

Open the address printed in the terminal. `npm run build` writes the finished site into `dist/`.

## Add a piece of writing

Create a file in `src/content/writing/`. The name becomes the address: `morning-assembly.md` is published at `/writing/morning-assembly`.

```md
---
title: Morning assembly
description: One sentence for the index.
date: 2026-10-19
---

The essay, in her words.
```

`date` is optional. To point at something already published elsewhere, add `sourceName` and `sourceUrl`. If the file also has paragraphs, those are shown on the site and the link is kept as “First posted on…”.

```md
---
title: Missing the Pyramids
description: A piece posted on her Facebook page.
sourceName: Facebook
sourceUrl: https://www.facebook.com/quddusia.azam/posts/missing-the-pyramids/28244002621889547/
---
```

Paste the full text under the `---` when you want it to live on the site as well as on Facebook.

## Add her photograph

Save a clear portrait as `public/portrait.jpg`. The About page shows it in the small frame. Until that file is there, the frame stays empty.

## Hang a painting

1. Put a clear photograph in `public/paintings/`, for example `public/paintings/lake.jpg`.
2. Create `src/content/paintings/lake.md`:

```md
---
title: Lake
image: /paintings/lake.jpg
alt: A watercolour of a lake at dusk
medium: Watercolour
year: "2018"
caption: A line about the picture.
date: 2018-01-01
---
```

`medium`, `year`, `caption`, `alt`, and `date` can be left out. `title` and `image` are required. Newer dates are hung first.

## Publish

The site is a folder of files. `npm run build` writes them into `dist/`. No server and no database.

GitHub Actions deploys `dist/` when `main` changes. The domain is at GoDaddy and still shows a parked page. azammam.com opens after these steps, in this order:

1. In the GitHub repo, open Settings, then Pages. Under Build and deployment, set Source to GitHub Actions.
2. Merge the site into `main`. The workflow publishes it. Check that https://azamasad.github.io/azammam/ loads.
3. On that same Pages screen, under Custom domain, enter `azammam.com` and save. Wait until the DNS check is offered.
4. In GoDaddy DNS for azammam.com, remove the parked A records and add:

| Type | Name | Value |
| --- | --- | --- |
| A | `@` | `185.199.108.153` |
| A | `@` | `185.199.109.153` |
| A | `@` | `185.199.110.153` |
| A | `@` | `185.199.111.153` |
| CNAME | `www` | `azamasad.github.io` |

GitHub then issues the certificate. DNS can take a few hours. Do the GoDaddy change only after the custom domain is saved on GitHub, so the name is not left pointing at an unclaimed host.
