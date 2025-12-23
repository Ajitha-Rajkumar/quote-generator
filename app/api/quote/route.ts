import { NextResponse } from 'next/server'

const quotes = [
  {
    text: "The only way to do great work is to love what you do.",
    author: "Steve Jobs"
  },
  {
    text: "Innovation distinguishes between a leader and a follower.",
    author: "Steve Jobs"
  },
  {
    text: "Life is what happens when you're busy making other plans.",
    author: "John Lennon"
  },
  {
    text: "The future belongs to those who believe in the beauty of their dreams.",
    author: "Eleanor Roosevelt"
  },
  {
    text: "It is during our darkest moments that we must focus to see the light.",
    author: "Aristotle"
  },
  {
    text: "The only impossible journey is the one you never begin.",
    author: "Tony Robbins"
  },
  {
    text: "In the end, we will remember not the words of our enemies, but the silence of our friends.",
    author: "Martin Luther King Jr."
  },
  {
    text: "The best time to plant a tree was 20 years ago. The second best time is now.",
    author: "Chinese Proverb"
  },
  {
    text: "Your time is limited, don't waste it living someone else's life.",
    author: "Steve Jobs"
  },
  {
    text: "The way to get started is to quit talking and begin doing.",
    author: "Walt Disney"
  },
  {
    text: "Believe you can and you're halfway there.",
    author: "Theodore Roosevelt"
  },
  {
    text: "It always seems impossible until it's done.",
    author: "Nelson Mandela"
  },
  {
    text: "Don't watch the clock; do what it does. Keep going.",
    author: "Sam Levenson"
  },
  {
    text: "The future is created by what you do today, not tomorrow.",
    author: "Unknown"
  },
  {
    text: "Success is not final, failure is not fatal: it is the courage to continue that counts.",
    author: "Winston Churchill"
  }
]

export async function GET() {
  const randomIndex = Math.floor(Math.random() * quotes.length)
  return NextResponse.json(quotes[randomIndex])
}
