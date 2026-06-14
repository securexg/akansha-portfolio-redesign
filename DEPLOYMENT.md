# Deployment Guide

## Frontend - Cloudflare Pages ✅

**Status**: Deployed
**URL**: https://16869748.akansha-portfolio-frontend.pages.dev
**Project**: akansha-portfolio-frontend

### Build Configuration
- **Framework**: React (Create React App)
- **Build Command**: `npm run build`
- **Output Directory**: `build/`
- **Dependencies**: Installed with `--legacy-peer-deps` flag

### Deployment Commands
```bash
cd frontend
npm install --legacy-peer-deps
npm run build
wrangler pages deploy build --project-name=akansha-portfolio-frontend
```

### Configuration
- `wrangler.toml` configured with `pages_build_output_dir = "build"`
- Compatible with Cloudflare Pages Git integration

---

## Backend - Deployment Options

### Current Stack
- **Framework**: FastAPI (Python)
- **Database**: MongoDB (Motor async driver)
- **Requirements**: See `backend/requirements.txt`

### Option 1: Keep on Traditional Platform (Recommended)
Deploy to a platform that natively supports Python and MongoDB:
- **Render**: Free tier available, good for FastAPI
- **Railway**: Simple deployment, supports MongoDB
- **Fly.io**: Edge deployment with Python support
- **Heroku**: Paid option, reliable

**Pros**: No code changes required, MongoDB connection works natively
**Cons**: Not on Cloudflare infrastructure

### Option 2: Cloudflare Workers (Requires Refactoring)
**Not recommended** without significant changes:
- Convert Python FastAPI to JavaScript/TypeScript
- Rewrite MongoDB connection logic (Workers don't support Motor)
- Use Cloudflare D1 (SQLite) or external MongoDB via fetch
- Significant development effort required

### Option 3: Cloudflare Pages Functions (Limited)
- Only supports JavaScript/TypeScript
- Limited runtime compared to Workers
- Not suitable for complex backend logic

---

## Recommended Architecture

```
Frontend (Cloudflare Pages) → Backend API (Render/Railway) → MongoDB (Atlas)
```

1. **Frontend**: Already deployed on Cloudflare Pages
2. **Backend**: Deploy to Render or Railway with MongoDB Atlas
3. **CORS**: Configure backend to allow requests from Cloudflare Pages domain

---

## Next Steps

1. **Frontend**: Already deployed ✅
2. **Backend**: Choose deployment platform (Render recommended)
3. **Environment Variables**: Configure `MONGO_URL`, `DB_NAME`, `CORS_ORIGINS`
4. **Frontend API URL**: Update frontend to point to deployed backend URL
