// server.js
const express = require('express');
const path = require('path');
const app = express();
const PORT = 3000;

// Book data
const books = [
  { title: "The Great Gatsby", author: "F. Scott Fitzgerald", description: "A novel set in the Roaring Twenties about the mysterious Jay Gatsby." },
  { title: "To Kill a Mockingbird", author: "Harper Lee", description: "A powerful story about racial injustice in the American South." },
  { title: "1984", author: "George Orwell", description: "A dystopian tale about surveillance and totalitarianism." },
  { title: "Pride and Prejudice", author: "Jane Austen", description: "A romantic novel about manners and misunderstandings." },
  { title: "Moby Dick", author: "Herman Melville", description: "A sailor's narrative of the obsessive quest for a giant white whale." },
  { title: "Brave New World", author: "Aldous Huxley", description: "A vision of a futuristic society driven by technology and control." }
];

// Serve static frontend files
app.use(express.static(path.join(__dirname, 'public')));

// Search endpoint
app.get('/api/search', (req, res) => {
  const query = req.query.q?.toLowerCase() || '';
  const results = books.filter(book =>
    book.title.toLowerCase().includes(query) ||
    book.author.toLowerCase().includes(query)
  );
  res.json(results);
});

// Start server
app.listen(PORT, () => {
  console.log(`🚀 Server running at http://localhost:${PORT}`);
});
