# Deployment and Automation Instructions

This guide explains how to deploy your Next.js frontend to Cloudflare Pages and set up an automated deployment workflow with your Strapi backend.

When you are finished, you will be able to:
1.  Update content in your self-hosted Strapi admin panel.
2.  Have those changes automatically trigger a new build on Cloudflare Pages.
3.  See the updated static site go live within minutes.

There are two main parts to this configuration: **Cloudflare Pages** and **Strapi**.

---

## Part 1: Deploying to Cloudflare Pages

First, let's get your Next.js application deployed and configured on Cloudflare Pages.

### Step 1: Create a Cloudflare Pages Project

1.  Log in to your Cloudflare dashboard.
2.  Go to **Workers & Pages** > **Create application** > **Pages** > **Connect to Git**.
3.  Select your GitHub account and choose this repository.
4.  Click **Begin setup**.

### Step 2: Configure Build Settings

Cloudflare will ask for build settings. Use the following:

-   **Project name:** Choose a name for your site.
-   **Production branch:** Select your main branch (e.g., `main` or `master`).
-   **Framework preset:** Select **Next.js**. Cloudflare should detect this automatically.
-   **Build command:** `npm run build` (or `bun run build` if you use Bun).
-   **Build output directory:** This will be set automatically by the Next.js preset.

### Step 3: Set Environment Variables

This is the most important step. You need to tell Cloudflare how to connect to your Strapi API.

1.  In the build settings, go to **Environment Variables (Advanced)**.
2.  Add the following two variables:

    -   **`STRAPI_API_URL`**:
        -   **Value:** The public URL of your Strapi instance from your Cloudflare Tunnel (e.g., `https://strapi.yourdomain.com`).

    -   **`STRAPI_API_TOKEN`**:
        -   **Value:** The API token you generated in Strapi for read-only access.
        -   **To get this token:** In your Strapi Admin, go to **Settings** > **API Tokens** > **Create new API Token**. Give it a name, set it to **Read-only**, and click Save. Copy the generated token string.

3.  Click the **Encrypt** checkbox for your `STRAPI_API_TOKEN` to keep it secure.

### Step 4: Deploy and Get Your Build Hook

1.  Click **Save and Deploy**. Cloudflare will now build and deploy your site for the first time.
2.  Once the deployment is complete, navigate to your new Pages project's dashboard.
3.  Go to **Settings** > **Builds & deployments**.
4.  Scroll down to the **Build hooks** section.
5.  Click **Add build hook**. Give it a name (e.g., `strapi-update`) and select your production branch.
6.  Cloudflare will generate a unique URL. **Copy this URL.** You will need it for the next part.

---

## Part 2: Configuring the Strapi Webhook

Now, we'll tell Strapi to notify Cloudflare whenever your content changes.

1.  Log in to your **Strapi Admin Panel** (at your `https://strapi.yourdomain.com/admin` URL).
2.  In the left-hand menu, go to **Settings**.
3.  Under the "Global settings" section, click on **Webhooks**.
4.  Click **Create new webhook**.
5.  Fill out the form:
    -   **Name:** Give it a descriptive name, like `Cloudflare Pages Deploy`.
    -   **URL:** Paste the **Build Hook URL** you copied from the Cloudflare Pages settings.
    -   **Headers:** You can leave this blank.
    -   **Events:** Check the boxes for the events that should trigger a new build. A good starting point is to check all events for **Entry** (create, update, publish, unpublish, delete). This will cover all content changes for your Products and Works.

6.  Click **Save**.

---

## You're Done!

That's it! Your automated pipeline is now active.

**To test it:**
1.  Go to your Strapi admin panel.
2.  Create, edit, or delete a "Product" or "Work" item.
3.  Go back to your Cloudflare Pages project dashboard. You should see that a new build has automatically started.
4.  Once the build is finished, your live website will be updated with the new content.
