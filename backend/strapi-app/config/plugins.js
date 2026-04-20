module.exports = ({ env }) => ({
  upload: {
    config: {
      provider: '@strapi-community/strapi-provider-upload-cloudflare-r2',
      providerOptions: {
        accountId: env('R2_ACCOUNT_ID'),
        accessKeyId: env('R2_ACCESS_KEY_ID'),
        secretAccessKey: env('R2_SECRET_ACCESS_KEY'),
        bucket: env('R2_BUCKET_NAME'),
        publicUrl: env('R2_PUBLIC_URL'),
      },
    },
  },
});
