require('dotenv').config();
const express = require('express');
const cors = require('cors');

const app = express();
app.use(express.json());

const allowedOrigins = [process.env.FRONTEND_URL || '*'];
app.use(cors({ origin: allowedOrigins }));

const books = [
  { id: 1, title: '1984', author: 'George Orwell' },
  { id: 2, title: 'The Hobbit', author: 'J. R. R. Tolkien' },
];

app.get('/api/health', (req, res) => res.json({ ok: true }));

app.get('/api/books', (req, res) => {
  res.json(books);
});

app.post('/api/books', (req, res) => {
  const { title, author } = req.body;
  if (!title || !author) return res.status(400).json({ error: 'title & author required' });
  const id = books.length + 1;
  const book = { id, title, author };
  books.push(book);
  res.status(201).json(book);
});

const port = process.env.PORT || 3001;
app.listen(port, () => console.log(`Backend running on port ${port}`));

// extra