# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## 言語設定

**重要**: このプロジェクトでは、Claude Codeは必ず日本語で回答してください。技術用語は必要に応じて英語のまま使用可能です。

## プロジェクト概要

「OGT！人才」（OGT Jinzai）の企業向け採用担当者をターゲットとした日本語ランディングページです。本番運用中のTeam-Bバージョン。

### 4つの人材層
- **Senior Soul（シニア・ソウル）**: 50〜60代の現役志向ベテラン層
- **Leading Ladies（リーディング・レディズ）**: リーダーシップの素質を持つ女性人材
- **Top Guns（トップ・ガンズ）**: 若くして卓越した能力を持つ人材
- **Language Lions（ランゲージ・ライオンズ）**: 複数言語を操るグローバル人材

## 主要コマンド

```bash
# ローカル開発サーバー起動
python -m http.server 8000
# または
npx serve

# ビルド不要（純粋な静的サイト）
# デプロイはNetlifyへの直接アップロードまたはGit連携
```

## コードアーキテクチャ

### 技術スタック
- **HTML**: セマンティックHTML5、アクセシビリティ対応（ARIA属性）
- **CSS**: カスタムプロパティによるデザインシステム、モバイルファースト設計
- **JavaScript**: GSAP使用（CDN）、バニラJSメイン
- **フォーム**: Netlify Forms（サーバーサイド処理不要）
- **アナリティクス**: Google Analytics (G-VGLK5ZNC4B)

### ファイル構成
```
/
├── index.html      # メインLP（構造化データ、OGPタグ含む）
├── thanks.html     # フォーム送信完了ページ
├── css/
│   └── style.css   # デザインシステム実装（CSS変数、レスポンシブ）
├── js/
│   └── main.js     # インタラクション（ナビ、フォーム検証、アニメーション）
└── assets/         # 人材カテゴリー画像
    ├── senior_soul.png
    ├── leading_ladies.png
    ├── top-guns_v3.png
    └── language_lions.png
```

### CSS設計パターン
- **CSS変数**: 色、間隔、タイポグラフィの一元管理
- **BEM命名**: 主要コンポーネントで使用
- **ユーティリティクラス**: コンテナ、グリッドレイアウト
- **レスポンシブ**: 768px、1024pxのブレークポイント

### JavaScript機能
1. **モバイルナビゲーション**: ハンバーガーメニューとフォーカス管理
2. **フォームバリデーション**: リアルタイム検証とエラー表示
3. **スムーススクロール**: アンカーリンクの滑らかな遷移
4. **3Dホバーエフェクト**: GSAPによるカード回転アニメーション
5. **パフォーマンス監視**: Intersection Observerでの遅延読み込み

### Netlify Forms実装
```html
<form data-netlify="true" name="contact" action="thanks.html">
  <!-- 必須: data-netlify="true"とname属性 -->
</form>
```

### アクセシビリティ対応
- スキップリンク実装
- 適切なARIA属性とrole属性
- キーボードナビゲーション対応
- フォーカス表示の明確化

## 重要な制約事項

1. **言語**: 全コンテンツは日本語（技術用語除く）
2. **ブラウザ対応**: モダンブラウザ（IE非対応）
3. **パフォーマンス**: 画像は既に最適化済み
4. **外部依存**: GSAP（CDN）、Google Fonts、Google Analytics
5. **フォーム送信**: Netlifyのサーバーサイド処理（バックエンド実装不要）

## 変更時の注意点

- **デザイン変更**: CSS変数を優先的に調整
- **コンテンツ更新**: SEOメタタグも同時に更新
- **画像差し替え**: assetsフォルダ内で同名ファイルを置換
- **フォーム項目追加**: Netlify管理画面での通知設定も必要
- **アニメーション調整**: GSAPの互換性とパフォーマンスに注意

## デバッグとテスト

- **レスポンシブ確認**: Chrome DevToolsのデバイスエミュレータ使用
- **フォームテスト**: Netlifyのプレビューデプロイで実施
- **アクセシビリティ**: Chrome Lighthouse、axe DevTools推奨
- **パフォーマンス**: PageSpeed Insightsでの測定