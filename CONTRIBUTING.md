# Contributing

## Making changes

All source code is in `app/src/`. The built output that gets served by GitHub Pages lives in `docs/`.

**You normally only need to edit `app/src/` and push.** A GitHub Actions workflow
(`.github/workflows/build.yml`) rebuilds `docs/` and commits it back to your branch
automatically, so the live site stays in sync with the source.

## Room availability

Room availability is controlled per property in the corresponding source file:

- **Vlamingenstraat**: `app/src/Vlam.js` — `kamerAvailable` array
- **Sluis**: `app/src/Sluis.js` — `kamerAvailable` array

Each index corresponds to a room number (index 0 = room 1, index 7 = room 8, etc.).
Set to `true` for available, `false` for unavailable (verhuurd).

That single boolean drives three things: the ✅/❌ icon in the room list, the
"(verhuurd)" label on the room detail, and whether the photo carousel renders.

## Workflow

1. Edit the source file in `app/src/`
2. Commit and push to a branch
3. CI builds and commits `docs/` back to that branch
4. Open a PR into `main` and merge

GitHub Pages serves directly from the `docs/` folder on `main`.

## Building locally (optional)

```bash
cd app
npm install       # first time only
npm run build     # outputs to ../docs
```

If you build locally and commit `docs/` yourself, read the two caveats below —
they are the reason CI exists.

### Caveat 1: react-snap needs Chrome

The `postbuild` step runs `react-snap` to pre-render pages. It requires headless
Chromium and fails on machines missing its shared libraries (typically
`libXss.so.1`). The main build output is still valid, but the pre-rendered
snapshots (`docs/vlam/index.html`, `docs/sluis/index.html`, `docs/404.html`) are
left deleted or stale. Restore them with:

```bash
git checkout HEAD -- docs/404.html docs/sluis/index.html docs/vlam/index.html
```

### Caveat 2: the bundle hash changes every build

Each build emits a JS bundle with a content-hash filename (e.g. `main.92f43c53.js`).
The pre-rendered pages hardcode that filename. If you restored them per caveat 1,
they still point at the *old* bundle, which no longer exists — navigation to
`/vlam/` and `/sluis/` then breaks on the live site with a blank page.

Update all three:

```bash
sed -i 's/main\.<old-hash>\.js/main.<new-hash>.js/g' \
  docs/vlam/index.html docs/sluis/index.html docs/404.html
```

The new hash is in `docs/index.html` or `docs/asset-manifest.json`.

CI runs on `ubuntu-22.04` with the Chromium libraries installed, so react-snap
succeeds there and both caveats resolve themselves.
