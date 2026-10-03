# Moment web

The landing page for Moment, the app that pairs you with a friend at a random
moment and gives you both the same challenge: you each shoot your half, and
nobody sees a thing until both are in. Moment is built for iPhone
([moment-ios](https://github.com/FactoryLabsGroup/moment-ios)) and Android
([moment-android](https://github.com/FactoryLabsGroup/moment-android)).

Live at **https://factorylabs.app/moment**, from this repository's GitHub Pages
(every Pages site in the organization appears under `factorylabs.app/<repository>`).

A static site with no build step:

| File | What |
|---|---|
| `index.html` | The page. |
| `assets/styles.css` | Its look. |
| `assets/app.js` | The copy in both languages, and everything that moves. |
| `assets/scenes.js` | The drawn "photos" in the duos. |
| `privacy.html`, `support.html` | The privacy policy and support pages, both languages in each (`assets/page.css`, `assets/page.js`). |
| `404.html` | Not found. |
| `assets/og.jpg`, icons | The share image and the icons, made from the app's own icon. |

## Store links

Moment isn't live in the stores yet, so both badges say *Coming soon*. When it
is, set the links at the top of `assets/app.js`:

```js
var STORE = {
  appStore: 'https://apps.apple.com/app/id…',
  googlePlay: 'https://play.google.com/store/apps/details?id=app.imoment'
};
```

Every badge on the page becomes a download link, and the last section says
Moment is in the stores.

## Languages

English and Georgian. The page opens in Georgian when the browser prefers it,
remembers the reader's choice (`moment.lang`, shared with the privacy and
support pages), and takes `?lang=ka` or `?lang=en`. All the copy on the main
page is in `STRINGS` in `assets/app.js`. Where the app already has a Georgian
line (the tour, the username screen, Connections), the site uses it word for
word. Georgian is never uppercased, and painted words aren't set in italics.

## What the site is built from

The site says what the app says and looks the way the app looks:

- **Colours** are the app's: the charcoal canvas, the solids (`Whim` in
  `Moment/UI/Theme/Colors.swift`), the deck's ten hues (`DeckHues.swift`), and
  the same rule for ivory or near-black ink on each.
- **The mark** is drawn from `MarkGeometry` in `Brand.swift`: one circle cut in
  two, the left half a touch up.
- **The hero's mosaic** is the empty deck's (`HalvesMosaic.swift`): tiles that
  turn a quarter now and then, and a tap that blows them apart while the line
  under them changes.
- **How it works** plays the intro tour (`docs/ANDROID.md` § 1 in moment-ios):
  the draw, the shot, the unlock.
- **The challenges** are real ones from the server's deck, with their framing
  and tip, painted by the deck's colour rule. The Georgian is ours: the server
  sends challenges in English.
- **The filters** use the app's colour matrices, vignettes and scanlines
  (`docs/FILTERS.md` in moment-android).
- **Privacy** claims come from the server (moment-backend `docs/SECURITY.md`,
  the store and the backup script). Change the policy when they change.

Real duos are private, so the page never shows one: every photo is drawn.

## Running locally

```bash
python3 -m http.server 8123
```

and open http://localhost:8123.
