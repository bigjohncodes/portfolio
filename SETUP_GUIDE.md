# Quick Setup Guide - After Buying Domain

## Step 1: Create GitHub Repository

1. Go to https://github.com/new
2. Repository name: `portfolio` (or any name you prefer)
3. Make it **Public** (required for free GitHub Pages)
4. **Don't** initialize with README, .gitignore, or license
5. Click **"Create repository"**

## Step 2: Update Git Remote

After creating your repo, GitHub will show you commands. Run these in your terminal:

```bash
# Remove old remote (if exists)
git remote remove origin

# Add your new repository (replace YOUR-USERNAME with your GitHub username)
git remote add origin https://github.com/YOUR-USERNAME/portfolio.git

# Verify it's set correctly
git remote -v
```

## Step 3: Commit and Push Your Changes

```bash
# Add all files
git add .

# Commit changes
git commit -m "Configure portfolio with custom domain"

# Push to your repository
git push -u origin main
```

## Step 4: Enable GitHub Pages

1. Go to your repository on GitHub
2. Click **Settings** (top menu)
3. Click **Pages** (left sidebar)
4. Under **Source**:
   - Branch: Select `gh-pages`
   - Folder: Select `/ (root)`
5. Click **Save**

## Step 5: Configure DNS at Your Domain Registrar

Go to your domain registrar's DNS management panel and add:

### A Records (4 records needed):
- Type: **A**
- Name: **@** (or leave blank, or use your domain name)
- Value: **185.199.108.153**
- TTL: **3600**

Repeat 3 more times with these values:
- 185.199.109.153
- 185.199.110.153
- 185.199.111.153

### CNAME Record (for www):
- Type: **CNAME**
- Name: **www**
- Value: **YOUR-USERNAME.github.io** (replace YOUR-USERNAME)
- TTL: **3600**

## Step 6: Set Custom Domain in GitHub

1. Still in **Settings → Pages**
2. Under **Custom domain**, enter: `johnagboola.com`
3. Click **Save**
4. **Don't check "Enforce HTTPS" yet** - wait until DNS works

## Step 7: Build and Deploy

```bash
# Build the project
npm run build

# Deploy to GitHub Pages
npm run deploy
```

This creates the `gh-pages` branch and deploys your site.

## Step 8: Wait for DNS (1-2 hours)

DNS changes take time to propagate. Check status at:
- https://dnschecker.org

## Step 9: Enable HTTPS

After your domain loads (usually 1-2 hours):
1. Go to **Settings → Pages**
2. Check **"Enforce HTTPS"**
3. GitHub will automatically get SSL certificate

## Done! 🎉

Your portfolio will be live at:
- https://johnagboola.com
- https://www.johnagboola.com

