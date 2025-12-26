# Deployment Guide - GitHub Pages with Custom Domain

## Setup Instructions

### 1. GitHub Pages Setup

1. Push your code to GitHub repository
2. Go to your repository Settings → Pages
3. Under "Source", select "Deploy from a branch"
4. Choose `gh-pages` branch and `/ (root)` folder
5. Click Save

### 2. Custom Domain Configuration

#### Option A: Using CNAME file (Recommended)
- The `public/CNAME` file is already created with your domain
- This file will be copied to the `gh-pages` branch during deployment

#### Option B: Manual GitHub Settings
1. Go to repository Settings → Pages
2. Under "Custom domain", enter: `johnagboola.com`
3. Check "Enforce HTTPS" (available after DNS is configured)

### 3. DNS Configuration

Configure your DNS records with your domain registrar:

#### For apex domain (johnagboola.com):
```
Type: A
Name: @
Value: 185.199.108.153
TTL: 3600

Type: A
Name: @
Value: 185.199.109.153
TTL: 3600

Type: A
Name: @
Value: 185.199.110.153
TTL: 3600

Type: A
Name: @
Value: 185.199.111.153
TTL: 3600
```

#### For www subdomain (www.johnagboola.com):
```
Type: CNAME
Name: www
Value: your-username.github.io
TTL: 3600
```

**Note:** Replace `your-username` with your actual GitHub username.

### 4. Build and Deploy

```bash
# Build the project
npm run build

# Deploy to GitHub Pages
npm run deploy
```

Or set up GitHub Actions for automatic deployment on push.

### 5. Update Vite Config for Custom Domain

If using custom domain, you can update `vite.config.ts`:

```typescript
base: '/',  // Root path for custom domain
```

Or use environment variable:
```bash
CUSTOM_DOMAIN=true npm run build
```

## Free Domain Options (if you need one)

While `.com` domains are rarely free, here are some options:

1. **Freenom** (freenom.com) - Free `.tk`, `.ml`, `.ga`, `.cf` domains
2. **GitHub Student Pack** - Free domain with Namecheap (for students)
3. **Cloudflare Registrar** - At-cost pricing (no markup)
4. **Namecheap** - Often has $0.99 first-year deals for `.com`

## Troubleshooting

- **DNS Propagation**: Can take 24-48 hours
- **HTTPS**: Enable after DNS is configured
- **CNAME File**: Must be in `public/` folder to be copied to `gh-pages`
- **Base Path**: Ensure `base` in vite.config.ts matches your setup

## GitHub Actions Auto-Deploy (Optional)

Create `.github/workflows/deploy.yml`:

```yaml
name: Deploy to GitHub Pages

on:
  push:
    branches: [ main ]

jobs:
  deploy:
    runs-on: ubuntu-latest
    steps:
      - uses: actions/checkout@v3
      - uses: actions/setup-node@v3
        with:
          node-version: '18'
      - run: npm ci
      - run: npm run build
      - uses: peaceiris/actions-gh-pages@v3
        with:
          github_token: ${{ secrets.GITHUB_TOKEN }}
          publish_dir: ./dist
          cname: johnagboola.com
```

