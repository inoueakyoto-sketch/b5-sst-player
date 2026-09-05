# B5 SST Player v0.10.0

## 今回の変更
- アプリ本体とストーリーを分離。
- Google Drive等からダウンロードした `.sststory` を「ストーリーをついか」から読み込み可能。
- 読み込み時にB5 SSTガードレールを自動検査。
- 読み込み済みパックはIndexedDBへ保存。
- パックからHTML/JS/SVG等の実行可能コンテンツを拒否。
- 第1話を `story-001_yuuto-monday_v0.9.0.sststory` として分離。
- 第1話の画像をWebP品質85へ変換し、内容・解像度を維持したまま配布容量を削減。

## クラウド配置
`b5-sst-player-v0.10.0/` の内容をFirebase Hosting等へ配置します。

## 利用者
1. Google Driveから `.sststory` をダウンロード。
2. B5 SST Playerを開く。
3. 「ストーリーをついか」を押す。
4. ダウンロードしたファイルを選択。
5. 自動検査PASS後、一覧から「はじめる」。

## 第1話パック
- ファイル: `story-001_yuuto-monday_v0.9.0.sststory`（Playerとは別ファイルとして配布）
- 元PNG合計: 68.1 MB
- `.sststory`: 4.4 MB

## 最上位ルール
`00_B5_SST_STORY_GAME_GUARDRAILS_v1.2.md` を優先してください。

## Firebase Hosting
`firebase.json` を同梱しています。PlayerフォルダだけをHostingへ配置し、`.sststory` はGoogle Drive等で別配布してください。
