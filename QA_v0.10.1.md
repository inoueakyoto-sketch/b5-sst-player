# B5 SST Player v0.10.1 QA

## Change scope
- Runtime navigation only.
- Added a persistent, explicit `← いちらんにもどる` button during story play.
- Added confirmation before leaving a story.
- Current in-story position is not persisted; the dialog states this before exit.
- No story/SST content or `.sststory` format changes.

## Static checks
- `runtime.html` contains exactly one `libraryExitBtn`.
- Exit button posts `b5-sst-exit` to the Player shell when embedded.
- Standalone fallback navigates to `index.html`.
- Existing Player shell still listens for `b5-sst-exit`.
- Compact landscape label switches to `← いちらん`.

## Browser checks
See packaged QA evidence generated for v0.10.1.
