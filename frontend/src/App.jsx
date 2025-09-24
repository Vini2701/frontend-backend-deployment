import React from 'react'
import Books from './components/Books'

export default function App(){
  return (
    <div style={{ padding: 24, fontFamily: 'Arial, sans-serif' }}>
      <h1>My Bookstore</h1>
      <Books />
    </div>
  )
}