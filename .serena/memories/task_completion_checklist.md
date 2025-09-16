# タスク完了時の推奨アクション

## 開発完了時のチェックリスト

### 1. コード品質チェック
```bash
# リント実行
npm run lint

# Biomeでフォーマット・チェック
npx @biomejs/biome check .

# TypeScriptコンパイルエラーチェック
npm run build
```

### 2. 動作確認
```bash
# 開発サーバーで動作確認
npm run dev

# 本番ビルドが正常に完了するか確認
npm run build
npm run start
```

### 3. Git操作
```bash
# 変更状況確認
git status

# ファイル追加
git add .

# コミット
git commit -m "feat: 機能追加の説明"

# プッシュ
git push origin main
```

## 推奨されるコミットメッセージ規約

### プレフィックス
- `feat:` 新機能追加
- `fix:` バグ修正
- `style:` スタイル・UI改善
- `refactor:` リファクタリング
- `docs:` ドキュメント更新
- `chore:` 設定変更・メンテナンス

### 例
```
feat: Aboutセクションにスキル一覧を追加
fix: ヘッダーナビゲーションのレスポンシブ表示を修正
style: パーティクル効果のアニメーション速度を調整
```

## デプロイメント

### 自動デプロイ
- **Vercel**: mainブランチへのプッシュで自動デプロイ
- **Netlify**: 同様に自動デプロイ設定

### 手動確認項目
- デプロイ後のサイト動作確認
- レスポンシブデザインの確認
- パフォーマンス確認（Lighthouse等）

## トラブルシューティング

### よくある問題
1. **ビルドエラー**: TypeScript型エラーの確認
2. **スタイル崩れ**: Tailwind CSSの適用確認
3. **アニメーション不具合**: Framer Motionの依存関係確認

### デバッグコマンド
```bash
# 依存関係の再インストール
rm -rf node_modules package-lock.json
npm install

# Next.jsキャッシュクリア
npm run build -- --no-cache
```