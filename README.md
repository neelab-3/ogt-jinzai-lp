# OGT！人才 ランディングページ

優秀な人材採用の新たな選択肢 - 従来の採用市場では見落とされがちな4つの貴重な人材層に焦点を当てた人材紹介サービス

## 概要

OGT！人才は、企業の採用課題を解決する革新的な人材紹介サービスです。Senior Soul、Leading Ladies、Top Guns、Language Lionsという4つの専門カテゴリーで、質の高い人材を厳選して紹介します。

## 主な特徴

- 🎯 **厳選主義** - 大量のCVではなく、真に優秀な人材のみを紹介
- 📋 **包括的サポート** - 採用前の戦略立案から入社後100日間の定着支援まで
- 🌐 **4つの専門領域** - それぞれの人材層に特化した専門的なアプローチ
- 💡 **コンサルティング価値** - 単なる人材紹介を超えた戦略的パートナーシップ

## 技術仕様

### 使用技術

- HTML5 (セマンティック、アクセシビリティ対応)
- CSS3 (カスタムプロパティ、レスポンシブデザイン)
- Vanilla JavaScript + GSAP (アニメーション)
- Netlify Forms (フォーム処理)

### 動作環境

- モダンブラウザ（Chrome、Firefox、Safari、Edge）
- レスポンシブ対応（スマートフォン、タブレット、デスクトップ）

## セットアップ

### 必要なもの

- 静的ファイルサーバー（Python、Node.js等）
- モダンブラウザ

### 開発環境の起動

```bash
# Python を使用する場合
python -m http.server 8000

# Node.js を使用する場合
npx serve

# ブラウザでアクセス
# http://localhost:8000
```

## ディレクトリ構成

```
.
├── index.html          # メインランディングページ
├── thanks.html         # フォーム送信完了ページ
├── README.md           # このファイル
├── CLAUDE.md           # Claude Code用ガイドライン
├── css/
│   └── style.css       # スタイルシート
├── js/
│   └── main.js         # JavaScriptファイル
└── assets/             # 画像アセット
    ├── senior_soul.png
    ├── leading_ladies.png
    ├── top-guns.png
    └── language_lions.png
```

## デプロイ

### Netlifyへのデプロイ

1. Netlifyアカウントにログイン
2. ドラッグ&ドロップまたはGit連携でデプロイ
3. フォーム通知設定を管理画面で設定

改修はGitへのプッシュのみで自動デプロイされる

### 本番環境

- URL: https://ogtjinzai.com
- Netlify App URL: https://ogt-jinzai.netlify.app/
- ドメイン： お名前ドットコム（Aレコードで75.2.60.5の設定）
- ネームサーバー： お名前ドットコム
- ホスティング: Netlify
- SSL: Let's Encrypt（Netlifyによる自動設定）

## 開発ガイドライン

### コミット規則

- feat: 新機能追加
- fix: バグ修正
- style: スタイル調整
- docs: ドキュメント更新
- refactor: リファクタリング

### コーディング規約

- セマンティックHTMLの使用
- アクセシビリティ基準（WCAG 2.1 AA）準拠
- モバイルファーストアプローチ
- パフォーマンス最適化を考慮

## フォーム仕様

1. Netlify Formsを使用した自動処理
   - 必須項目：会社名、担当者名、メールアドレス、電話番号
   - 任意項目：採用課題（複数選択）、お問い合わせ内容
2. Zapierを使用したワークフロー
   - Netlify Form ⇒ Google Spread Sheet

## ライセンス

Copyright © 2024 OGT！人才. All rights reserved.
