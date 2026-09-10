# B5 SST Player v0.10.6 QA

## Static QA
- `game.js` syntax: PASS
- `story-loader.js` syntax: PASS
- `player.js` syntax: PASS
- `ruby.js` syntax: PASS
- `game.js` referenced runtime IDs: **120 / 120 found**
- duplicate runtime IDs: **0**

## Focus-density rule
基本ルール：**1画面1タスク、最大2タスク**。

### SST開始前
- Page 1: 「これから学ぶこと」＋「テーマ」 = 2 blocks
- Page 2: 「なぜ大切？」＋「将来どこで使う？」 = 2 blocks
- PASS

### 振り返り
- Page 1: 「自分がしたかったこと」＋「相手に起きたこと」 = 2 blocks
- Page 2: 学習ポイント = 1 block
- PASS

### モデリング
Story004 SST1 の3ポイントで実ブラウザ確認。
- Page 1: やりとりの見本 = 1 task
- Page 2: ポイント1・2 = 2 items
- Page 3: ポイント3 = 1 item
- Page 4: 言い方の例2つ = 2 items
- PASS

### 反応画面
- 選択内容の重複再掲を非表示
- 補助的なlook-cueを非表示
- 相手の反応を中心に1タスク化
- PASS

### 確認編導入
- 5つのスキル一覧を同時表示しない
- 確認編の説明＋開始操作のみ
- PASS

### エンディング
- Page 1: SST1-2 = 2 cards
- Page 2: SST3-4 = 2 cards
- Page 3: SST5 = 1 card
- Page 4: 将来につながる力 = 1 task
- Page 5: 現実ミッション選択 = 1 task
- PASS

## Browser full-flow QA
Chromium DevTools Protocol、1365×768。Story004 v0.4.11 相当のデータを実際の `runtime.html + styles.css + ruby.js + version.js + game.js` に注入。

- SST1〜SST5 本編を完走: PASS
- 各モジュールの2ページねらい: PASS
- 状況確認→どうしたい→選択→反応→観察→2ページ振り返り→モデリング→再練習: PASS
- SST間transition: PASS
- 確認編5問: PASS
- エンディング5ページ: PASS
- 最終時に表示されるmain section: `endingPanel` のみ
- runtime errors: **0**
- reported Player version: **0.10.6**

## Representative screenshots
- `QA_v0.10.6_focus_goal_page1.png`
- `QA_v0.10.6_focus_goal_page2.png`
- `QA_v0.10.6_focus_reflect_page1.png`
- `QA_v0.10.6_focus_reflect_page2.png`
- `QA_v0.10.6_focus_model_page2.png`
- `QA_v0.10.6_focus_model_page3.png`
- `QA_v0.10.6_focus_ending_page1.png`
- `QA_v0.10.6_focus_ending_page5.png`

## Compatibility note
v0.10.6はPlayer側の表示分割のみ。`.sststory` のスキーマや教材データを変更していないため、v0.10.5で読み込める既存Storyパックの互換性を維持する設計。
