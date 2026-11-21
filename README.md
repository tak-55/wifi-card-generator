# Wi-Fi カードジェネレーター

会議室などに置く Wi-Fi 案内カードを作る静的サイトです。パスワード生成、Wi-Fi 接続用 QR、紙印刷、3Dプリント用モデル（3MF / STL）の書き出しまでをブラウザ内だけで行い、入力内容はどこにも送信しません。

## GitHub Pages で公開する

1. このフォルダの中身をリポジトリのルートに置いて push します。
2. リポジトリの Settings → Pages で、Source を「Deploy from a branch」、Branch を `main` / `/ (root)` にします。
3. 数分後に `https://<ユーザー名>.github.io/<リポジトリ名>/` で開けます。

## 自社向けにする

- `assets/logo.svg` にロゴを置きます（PNG なら `config.js` の `logo` のパスを変更）。単色の透過 SVG/PNG が最もきれいに出ます。
- `config.js` で見出し・既定の SSID・色・ラベル言語などを設定します。
- 画面からロゴを読み込むこともでき、その場合はそのブラウザだけに保存されます。

## 構成

- `index.html` … アプリ本体
- `config.js` … サイトの既定値
- `vendor/qrcode.js` … QR エンコーダ（qrcode-generator 1.4.4, MIT）
- `assets/` … ロゴなど

フォントは Google Fonts（IBM Plex Sans JP / IBM Plex Mono）を読み込みます。読み込めない環境では OS のフォントで代替されます。

## 3Dプリント

- フラット: 色が上面に埋め込まれ、表面が平ら。AMS などのマルチカラー向け。
- 浮き彫り: 「色替え用STL」を使い、板厚の高さでフィラメント交換すると2色になります。
- 3MF は PrusaSlicer 形式のパーツ情報付きです。パーツが分かれないスライサーでは「色別STL」を同時に読み込んでください。
- パスワードはリポジトリに保存しないでください。毎回ブラウザで生成する前提です。
