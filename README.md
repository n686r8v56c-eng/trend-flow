# Trend Flow v1

React + Vite + Supabase + Cloudflare Pages. Mobile-first interest-trend research app for news, blogs and YouTube.

## Cloudflare Pages
- Framework: Vite
- Build command: `npm run build`
- Output folder: `dist`
- Root: repository root
- Build environment: `VITE_SUPABASE_URL`, `VITE_SUPABASE_PUBLISHABLE_KEY` (see `.env.example`)
- Pages Functions runtime variables: `SUPABASE_URL`, `SUPABASE_PUBLISHABLE_KEY`
- Pages Functions secrets: `NAVER_CLIENT_ID`, `NAVER_CLIENT_SECRET`, `YOUTUBE_API_KEY`.

## Database
Run `supabase/schema.sql` in Supabase SQL Editor. Enable email authentication and set Site URL to Cloudflare Pages URL. RLS separates accounts. Same Supabase account syncs iPhone / iPad. Browser localStorage stores only a small auth session, with memory fallback; saved user data goes to Supabase.

## Limits
No fake trend rankings. Data collection is user-triggered in v1; analytics shows personal collection activity rather than national popularity. Google Trends / AI briefings are future features. Naver API HUB-issued credentials may require a different API adapter than the legacy developer-center endpoint in the current function.
