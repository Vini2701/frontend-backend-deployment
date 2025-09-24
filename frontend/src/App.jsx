import React, { useState, useEffect } from "react";

export default function App() {
  const [books, setBooks] = useState([]);

  useEffect(() => {
    fetch(import.meta.env.VITE_API_BASE + "/api/books")
      .then(res => res.json())
      .then(data => setBooks(data));
  }, []);

  return (
    <div style={{ padding: "20px" }}>
      <h1>Book List</h1>
      <ul>
        {books.map((b, i) => (
          <li key={i}>{b.title} by {b.author}</li>
        ))}
      </ul>
    </div>
  );
}
