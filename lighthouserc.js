module.exports = {
  ci: {
    collect: {
      /*
       * Lighthouseのスコア収集設定
       * 静的なビルドディレクトリを監査するか、実行中のサーバーを監査するか選択できます。
       */

      // オプション1: 静的ビルドディレクトリの監査
      taticDistDir: '.next/static',

      // オプション2: 特定のURLの監査 (ローカルサーバーや本番URLなど)
      url: ['http://localhost:3000/'],
      startServerCommand: 'bun run start', // 必要に応じてサーバーを起動するコマンド
    },
    upload: {
      target: 'lhci',
      /*
       * セルフホストしているLHCIサーバーのURL
       * Cloudflare Tunnelで公開したパブリックURLと一致させる必要があります。
       */
      serverBaseUrl: 'https://lhci-server.tkymhrt.dpdns.org',

      /*
       * プロジェクトのビルドトークン
       * ここにハードコードすることも可能ですが、環境変数(LHCI_TOKEN)として設定することを推奨します。
       */
      // token: 'YOUR_BUILD_TOKEN',
    },
  },
};
