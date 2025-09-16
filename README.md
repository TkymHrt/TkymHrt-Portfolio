<h1 align="center" id="title">TkymHrt Portfolio</h1>

<p align="center" style="align: center;">
  <img src="https://img.shields.io/badge/-Next.js-000000.svg?logo=next.js&style=popout">
  <img src="https://img.shields.io/badge/-React-000000.svg?logo=react&style=popout">
  <img src="https://img.shields.io/badge/-TypeScript-000000.svg?logo=typescript&style=popout">
  <img src="https://img.shields.io/badge/-Figma-000000.svg?logo=figma&style=popout">
  <img src="https://img.shields.io/badge/-Prisma-000000.svg?logo=prisma&style=popout">
  <img src="https://img.shields.io/badge/-Postgresql-000000.svg?logo=postgresql&style=popout">
</p>

<p id="description">TkymHrtのポートフォリオサイトです．ユーザーページに加えて，内容を修正・追加できる管理者ページを追加しています．</p>

<h2>🚀 Demo</h2>

- [Vercel](https://tkymhrt-portfolio.vercel.app/)
- [Netlify](https://tkymhrt-portfolio.netlify.app/)




<h2>Project Screenshots:</h2>

<img src="/public/Screenshot.png" alt="project-image">

<h2>🛠️ Installation and Running</h2>

このプロジェクトは Cloudflare Pages でのSSG配信 + Strapi (Docker, Postgres, 画像はCloudflare R2) を前提にしています。

### フロントエンド (Next.js)

```
npm install
npm run dev
```

本番ビルド（SSG）

```
npm run build
```

出力は `out/` に生成されます（Cloudflare Pagesにデプロイ可能）。

環境変数

```
cp .env.example .env
# .env に NEXT_PUBLIC_STRAPI_URL を設定
```

### CMS (Strapi + Postgres + Cloudflare R2)

1. 初期化

```
cp cms/.env.example cms/.env
# cms/.env 内の R2_ENDPOINT, R2_BUCKET, STRAPI_URL 等を設定
docker compose up -d
```

2. Strapi 初期セットアップ
- http://localhost:1337 にアクセスして管理ユーザを作成
- Collection Type `products` を作成し、`title` `description` `deployUrl` `githubUrl` `image (Media)` を追加
- 必要に応じて Public 権限で `/api/products` の読み取りを許可、もしくは API Token を発行して `.env` の `STRAPI_TOKEN` に設定

3. 画像ストレージ（Cloudflare R2）
- Strapi に S3 互換プラグインを設定（例: `strapi-provider-upload-s3`）
- 環境変数 `AWS_ACCESS_KEY_ID`/`AWS_SECRET_ACCESS_KEY`/`AWS_S3_ENDPOINT`/`AWS_S3_BUCKET` を `docker-compose.yml` 経由で設定

### Cloudflare Pages デプロイ

- ビルドコマンド: `npm run build`
- 出力ディレクトリ: `out`
- 環境変数: `NEXT_PUBLIC_STRAPI_URL` を指定

### Cloudflare Tunnel で Strapi を公開

Cloudflare Zero Trust のダッシュボードでトンネルを作成し、発行されたトークンを `cms/.env` の `CLOUDFLARE_TUNNEL_TOKEN` に設定してください。

`docker-compose.yml` の `cloudflared` サービスが `tunnel run` を実行し、Cloudflare 上の公開URLからローカルの `strapi:1337` にルーティングされます。

補足（ダッシュボード側設定）:
- Tunnels > Public Hostname を作成
- `https://cms.example.com` を指定
- Service: `http://strapi:1337`

### 注意事項

- 以前の README に記載の Makefile は非存在のため、npm scripts を使用してください。

<p>DB のリセット</p>

```
make dbreset
```

<p>seedの適用</p>

```
make seed
```