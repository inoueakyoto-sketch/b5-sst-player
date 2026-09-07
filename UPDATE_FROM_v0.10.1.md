# B5 SST Player v0.10.1 → v0.10.2 更新手順

今回の変更は第1話を見やすくするPlayer側UI修正です。ストーリー内容は変更していません。

## 上書きするファイル
- `runtime.html`
- `game.js`
- `styles.css`

## GitHub Pagesへの反映
現在の `b5-sst-player` フォルダで上記3ファイルをv0.10.2版へ上書きしたあと、VS Codeのターミナルで実行します。

```bash
git add .
git commit -m "Improve SST explanation and reaction flow"
git push
```

GitHub Pagesは通常、自動で再デプロイされます。
