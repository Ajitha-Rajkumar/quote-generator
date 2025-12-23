# Quote Generator

A beautiful, minimal random quote generator built with Next.js and Tailwind CSS.

## Features

- 🎯 Random motivational quotes displayed on each load
- ✨ Minimal, modern UI with glassmorphism design
- 🎨 Tailwind CSS for responsive styling
- ❤️ Like/favorite quotes feature
- 📋 Copy quotes to clipboard functionality
- ⚡ Fast and optimized with Next.js 14
- 🎭 Smooth animations and transitions

## Tech Stack

- **Framework**: Next.js 14
- **Language**: TypeScript
- **Styling**: Tailwind CSS
- **Icons**: Lucide React
- **HTTP Client**: Axios

## Getting Started

### Prerequisites

- Node.js 18+ installed
- npm, yarn, pnpm, or bun

### Installation

1. Clone the repository:
```bash
git clone <repository-url>
cd quote-generator
```

2. Install dependencies:
```bash
npm install
```

3. Run the development server:
```bash
npm run dev
```

4. Open [http://localhost:3000](http://localhost:3000) in your browser

## Scripts

- `npm run dev` - Start development server
- `npm run build` - Build for production
- `npm start` - Start production server
- `npm run lint` - Run ESLint

## Features Explained

### Random Quote Display
Each time the app loads or the "New Quote" button is clicked, a random motivational quote is fetched from the API and displayed.

### Like Feature
Click the heart button to mark a quote as your favorite. The button will highlight to show your preference.

### Copy to Clipboard
Use the copy button to quickly copy the quote and author to your clipboard.

## Project Structure

```
quote-generator/
├── app/
│   ├── api/
│   │   └── quote/
│   │       └── route.ts       # API route for fetching quotes
│   ├── layout.tsx              # Root layout
│   ├── page.tsx                # Main page component
│   └── globals.css             # Global styles
├── public/                      # Static assets
├── package.json                 # Dependencies
├── tsconfig.json                # TypeScript config
├── tailwind.config.ts           # Tailwind config
├── next.config.js              # Next.js config
└── README.md                    # This file
```

## Customization

### Adding More Quotes
Edit `app/api/quote/route.ts` and add more quotes to the `quotes` array:

```typescript
const quotes = [
  {
    text: "Your quote here",
    author: "Author name"
  },
  // ... more quotes
]
```

### Styling
Modify `app/globals.css` and `tailwind.config.ts` to customize colors and styles.

## Performance

- Optimized images and assets
- Code splitting with Next.js
- Static generation where possible
- Fast refresh during development

## License

MIT License - feel free to use this project for personal or commercial use.

## Author

Created with ❤️ for inspiration seekers
