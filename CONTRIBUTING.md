# Contributing

## Making changes

All source code is in `app/src/`. The built output that gets served by GitHub Pages lives in `docs/`.

**Any change to the source must be followed by a rebuild** — otherwise the live site won't reflect the update.

## Room availability

Room availability is controlled per property in the corresponding source file:

- **Vlamingenstraat**: `app/src/Vlam.js`, line 54 — `kamerAvailable` array
- **Sluis**: `app/src/Sluis.js` — `kamerAvailable` array

Each index corresponds to a room number (index 0 = room 1, index 7 = room 8, etc.). Set to `true` for available, `false` for unavailable (verhuurd).

## Building

```bash
cd app
npm install       # first time only
npm run build     # outputs to ../docs
```

The `postbuild` step runs `react-snap` to pre-render pages. This requires Chrome and will fail in environments without it (e.g. CI containers missing `libXss.so.1`). The build output in `docs/` is still valid — only the pre-rendered snapshots (`docs/vlam/index.html`, `docs/sluis/index.html`, `docs/404.html`) won't be regenerated. Restore them from git if they get deleted:

```bash
git checkout HEAD -- docs/404.html docs/sluis/index.html docs/vlam/index.html
```

**Important:** Each build produces a new JS bundle with a content-hash filename (e.g. `main.92f43c53.js`). The pre-rendered pages embed a hardcoded reference to the old bundle name. After restoring them from git, update the bundle reference in all three files:

```bash
sed -i 's/main\.<old-hash>\.js/main.<new-hash>.js/g' \
  docs/vlam/index.html docs/sluis/index.html docs/404.html
```

The new hash is visible in `docs/index.html` or `docs/asset-manifest.json`. Failure to do this breaks navigation to `/vlam/` and `/sluis/` on the live site.

## Workflow

1. Edit source files in `app/src/`
2. Run `npm run build` from the `app/` directory
3. If react-snap fails due to missing Chrome, restore the pre-rendered files (see above)
4. Commit both the source change and the updated `docs/` folder
5. Push and open a PR into `main`

GitHub Pages serves directly from the `docs/` folder on `main`.
