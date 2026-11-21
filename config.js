// サイト全体の既定値。フォークして使う場合はここだけ書き換えてください。
// ブラウザで変更した設定はそのブラウザに保存され、こちらより優先されます（「既定に戻す」で戻ります）。
window.WIFI_CARD_CONFIG = {
  title: "Guest Wi-Fi",             // 見出し（社名など）。社名にするなら "Your Company, Inc."
  logo: "assets/logo.svg",         // ロゴ画像のパス。なければ null（Wi-Fi アイコンになります）
  logoMode: "alpha",               // "alpha" = 透過PNG/SVG、"light" = 白背景の画像
  logoLayer: "white",              // ロゴの色層: "white" / "a1" / "a2"
  ssid: "Guest WiFi",
  foot: "GUEST ACCESS",
  lang: "en",                      // ラベル: "en" / "ja"
  frame: false,                    // 外枠
  corner: true,                    // 右上のアクセント
  colors: { base: "#14161A", white: "#FFFFFF", a1: "#C8F25A", a2: "#FF5A1F" }
};
