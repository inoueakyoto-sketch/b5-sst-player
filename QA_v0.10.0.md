# B5 SST Player v0.10.0 QA

## 対象
- Player: `b5-sst-player-v0.10.0`
- Story pack: `story-001_yuuto-monday_v0.9.0.sststory`
- 基準: `00_B5_SST_STORY_GAME_GUARDRAILS_v1.2.md`

## 構造監査
- PASS: Player本体とstory-001を物理分離。
- PASS: story pack内に `manifest.json` / `story.json` / `assets/*` のみ。
- PASS: story pack内にHTML / JavaScript / SVGなし。
- PASS: SST 5場面。
- PASS: 主課題 5択 × 5場面 = 25選択肢。
- PASS: 生活のつなぎ 4場面。
- PASS: 本編終了後の確認課題 5セット、合計15選択肢。
- PASS: 各SSTにモデリング・修復候補・再練習データあり。
- PASS: 現実ミッションあり。
- PASS: 参照画像欠落0。
- PASS: 主課題の5結果画像は各SST内で重複0。
- PASS: 子ども向けstory.jsonの未ルビ漢字0（内部ID/パス等を除外）。

## 外部分離による内容変更監査
v0.9.0の `SST_STORY` とstory-001の教材データを比較した。
画像拡張子のPNG→WebP、外部パック用meta追加を正規化すると、**教材本文・選択肢・SST順序・フィードバック・修復・モデリング・確認課題・現実ミッションは完全一致**。

結果: PASS

## 容量
- 元のPNG画像35枚: 約68.1 MB
- WebP画像35枚（品質85、解像度維持）: 約4.4 MB
- `.sststory` 全体: 約4.5 MB
- Player本体: 約0.25 MB（story packを含まない）
- 全35画像で元PNGとWebPの縦横ピクセル数一致。

## セキュリティ・バリデータ
実際の `story-loader.js` をNode上で実行して確認。

- PASS: 正常なstory-001を受理。
- PASS: 4択に壊したデータを「主課題は5択必要」で拒否。
- PASS: ルビなし漢字を混入したデータを拒否。
- PASS: `evil.js` を追加したパックを「許可されていないファイル形式」で拒否。
- PASS: manifest記載SHA-256をstory.jsonおよび全assetで検証。
- PASS: `..`、絶対パス、バックスラッシュ等を拒否する実装。
- PASS: パックサイズ、展開容量、ファイル数に上限あり。

## JavaScript
`node --check`:
- PASS: `ruby.js`
- PASS: `game.js`
- PASS: `story-loader.js`
- PASS: `player.js`

## Player UI
管理Chromiumはlocalhost / file URL / 外部URLを組織ポリシーで遮断するため、通常URLからの実ブラウザ統合試験は実行できなかった。
ただし `Page.setDocumentContent` によるPlayer一覧画面の1365×768レンダリングは確認済み。

**重要:** IndexedDBを含む「実ファイル選択 → 保存 → iframeでゲーム起動」のPC/iPad/スマホ実機試験は、Firebase等の実URLへ配置後に実施する必要がある。現時点では実機確認済みとは扱わない。

## 判定
**External Story Architecture Candidate: PASS（構造・データ・バリデータ）**

ただし、クラウド実URL上でのPC / iPad横 / スマホ横の実ファイル読み込み試験が残るため、正式運用版とはしない。
