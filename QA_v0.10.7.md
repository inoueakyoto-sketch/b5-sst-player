# B5 SST Player v0.10.7 QA

## 対応目的
1. ボタンと本文・ポイント文の重なりを防ぐ
2. ナレーションと登場人物のセリフを本文色でも区別する
3. 画面に対して小さすぎる文字を改善する

## 実装内容
- `.primary / .ghost / .choice / .library-btn` を内容に応じて高さが伸びる構造へ変更。
- 選択肢は「番号」「本文」の2列グリッド化。
- 既読表示 `みた` は絶対配置をやめ、本文と重ならない通常フローへ変更。
- `.task-page-nav` をグリッド化し、ページ表示と進行ボタンが互いを覆わない構造へ変更。
- B5進捗コンパスとコーチパネル上端の間隔を拡大。
- ポイント、言い方の例、振り返り、エンディング、反応文などの本文サイズを引き上げ。
- 高さ520px以下では8〜10pxまで縮小する旧設定を上書きし、本文は概ね13〜18px以上を維持。必要時はパネル内スクロールを使用。
- ナレーション本文：`#8FD5FF`
- 登場人物のセリフ本文：`#FFFFFF`
- 心の声本文：`#E4CFFF`
- モデリング内のナレーション／セリフ／心の声にも同じ区別を適用。

## Static QA
- `game.js`: syntax PASS
- `story-loader.js`: syntax PASS
- `player.js`: syntax PASS
- `ruby.js`: syntax PASS
- runtime HTML IDs: 123 / unique 123
- game.js required runtime IDs: 120 / missing 0
- duplicate runtime IDs: 0

## Browser QA
Chromium 144, Story004 v0.4.11相当の自己完結QAデータを使用。

### 1365 x 768
以下を含む全フローを実走：
- SST1〜5
- ねらい2ページ
- ナレーション／セリフ／心の声
- 状況確認
- どうしたい？
- 5択
- 相手の反応
- 観察
- 振り返り2ページ
- モデリング全ページ
- 再練習
- SST間transition
- 確認編5問
- エンディング5ページ

DOMの可視ボタンと主要本文ブロックの矩形交差検査：**重なり 0件**。

### 1024 x 500
代表的な「モデリング／ポイント」画面を確認。
- ポイント本文 computed font-size: **14px**
- ボタンとポイント本文の矩形交差：**0件**
- 上部進捗UIとコーチパネルの視覚的衝突：なし

### ナレーション／セリフ色
実ブラウザ computed color:
- ナレーション：`rgb(143, 213, 255)`
- 登場人物のセリフ：`rgb(255, 255, 255)`

## 代表スクリーンショット
- `QA_v0.10.7_goal_page1.png`
- `QA_v0.10.7_goal_page2.png`
- `QA_v0.10.7_narration.png`
- `QA_v0.10.7_dialogue.png`
- `QA_v0.10.7_model_points.png`
- `QA_v0.10.7_model_points_page3.png`
- `QA_v0.10.7_model_points_1024x500.png`

## 互換性
`.sststory` スキーマは変更していない。v0.10.6で読み込める既存Storyをそのまま利用できる設計。
