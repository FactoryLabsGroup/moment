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

Moment isn't live in the stores yet, so both halves of the store pair say
*Coming soon*. When it is, set the links at the top of `assets/app.js`:

```js
var STORE = {
  appStore: 'https://apps.apple.com/app/id…',
  googlePlay: 'https://play.google.com/store/apps/details?id=app.imoment'
};
```

Each half of the pair (App Store in persimmon, Google Play in cobalt, the mark
on the seam between them) becomes a download link everywhere on the page, and
the last section says Moment is in the stores.

## Languages

English and Georgian. The page opens in Georgian when the browser prefers it,
remembers the reader's choice (`moment.lang`, shared with the privacy and
support pages), and takes `?lang=ka` or `?lang=en`. All the copy on the main
page is in `STRINGS` in `assets/app.js`. Where the app already has a Georgian
line (the tour, the username screen, Connections), the site uses it word for
word. Georgian is never uppercased, and painted words aren't set in italics.

## What the site is built from

The page is built the way the app is: solid colour on a charcoal wall, and
everything decorative cut from one circle. It says what the app says and
looks the way the app looks:

- **Colours** are the app's (`Whim` in `Moment/UI/Theme/Colors.swift`), and
  they mean what they mean there: persimmon is you, cobalt your partner,
  saffron waiting on somebody, emerald done. The three steps of a duo are
  posters in those colours, in that order. Ink on every solid is ivory or
  near-black, whichever contrasts more.
- **Type** follows `Typography.swift`: the serif carries the moments, the sans
  says what the page says about itself, and the mono names things in spaced
  capitals, as the tab bar does.
- **The mark** is drawn from `MarkGeometry` in `Brand.swift`: one circle cut in
  two, the left half a touch up. The hero sets it large and cuts the headline,
  the lede and the store pair along the same seam. Now and then (or on a tap)
  the halves develop a duo.
- **The posters' figures** are the app's ornaments (`CardOrnament`): a
  half-disc, a quarter-disc or a circle pressed into the colour at a whisper.
- **The ping** is the duo's push (`DuoMessage` in moment-backend) and its
  clock, a ring that empties with it.
- **The moment** is the unlock's spread (`UnlockedScreen`): the colour above
  the fold, the pair across it, the seam with the mark in a dark disc, and the
  burst (`HalvesBurst`).
- **The deck** deals real challenges from the server, with their framing, tip
  and filter, painted by the deck's colour rule (`DeckHues.swift`). The
  Georgian is ours: the server sends challenges in English.
- **The wall** hangs prints the way the gallery does (`GalleryScreen`): two
  halves on a mat of one colour, every other column dropped. Filters use the
  app's colour matrices (`docs/FILTERS.md` in moment-android).
- **The end** is the empty Friends tab (`PoolArt`): your half, an empty one,
  and everyone who could fill it.
- **Privacy** claims come from the server (moment-backend `docs/SECURITY.md`,
  the store and the backup script). Change the policy when they change.

Real duos are private, so the page never shows one: every photo is drawn
(`assets/scenes.js`).

## Running locally

```bash
python3 -m http.server 8123
```

and open http://localhost:8123.
