# Stadtlicht Lemgo - GitHub Pages Deployment

This Next.js project is configured for simple GitHub Pages deployment by committing built files.

## 🚀 Quick Deployment Steps

### 1. Build the Site
```bash
npm run export
```
This creates the static site in the `out/` directory.

### 2. Commit Everything (including /out)
```bash
git add .
git commit -m "Deploy to GitHub Pages"
git push origin main
```

### 3. Configure GitHub Pages
1. Go to your repository on GitHub
2. Click **Settings** → **Pages**
3. Under **Source**, select:
   - **Branch:** `main`
   - **Folder:** `/out`
4. Click **Save**

### 4. Access Your Site
Your site will be live at:
```
https://[your-username].github.io/tadtlicht-lemgo/
```

## 🔄 Updating Your Site

Whenever you make changes:

```bash
# 1. Make your changes to the code
# 2. Rebuild the site
npm run export

# 3. Commit and push
git add .
git commit -m "Update site"
git push origin main
```

GitHub Pages will automatically update within a few minutes.

## ⚙️ Configuration Details

### `next.config.ts`
```typescript
basePath: '/tadtlicht-lemgo'  // Must match your repo name
output: 'export'               // Enables static export
images.unoptimized: true       // Required for static sites
```

### Important Files
- **`/out`** - Built static site (committed to repo)
- **`public/.nojekyll`** - Prevents Jekyll processing
- **`.gitignore`** - `/out` is NOT ignored (so it's committed)

## 📝 Notes

- ✅ Simple deployment - no GitHub Actions needed
- ✅ `/out` directory is committed to the repository
- ✅ GitHub Pages serves directly from `/out` folder
- ⚠️ Remember to rebuild (`npm run export`) before each deployment

## 🌐 Custom Domain (Optional)

To use a custom domain like `stadtlicht-lemgo.de`:

1. **Add CNAME file:**
   ```bash
   echo "stadtlicht-lemgo.de" > public/CNAME
   ```

2. **Rebuild:**
   ```bash
   npm run export
   ```

3. **Configure DNS** at your domain provider:
   ```
   Type:  CNAME
   Name:  www (or @)
   Value: [your-username].github.io
   ```

4. **Update GitHub Pages settings** to use custom domain

5. **Remove basePath from `next.config.ts`:**
   ```typescript
   // Comment out or remove this line:
   // basePath: '/tadtlicht-lemgo',
   ```

## 🐛 Troubleshooting

**Site shows 404:**
- Wait a few minutes for GitHub to process the deployment
- Verify **Settings → Pages** shows `/out` as the source folder
- Check that `basePath` in `next.config.ts` matches your repo name

**Changes not appearing:**
- Make sure you ran `npm run export` before committing
- Clear your browser cache
- Wait 5-10 minutes for GitHub Pages to update

**Images not loading:**
- Images must be in `public/` folder
- Paths should be relative: `/tadtlicht-lemgo/image.jpg`

## 📁 Repository Structure

```
tadtlicht-lemgo/
├── out/                    # ✅ Committed - GitHub Pages serves this
│   ├── index.html
│   ├── _next/
│   └── ...
├── app/                    # Source code
├── components/             # React components
├── public/                 # Static assets
│   └── .nojekyll
├── next.config.ts          # Next.js config
└── package.json
```

## 🔄 Workflow Comparison

### This Setup (Simple)
```
1. npm run export
2. git add .
3. git commit -m "Deploy"
4. git push
✅ Done!
```

### Alternative (GitHub Actions)
```
1. git push
2. GitHub Actions builds automatically
3. Deploys to Pages
✅ More automated but complex setup
```

---

**Your current setup uses the simple method - just build, commit, and push!** 🚀
