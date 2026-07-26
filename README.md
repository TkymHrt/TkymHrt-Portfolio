# TkymHrt Portfolio

TkymHrt のプロフィール、スキル、制作実績、技術ノート、ブログ、連絡先をまとめたポートフォリオサイトです。トップページを入口に、プロフィールを詳しく紹介する About ページ、作品一覧、技術ノート・日々の記録を統合した Blog 一覧から各コンテンツへ移動できます。Astro の静的出力と Tailwind CSS v4 を使い、クライアント JavaScript はテーマ切替だけに限定しています。

## 技術スタック

- Astro 6 / TypeScript
- Astro Content Collections（Markdown / MDX）
- Tailwind CSS 4（CSS-first configuration）
- LINE Seed JP（Astro Fonts によるセルフホスト）
- Tabler Icons / Simple Icons（Iconify JSON）
- Playwright / axe-core
- Lighthouse 13
- Bun 1.3.14 / Node.js 22.12 以上

## セットアップ

```sh
bun install --frozen-lockfile
bunx playwright install chromium
bun run dev
```

開発サーバーは `http://localhost:4321` で起動します。

## コマンド

| コマンド                   | 内容                                        |
| -------------------------- | ------------------------------------------- |
| `bun run dev`              | 開発サーバーを起動                          |
| `bun run build`            | 型検査後、静的ファイルを `dist/` へ生成     |
| `bun run preview`          | 生成済みサイトをローカル配信                |
| `bun run ci`               | 静的解析、依存監査、型検査、ビルド          |
| `bun run test:e2e`         | デスクトップ／モバイルのPlaywright・axe検査 |
| `bun run audit:lighthouse` | desktop／mobileのLighthouse 4カテゴリを検査 |
| `bun run verify`           | CI、E2E、Lighthouse 100点ゲートを一括実行   |

Lighthouse は Performance、Accessibility、Best Practices、SEO のすべてが100点でなければ失敗します。JSONレポートはローカルの `lighthouse-reports/` に生成されます。

## コンテンツの編集

プロフィール、経歴、スキル、SNSリンクは [`src/data/portfolio.ts`](src/data/portfolio.ts) に集約し、トップページと About ページで共有しています。経歴は `careerTimeline` の期間・見出し・説明を編集すると、About ページのタイムラインへ反映されます。作品・技術記事・ブログは Astro Content Collections で管理し、Markdown を追加すると一覧と詳細ページが静的生成されます。技術記事と日々の記録は Blog にまとめ、タグを添えて公開日順で表示します。

| 種類     | Markdown                         | 公開URL             |
| -------- | -------------------------------- | ------------------- |
| 作品     | `src/content/works/<slug>.md`    | `/works/<slug>/`    |
| 技術記事 | `src/content/articles/<slug>.md` | `/articles/<slug>/` |
| ブログ   | `src/content/blog/<slug>.md`     | `/blog/<slug>/`     |

### 新しいページを追加する

1. 各ディレクトリの `_template.md` を、先頭が `_` ではない名前へコピーします。
2. frontmatter と本文を編集します。ファイル名がURLの `<slug>` になります。
3. 執筆中は `draft: true`、公開時は `draft: false` にします。下書きは開発環境で確認でき、本番ビルドからは除外されます。
4. `bun run check` で必須項目、日付、URL、画像パスを検証します。

作品の `summary` はトップ用、`description` は一覧・検索結果用の説明です。`repositoryUrl`、`liveUrl`、ローカル画像の `cover` は任意で指定できます。`cover` を省略した場合は、`visual`（`plant` / `task` / `photo` / `code`）に応じた軽量なビジュアルを表示します。画像は Markdown からの相対パスで `src/content/works/` 配下へ置くと、Astro が最適化します。

デザイン判断とトークンは [`PRODUCT.md`](PRODUCT.md) と [`DESIGN.md`](DESIGN.md) に記録しています。

## フォントライセンス

LINE Seed JP © LY Corporation は SIL Open Font License 1.1 のもとで利用しています。ビルド時にページ内の文字へサブセット化し、Regular（400）と Bold（700）をセルフホストします。ライセンス全文は [`public/licenses/LINE-Seed-JP-OFL.txt`](public/licenses/LINE-Seed-JP-OFL.txt) を参照してください。

## デプロイ

ビルド結果は完全な静的サイトです。サーバーアダプターは不要です。

### Vercel

1. このリポジトリを Vercel にImportします。
2. Framework Preset は `Astro`、Build Command は `bun run build`、Output Directory は `dist` を指定します。
3. デプロイを実行します。

本番URLが決まったら、環境変数 `SITE_URL`（例: `https://example.com`）を設定してください。canonical URL と `og:url` が生成されます。

### Cloudflare Workers / Pages

Cloudflare の Build Command を `bun run build`、Build Output Directory を `dist` に設定します。CLIを使う場合は次を実行します。

```sh
bun run build
bunx wrangler deploy
```

`wrangler.jsonc` の静的アセット設定により `dist/` が配信されます。
