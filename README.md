# EstateHub - Property List with Currency Switcher

A simple Next.js application showing a list of properties with a real-time currency switcher.

## Features

- **Property Listings**: 6 property cards with local image placeholders and detailed info.
- **Currency Switcher**: Toggle between THB, USD, EUR, and RUB with Server Actions persistence.
- **SSR Compatible**: Flicker-free initial rendering using server-side cookie reading.
- **Loading UI**: Integrated Suspense with skeleton loaders for better UX.
- **Error Handling**: Custom Error and Not Found pages.
- **Responsive Design**: Modern grid layout using Tailwind CSS 4 with smooth transitions.
- **Dark Mode**: Fully supports light and dark themes.

## Tech Stack

- **Framework**: [Next.js 16](https://nextjs.org/) (App Router)
- **Styling**: [Tailwind CSS 4](https://tailwindcss.com/)
- **UI Components**: [Shadcn UI](https://ui.shadcn.com/)
- **State Persistence**: Cookies (via `cookies-next`)

## Getting Started

1. **Install dependencies**:
   ```bash
   npm install
   ```

2. **Run the development server**:
   ```bash
   npm run dev
   ```

3. **Open the application**:
   Navigate to [http://localhost:3000](http://localhost:3000).

## Implementation Details

- **Exchange Rates**: Currencies are converted using static rates defined in `src/lib/constants.ts`.
- **Formatting**: Prices are formatted using `Intl.NumberFormat` based on the selected currency's locale.
- **Persistence**: Selected currency is stored in a cookie (`preferred_currency`) and read on the server to provide flicker-free initial rendering.
