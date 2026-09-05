# B5 SST Player v0.10.0 → v0.10.1 更新手順

今回の変更は「ストーリー開始後でも一覧へ戻れるようにする」ための Player 側修正だけです。
ストーリー内容、SST構成、`.sststory` 形式は変更していません。

## 変更対象
- `runtime.html`
- `styles.css`

## 変更内容
- ストーリー実行中、上部に `← いちらんにもどる` を常時表示
- 小さい横画面では `← いちらん` と短く表示
- 押したときに確認ダイアログを表示
- 「戻る」を確定したときだけストーリー一覧へ戻る
- 誤操作防止のため「現在位置は保存されない」ことを確認画面で明示

## GitHub への反映
既存の `b5-sst-player` フォルダで `runtime.html` と `styles.css` をこの版で上書きした後、VS Code のターミナルで次を実行します。

```bash
git add .
git commit -m "Add return to story list"
git push
```

GitHub Pages は通常、自動で再デプロイされます。
