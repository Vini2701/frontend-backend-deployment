import React, { useEffect, useState } from 'react'
import axios from 'axios'

export default function Books(){
  const [books, setBooks] = useState([])
  const [title, setTitle] = useState('')
  const [author, setAuthor] = useState('')

  const API_BASE = import.meta.env.VITE_API_BASE || 'http://localhost:3001'

  useEffect(()=>{
    axios.get(`${API_BASE}/api/books`).then(r => setBooks(r.data)).catch(console.error)
  },[])

  const addBook = async ()=>{
    if(!title || !author) return alert('fill both')
    const res = await axios.post(`${API_BASE}/api/books`, { title, author })
    setBooks(prev => [...prev, res.data])
    setTitle(''); setAuthor('')
  }

  return (
    <div>
      <div>
        <input placeholder="Title" value={title} onChange={e=>setTitle(e.target.value)} />
        <input placeholder="Author" value={author} onChange={e=>setAuthor(e.target.value)} />
        <button onClick={addBook}>Add</button>
      </div>
      <ul>
        {books.map(b=> <li key={b.id}>{b.title} — <i>{b.author}</i></li>)}
      </ul>
    </div>
  )
}