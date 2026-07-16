# TkymHrt Portfolio

TkymHrt のスキル、制作実績、技術ノート、連絡先をまとめた1ページのポートフォリオサイトです。Astro の静的出力と Tailwind CSS v4 を使い、クライアント JavaScript はテーマ切替だけに限定しています。

## 技術スタック

- Astro 6 / TypeScript
- Tailwind CSS 4（CSS-first configuration）
- LINE Seed JP（Astro Fonts によるセルフホスト）
- Lucide Astro
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

プロフィール、スキル、作品、ノート、SNSリンクは [`src/data/portfolio.ts`](src/data/portfolio.ts) に集約しています。各セクションは `src/components/` 配下で独立した Astro コンポーネントとして管理しています。

デザイン判断とトークンは [`PRODUCT.md`](PRODUCT.md) と [`DESIGN.md`](DESIGN.md) に記録しています。

## フォントライセンス

LINE Seed JP © LY Corporation は SIL Open Font License 1.1 のもとで利用しています。ビルド時にページ内の文字へサブセット化し、Regular（400）と Bold（700）をセルフホストします。ライセンス全文は [`public/licenses/LINE-Seed-JP-OFL.txt`](public/licenses/LINE-Seed-JP-OFL.txt) を参照してください。

## デプロイ

ビルド結果は完全な静的サイトです。サーバーアダプターは不要です。

### Vercel

1. このリポジトリを Vercel にImportします。
2. Framework Preset は `Astro`、Build Command は `bun run build`、Output Directory は `dist` を指定します。
3. デプロイを実行します。

### Cloudflare Workers / Pages

Cloudflare の Build Command を `bun run build`、Build Output Directory を `dist` に設定します。CLIを使う場合は次を実行します。

```sh
bun run build
bunx wrangler deploy
```

`wrangler.jsonc` の静的アセット設定により `dist/` が配信されます。
