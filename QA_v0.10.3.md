# B5 SST Player v0.10.3 QA

Date: 2026-09-07
Base: `b5-sst-player-v0.10.2`
Test stories:
- `STORY_001_YUUTO_MONDAY_v1.0.0-candidate.sststory`
- `STORY_002_YUUTO_POSTER_v1.4.0-assetkit-candidate.sststory`

## Requested changes

### 1. Player version information
PASS.

- Library screen contains a visible Player version badge.
- Runtime screen contains `Player v0.10.3`.
- Runtime also shows the loaded Story version, e.g. `Story v1.4.0-assetkit-candidate`.
- Player version has a single source of truth in `version.js`.

### 2. SST learning objective prominence
PASS.

The SST start screen was reorganized into this priority order:

1. `これから学ぶこと` -- primary, large warm card.
2. SST theme/title -- secondary heading.
3. `なぜ大切？` and `将来どこで使う？` -- supporting information.
4. `このねらいで場面を見る` -- action button.

Measured in Chromium with Story 002 SST1:

- 1365x768: learning-objective text = about 37.54 px; SST theme = about 30.71 px.
- 1024x500 landscape: learning-objective text = 21 px.
- 1024x500: goal panel `scrollHeight == clientHeight` (no clipping/scroll required in the tested screen).

Visual evidence:
- `QA_v0.10.3_goal_1365x768.png`
- `QA_v0.10.3_goal_1024x500.png`

## Existing generic-player issue found during QA
PASS after fix.

The old runtime contained Story-001-specific fixed copy. This would display incorrect information when Story 002 was loaded.

v0.10.3 now:
- derives the episode number from `meta.storyId` for the top bar and start kicker;
- keeps the Story-001 route strip only for `story-001` and hides it for later stories;
- replaces the fixed `ゆうとの月曜日...` review heading with a generic review heading.

Regression check:
- Story 001 -> episode 1; Story-001 route remains visible.
- Story 002 -> episode 2; Story-001 route is hidden.

## Compatibility / integrity
PASS.

JavaScript syntax:
- `version.js`: PASS
- `player.js`: PASS
- `game.js`: PASS
- `story-loader.js`: PASS

HTML ID audit:
- `index.html`: no duplicate IDs.
- `runtime.html`: no duplicate IDs.

Unchanged from v0.10.2 (SHA-256 identical):
- `story-loader.js`
- `ruby.js`
- `vendor/jszip.min.js`
- `STORY_PACKAGE_FORMAT_v1.0.md`
- `00_B5_SST_STORY_GAME_GUARDRAILS_v1.2.md`

Therefore the `.sststory` package format, loader validation rules, persistence format, and guardrails are unchanged by v0.10.3.

## Browser-test environment note
The managed Chromium environment blocks direct navigation to localhost/file URLs by organization policy. Runtime visual QA was therefore executed by loading the real `runtime.html`, `styles.css`, `ruby.js`, `version.js`, and `game.js` into Chromium as a standalone document and injecting the real Story 001/002 JSON plus their actual intro assets. This tests the real runtime code and responsive CSS without altering production files.

## Result
**v0.10.3 candidate: PASS for the requested UI changes and the Story-001 fixed-copy regression found during QA.**
