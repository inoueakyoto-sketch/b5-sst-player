# B5 SST Player v0.10.2 QA

## 変更範囲
Playerの表示・進行のみ。第1話のSST内容、選択肢、セリフ本文、ストーリーパック形式は変更していない。

## ユーザー指定への対応
1. SSTのねらい表示を約2段階大きくした。
2. コーチ説明パネルを拡大した。
3. 状況確認画面の「つぎへ」ボタンに上余白を追加し、フィードバック枠との接触・重なりを防いだ。
4. 選択後の相手の反応をSSTコーチ中央パネルから分離し、物語画面下部のセリフ領域へ移した。
5. 相手の反応を確認した後に、別画面で観察・解説へ進む。
6. 立て直し後の相手の反応も同様に下部へ表示する。

## 静的確認
- `showReaction()` は `story` UI mode を使用。
- `showRepairResult()` は `story` UI mode を使用。
- `showObserve()` / `showReflect()` / `showModel()` は従来どおり `coach` UI mode。
- `#situationNext` / `#observeNext` に明示的な上余白あり。
- goal/situation/observe/reflect/model に `coach-large-panel` を付与。

## 非変更事項
- 第1話 story.json
- 5つのSST順序
- 5択内容
- 修復内容
- 本編後の振り返り・確認編構成
- `.sststory` スキーマ
