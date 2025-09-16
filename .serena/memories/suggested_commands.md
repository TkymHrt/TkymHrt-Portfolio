# 推奨コマンド

## 開発コマンド

### 基本的な開発フロー
```bash
# 開発サーバー起動
npm run dev
# または
yarn dev

# 本番ビルド
npm run build
# または
yarn build

# 本番サーバー起動（ビルド後）
npm run start
# または
yarn start

# リント実行
npm run lint
# または
yarn lint
```

### パッケージ管理
```bash
# 依存関係インストール
npm install
# または
yarn install

# 新しいパッケージ追加
npm install <package-name>
# または
yarn add <package-name>
```

## 開発ツール

### Biome（リンター・フォーマッター）
```bash
# フォーマット実行
npx @biomejs/biome format --write .

# リント実行
npx @biomejs/biome lint .

# チェック実行（リント+フォーマット）
npx @biomejs/biome check .
```

## システムコマンド（Linux）
```bash
# ファイル検索
find . -name "*.tsx" -type f

# パターン検索
grep -r "useState" --include="*.tsx" .

# ディレクトリ構造表示
tree -I node_modules

# Git操作
git status
git add .
git commit -m "commit message"
git push origin main
```

## 注意事項
- README.mdにはMakefileを使用するコマンドが記載されているが、実際にはMakefileは存在しないため、上記のnpm/yarnスクリプトを使用すること
- Prisma/PostgreSQL関連の記述がREADMEにあるが、現在のプロジェクトには該当ファイルが見つからない