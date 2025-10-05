# EASY EXCHANGE — Landing (React + TypeScript + Vite)

Modern, responsive landing page for a currency exchange product. Includes live currency conversion (USD/GBP/EUR) via ExchangeRate-API, feature highlights, and an animated login modal.

## Features
- Live currency conversion with axios (USD/GBP/EUR)
- Dynamic base currency; API key from `.env`
- Responsive UI with Tailwind CSS
- Login modal with slide-down animation and backdrop close
- Organized assets (`assets/logos`, `assets/icons`, `assets/flags`, `assets/illustrations`)

## Tech Stack
- React 19, TypeScript, Vite
- Tailwind CSS
- Axios

## Quick Start
1) Install dependencies
```bash
npm i
```

2) Create `.env` and add your API key
```bash
VITE_APP_API_KEY=YOUR_EXCHANGERATE_API_KEY
```

3) Start dev server
```bash
npm run dev
```

## Available Scripts
- `npm run dev` — start Vite dev server
- `npm run build` — type-check and build for production
- `npm run preview` — preview production build
- `npm run lint` — run ESLint

## API
Exchange rates fetched from `https://v6.exchangerate-api.com/v6/{API_KEY}/latest/{BASE}`. See docs: [ExchangeRate-API Docs](https://www.exchangerate-api.com/docs).

## Project Structure (key paths)
```
src/
  components/
    layout/
      Header.tsx
      Footer.tsx
      LoginModal.tsx
    sections/
      Hero.tsx
      Features.tsx
      ConvertFund.tsx
  services/
    exchange.ts
  types/
    exchange.ts
  assets/
    logos/
    icons/
    flags/
    illustrations/
```

## Accessibility & Semantics
- The main content is wrapped with `<main>` in `src/App.tsx` for better accessibility and semantics. Screen readers can jump directly to main content; SEO tools also benefit from clear document landmarks. Visual layout remains the same; only structure is improved.

## Screenshots

![Hero](https://github.com/mustafakaracuha/easy-exchange-landing/blob/main/src/assets/screenshots/App.png)