# Quick Start Guide

## 🚀 Running the Project

The development server is already running at **http://localhost:3000**

### Available Commands

```bash
# Start development server
npm run dev

# Build for production
npm run build

# Start production server
npm start

# Run linter
npm run lint
```

## 📋 Using the Quote Generator

1. **View Quote**: The app loads with a random motivational quote
2. **Get New Quote**: Click the "New Quote" button to fetch another quote
3. **Like Quote**: Click the heart button to mark a quote as your favorite
4. **Copy Quote**: Click "Copy" to copy the quote to your clipboard

## 🎨 Customizing Quotes

Edit `app/api/quote/route.ts` to add more quotes:

```typescript
const quotes = [
  {
    text: "Your custom quote here",
    author: "Author Name"
  },
  // ... add more quotes
]
```

## 🎯 Project Features

✅ Random motivational quotes  
✅ New Quote button with loading state  
✅ Like/Favorite functionality  
✅ Copy to clipboard  
✅ Minimal, modern design  
✅ Fully responsive  
✅ Smooth animations  
✅ TypeScript support  

## 📦 Tech Stack

- **Next.js 14** - React framework
- **TypeScript** - Type safety
- **Tailwind CSS** - Utility-first styling
- **React Hooks** - State management

## 🔗 File Structure

```
quote-generator/
├── app/
│   ├── api/quote/route.ts     ← Quote API endpoint
│   ├── page.tsx                ← Main component
│   ├── layout.tsx              ← Root layout
│   └── globals.css             ← Global styles
├── package.json
├── tsconfig.json
├── tailwind.config.ts
└── README.md
```

## 💡 Tips

- The app is fully responsive and works on mobile, tablet, and desktop
- Quotes are loaded from the API endpoint `/api/quote`
- The design uses a dark theme with gradient accents
- All buttons have smooth hover and click animations
- Copy functionality includes both quote text and author

## 🐛 Troubleshooting

If the server isn't running:

```bash
# Kill existing process on port 3000
netstat -ano | findstr :3000  # Find the process
taskkill /PID <PID> /F         # Kill it

# Then restart
npm run dev
```

## 📚 Learn More

- [Next.js Documentation](https://nextjs.org/docs)
- [Tailwind CSS Documentation](https://tailwindcss.com/docs)
- [React Documentation](https://react.dev)

---

**Ready to inspire!** 🌟
