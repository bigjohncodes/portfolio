# Next Steps After Purchasing Your Domain

## Step-by-Step Guide

### Step 1: Update CNAME File (If Domain Name is Different)

If your domain is NOT `johnagboola.com`, update the CNAME file:

1. Open `public/CNAME`
2. Replace the content with your actual domain name
3. Example: If you bought `yourname.com`, the file should contain:
   ```
   yourname.com
   www.yourname.com
   ```

### Step 2: Push Code to GitHub

```bash
# Make sure you're in the project directory
cd /Users/macbookprom2/VScode/project-persona/portfolio

# Add all files
git add .

# Commit changes
git commit -m "Configure for custom domain"

# Push to GitHub (replace 'main' with your branch name if different)
git push origin main
```

**Note:** If you don't have a GitHub repository yet:
1. Create a new repository on GitHub
2. Follow the instructions to connect your local repo

### Step 3: Enable GitHub Pages

1. Go to your GitHub repository
2. Click **Settings** (top menu)
3. Scroll down to **Pages** (left sidebar)
4. Under **Source**, select:
   - Branch: `gh-pages`
   - Folder: `/ (root)`
5. Click **Save**

### Step 4: Configure DNS Records

Go to your domain registrar's DNS management panel and add these records:

#### A Records (for apex domain - yourname.com):
Add **4 A records** with these values:

| Type | Name | Value | TTL |
|------|------|-------|-----|
| A | @ | 185.199.108.153 | 3600 |
| A | @ | 185.199.109.153 | 3600 |
| A | @ | 185.199.110.153 | 3600 |
| A | @ | 185.199.111.153 | 3600 |

#### CNAME Record (for www subdomain):
| Type | Name | Value | TTL |
|------|------|-------|-----|
| CNAME | www | **your-username**.github.io | 3600 |

**Important:** Replace `your-username` with your actual GitHub username!

### Step 5: Set Custom Domain in GitHub

1. Go back to your repository **Settings → Pages**
2. Under **Custom domain**, enter your domain (e.g., `yourname.com`)
3. Click **Save**
4. **Don't check "Enforce HTTPS" yet** - wait until DNS propagates

### Step 6: Build and Deploy

```bash
# Build the project
npm run build

# Deploy to GitHub Pages
npm run deploy
```

This will:
- Build your React app
- Create a `gh-pages` branch
- Deploy to GitHub Pages

### Step 7: Wait for DNS Propagation

- DNS changes can take **15 minutes to 48 hours**
- Usually works within **1-2 hours**
- Check status: Visit `https://dnschecker.org` and enter your domain

### Step 8: Enable HTTPS (After DNS Works)

1. Wait until your domain loads on GitHub Pages
2. Go to **Settings → Pages**
3. Check **"Enforce HTTPS"**
4. GitHub will automatically get an SSL certificate (may take a few minutes)

### Step 9: Verify Everything Works

Test these URLs:
- `http://yourname.com` (should redirect to HTTPS)
- `https://yourname.com` (should show your portfolio)
- `https://www.yourname.com` (should also work)

## Quick Checklist

- [ ] Domain purchased
- [ ] CNAME file updated with your domain
- [ ] Code pushed to GitHub
- [ ] GitHub Pages enabled (gh-pages branch)
- [ ] DNS A records added (4 records)
- [ ] DNS CNAME record added (www)
- [ ] Custom domain set in GitHub Pages settings
- [ ] Site built and deployed (`npm run build && npm run deploy`)
- [ ] Waited for DNS propagation
- [ ] HTTPS enabled
- [ ] Tested all URLs

## Common Issues & Solutions

### Issue: "Domain not verified" in GitHub
**Solution:** Make sure DNS records are correct and wait for propagation

### Issue: Site shows 404
**Solution:** 
- Check that `gh-pages` branch exists
- Verify GitHub Pages is enabled
- Make sure `base: '/'` in `vite.config.ts`

### Issue: HTTPS not available
**Solution:** Wait 24-48 hours after DNS setup, then enable HTTPS

### Issue: www subdomain not working
**Solution:** Check CNAME record points to `your-username.github.io`

## Need Help?

If you get stuck:
1. Check DNS propagation: https://dnschecker.org
2. Check GitHub Pages status in repository Settings
3. Verify CNAME file is in `public/` folder
4. Make sure `vite.config.ts` has `base: '/'`

## Example: If Your Domain is "johndoe.com"

1. Update `public/CNAME` to:
   ```
   johndoe.com
   www.johndoe.com
   ```

2. Update `package.json` homepage:
   ```json
   "homepage": "https://johndoe.com"
   ```

3. Update `src/config/portfolioData.ts`:
   ```typescript
   url: "https://johndoe.com",
   ```

4. Follow steps 2-9 above

