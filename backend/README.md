# Backend Services for Portfolio

This directory contains the `docker-compose.yml` to run the backend services for your portfolio website.

This setup includes:
- **Strapi:** A headless CMS for managing your portfolio content.
- **PostgreSQL:** A database for Strapi to store its data.
- **Cloudflare Tunnel:** A service to securely expose your local Strapi instance to the internet with a stable URL.

## Prerequisites

- **Docker:** You must have Docker and Docker Compose installed. [Get Docker here](https://docs.docker.com/get-docker/).
- **Cloudflare Account:** You need a free Cloudflare account.
- **A Domain in Cloudflare:** You need to have a domain name managed by your Cloudflare account to create a permanent tunnel URL (e.g., `yourdomain.com`).

## 1. Initial Setup

### Step 1: Configure Environment Variables

First, copy the example environment file:

```bash
cp .env.example .env
```

Now, open the `.env` file in a text editor and fill in the required values.

- `JWT_SECRET`, `ADMIN_JWT_SECRET`, `APP_KEYS`: These are security keys for Strapi. You can generate strong, random values for these using the following command in your terminal:
  ```bash
  openssl rand -base64 32
  ```
  Run this command three times and copy-paste the output for each of the three variables.

### Step 2: Set up Cloudflare Tunnel

This setup uses a permanent "Named Tunnel" from Cloudflare to give your Strapi API a stable address (e.g., `https://strapi.yourdomain.com`). The configuration for this is done **entirely in the Cloudflare Dashboard**.

1.  **Follow the Cloudflare guide to create a tunnel.** You can stop at the point where it asks you to install the `cloudflared` connector, as we will use the Docker container instead.
    - [Cloudflare Tunnel Guide](https://developers.cloudflare.com/cloudflare-one/connections/connect-networks/get-started/create-local-tunnel/)

2.  **Get your Tunnel Token:** After creating the tunnel, the dashboard will show you a command like `cloudflared service install ey...`. The long string of characters (`ey...`) is your **Tunnel Token**.
    - Copy this token and paste it into your `.env` file for the `CLOUDFLARE_TUNNEL_TOKEN` variable.

3.  **Assign a Public Hostname in Cloudflare:**
    - In your tunnel's configuration in the Cloudflare dashboard, go to the **Public Hostname** tab.
    - Click **Add a public hostname**.
    - **Subdomain:** Enter the name you want (e.g., `strapi`).
    - **Domain:** Select your domain (e.g., `yourdomain.com`).
    - **Service Type:** Select `HTTP`.
    - **URL:** Enter `strapi:1337`. **Important:** Do not use `localhost`. Use `strapi:1337` to point to the Strapi container within Docker's network.
    - Click **Save hostname**.

    This creates a public URL (e.g., `https://strapi.yourdomain.com`) and configures the tunnel to forward all traffic to your Strapi container.

### Step 3: Set up Cloudflare R2 for Image Storage

This project is configured to automatically upload all media from Strapi to a Cloudflare R2 bucket for high-performance, low-cost storage.

1.  **Create an R2 Bucket:**
    - In the Cloudflare dashboard, go to **R2**.
    - Click **Create bucket**. Give it a unique name (e.g., `my-portfolio-uploads`) and click **Create bucket**.

2.  **Get your R2 Account ID:**
    - On the main R2 page, your **Account ID** is listed on the right-hand side. Copy it.
    - Paste this value into the `R2_ACCOUNT_ID` variable in your `.env` file.

3.  **Create an R2 API Token:**
    - On the main R2 page, click **Manage R2 API Tokens**.
    - Click **Create API token**.
    - Give the token a name (e.g., `strapi-r2-worker`).
    - Under **Permissions**, select **Object Read & Write**.
    - Click **Create API token**.
    - A summary screen will appear. Copy the **Access Key ID** and the **Secret Access Key**.
    - Paste these values into the `R2_ACCESS_KEY_ID` and `R2_SECRET_ACCESS_KEY` variables in your `.env` file.

4.  **Configure Bucket Name and Public URL:**
    - **Bucket Name:** The name you chose in step 1. Paste this into `R2_BUCKET_NAME` in your `.env` file.
    - **Public URL:** In your R2 bucket's settings, you can connect a custom domain or use the public `r2.dev` URL. For this to work, you must enable public access to your bucket.
        - Go to your bucket's **Settings** tab.
        - Under **Public access**, click **Allow access**.
        - Your public URL will be in the format `https://pub-....r2.dev`. Copy this base URL.
        - Paste this value into the `R2_PUBLIC_URL` variable in your `.env` file.

## 2. Launching the Services

Once you have completed the configuration, start all the services using Docker Compose:

```bash
docker-compose up --d
```

The `-d` flag runs the containers in the background.

## 3. First-time Strapi Setup

The first time you start the Strapi container, it may take a few minutes to initialize.

1.  **Access Strapi:** Open your web browser and go to your public tunnel URL (e.g., `https://strapi.yourdomain.com/admin`).
2.  **Create Admin User:** Strapi will prompt you to create your first administrator account. Fill out the form to gain access to the Strapi admin panel.

Your backend is now running! The next steps in the plan will add the necessary plugins for image uploads and finalize the configuration.
