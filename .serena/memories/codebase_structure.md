# コードベース構造

## ディレクトリ構成

```
tkymhrt-portfolio/
├── app/                    # Next.js App Router
│   ├── globals.css        # グローバルスタイル
│   ├── layout.tsx         # ルートレイアウト
│   ├── page.tsx           # メインページ
│   ├── admin/             # 管理者ページ
│   │   └── page.tsx
│   └── layout/            # レイアウトコンポーネント
│       ├── AdminLayout.tsx
│       └── UserLayout.tsx
├── components/            # 再利用可能コンポーネント
│   ├── common/           # 共通コンポーネント
│   │   ├── Particle/     # パーティクル効果
│   │   ├── ScrollProgressIndicator/
│   │   └── SvgObject/
│   ├── layout/           # レイアウト関連
│   │   ├── Footer/
│   │   ├── Header/       # ナビゲーションヘッダー
│   │   └── HeroHeader/   # ヒーローセクション
│   └── sections/         # ページセクション
│       ├── About/        # 自己紹介セクション
│       ├── Contact/      # 連絡先セクション
│       ├── Products/     # プロダクトセクション
│       └── Works/        # 作品セクション
├── public/               # 静的アセット
│   ├── favicon/
│   ├── icons/           # SNSアイコン等
│   └── products/        # プロダクト画像
└── 設定ファイル群
```

## アーキテクチャ特徴

### Next.js App Router採用
- `app/`ディレクトリベースのルーティング
- Server Componentsとクライアントコンポーネントの使い分け

### コンポーネント設計
- **モジュラー設計**: 機能別にコンポーネントを分離
- **index.ts/tsx**: 各ディレクトリにindexファイルでエクスポート管理
- **セクション分割**: ポートフォリオの各セクションを独立したコンポーネントとして実装

### スタイリング
- **Tailwind CSS**: ユーティリティファーストCSS
- **カスタムフォント**: Noto Sans JP使用
- **レスポンシブデザイン**: モバイルファーストアプローチ

### インタラクション
- **Framer Motion**: ページ遷移・要素アニメーション
- **react-scroll**: セクション間のスムーズスクロール
- **tsparticles**: 背景パーティクル効果