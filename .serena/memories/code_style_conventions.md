# コードスタイルと規約

## TypeScript規約

### コンポーネント定義
```typescript
// Arrow Function + const での定義を採用
const ComponentName = () => {
  // 実装
};

export default ComponentName;
```

### 型定義
- 明示的な型注釈を使用
- インターフェースよりもtype aliasを優先的に使用している模様

## Biome設定

### フォーマッター設定
```json
{
  "formatter": {
    "indentStyle": "tab",      // タブインデント
    "indentWidth": 2,          // インデント幅2
    "lineWidth": 120          // 行幅120文字
  }
}
```

### リンター設定
- `"recommended": true` - 推奨ルールセットを使用
- インポート整理機能有効

## 命名規則

### ファイル・ディレクトリ
- **コンポーネント**: PascalCase (例: `Header/`, `About/`)
- **ページファイル**: snake_case (例: `page.tsx`)
- **設定ファイル**: kebab-case (例: `next.config.mjs`)

### 変数・関数
- **useState**: `[state, setState]` パターン
- **イベントハンドラー**: `handle` + 動作 (例: `handleButtonClick`)
- **定数**: camelCase (例: `menuItems`)

## CSS/Tailwind規約

### クラス名
- 複数クラスは空白区切りで一行に記述
- レスポンシブプレフィックス使用 (例: `sm:space-x-6`)

### スタイル管理
- インラインでTailwindクラス記述
- 複雑なスタイルは定数として分離 (例: `motionDivClasses`)

## コンポーネント構造

### ディレクトリ構成
```
ComponentName/
├── index.tsx    # メインコンポーネント
└── (options.ts) # 設定ファイル（必要に応じて）
```

### エクスポートパターン
- デフォルトエクスポートを使用
- `index.ts`でまとめてre-export