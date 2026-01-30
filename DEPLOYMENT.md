# Stadtlicht Lemgo - GitHub Pages

This Next.js project is configured for deployment to GitHub Pages.

## 🚀 Quick Start

### Local Development
```bash
npm install
npm run dev
```

Visit `http://localhost:3000` to see your site.

### Build for Production
```bash
npm run export
```

This creates an optimized static export in the `out/` directory.

## 📦 GitHub Pages Deployment

### Method 1: Automatic Deployment (Recommended)

The project includes a GitHub Actions workflow that automatically deploys to GitHub Pages on every push to the `main` branch.

**Setup Steps:**

1. **Push to GitHub:**
   ```bash
   git add .
   git commit -m "Configure for GitHub Pages"
   git push origin main
   ```

2. **Enable GitHub Pages:**
   - Go to your repository on GitHub
   - Navigate to **Settings** → **Pages**
   - Under **Source**, select **GitHub Actions**
   - The workflow will automatically deploy on the next push

3. **Access your site:**
   - Your site will be available at: `https://[username].github.io/tadtlicht-lemgo/`
   - Replace `[username]` with your GitHub username

### Method 2: Manual Deployment

If you prefer manual deployment:

1. **Build the site:**
   ```bash
   npm run export
   ```

2. **Deploy the `out/` folder:**
   - The `out/` folder contains your static site
   - You can use `gh-pages` package or manually push to `gh-pages` branch

## ⚙️ Configuration

### Base Path

If your GitHub Pages URL is `https://username.github.io/tadtlicht-lemgo/`, the `basePath` in `next.config.ts` is already set correctly.

If deploying to a **custom domain** or **root** (`username.github.io`):
- Remove or comment out the `basePath` line in `next.config.ts`

### Repository Name

Make sure the `basePath` in `next.config.ts` matches your repository name:
```typescript
basePath: '/tadtlicht-lemgo', // Must match your repo name
```

## 📁 Project Structure

```
tadtlicht-lemgo/
├── .github/
│   └── workflows/
│       └── deploy.yml       # GitHub Actions deployment workflow
├── app/                     # Next.js app directory
├── components/              # React components
├── public/                  # Static assets
│   └── .nojekyll           # Prevents Jekyll processing
├── next.config.ts          # Next.js configuration (with export settings)
└── package.json            # Dependencies and scripts
```

## 🔧 Important Files

- **`next.config.ts`**: Configured with:
  - `output: 'export'` - Enables static HTML export
  - `basePath: '/tadtlicht-lemgo'` - Sets the base path for GitHub Pages
  - `images.unoptimized: true` - Required for static export

- **`.github/workflows/deploy.yml`**: GitHub Actions workflow for automatic deployment

- **`public/.nojekyll`**: Prevents GitHub from processing files with Jekyll

## 🌐 Custom Domain (Optional)

To use a custom domain:

1. Add a `CNAME` file to the `public/` directory with your domain:
   ```
   echo "yourdomain.com" > public/CNAME
   ```

2. Configure DNS settings with your domain provider

3. Update GitHub Pages settings to use your custom domain

4. Remove `basePath` from `next.config.ts`

## 📝 Notes

- Static export means no server-side features (API routes, ISR, SSR)
- All pages are pre-rendered at build time
- Images use unoptimized mode (no Next.js Image Optimization)

## 🐛 Troubleshooting

**404 on refresh:** 
- This is normal for GitHub Pages with client-side routing
- Consider using hash routing or a 404.html redirect

**Images not loading:**
- Ensure images are in the `public/` folder
- Use relative paths: `/tadtlicht-lemgo/image.jpg`

**Build fails:**
- Check that all dependencies are installed: `npm install`
- Verify no server-side features are used

## 📚 Resources

- [Next.js Static Export Documentation](https://nextjs.org/docs/app/building-your-application/deploying/static-exports)
- [GitHub Pages Documentation](https://docs.github.com/en/pages)
