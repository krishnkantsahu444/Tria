import React, { useState, useMemo, useEffect } from 'react'
import ContactList from './components/ContactList'
import AddContact from './components/AddContact'

const STORAGE_KEY = 'tria:contacts'
const API_URL = 'https://jsonplaceholder.typicode.com/users'

function load() {
  try {
    const raw = localStorage.getItem(STORAGE_KEY)
    if (raw) {
      const parsed = JSON.parse(raw)
      if (parsed && parsed.length > 0) return parsed
    }
    return null
  } catch (e) {
    return null
  }
}

function save(list) {
  try {
    localStorage.setItem(STORAGE_KEY, JSON.stringify(list))
  } catch (e) {
    // ignore
  }
}

export default function App() {
  const [contacts, setContacts] = useState([])
  const [query, setQuery] = useState('')
  const [loading, setLoading] = useState(true)

  useEffect(() => {
    // Try to load from localStorage first
    const cached = load()
    if (cached) {
      setContacts(cached)
      setLoading(false)
      return
    }

    // Fetch from API if no cached data
    fetch(API_URL)
      .then(res => res.json())
      .then(users => {
        const mapped = users.map(u => ({
          id: u.id,
          name: u.name,
          phone: u.phone.split(' ')[0],
          email: u.email
        }))
        setContacts(mapped)
        save(mapped)
        setLoading(false)
      })
      .catch(err => {
        console.error('Failed to fetch contacts:', err)
        // Fallback to sample data
        const fallback = [
          { id: 1, name: 'Alice Johnson', phone: '555-1234', email: 'alice@example.com' },
          { id: 2, name: 'Bob Lee', phone: '555-5678', email: 'bob@example.com' }
        ]
        setContacts(fallback)
        setLoading(false)
      })
  }, [])

  useEffect(() => {
    if (contacts.length > 0) {
      save(contacts)
    }
  }, [contacts])

  const filtered = useMemo(() => {
    const q = query.trim().toLowerCase()
    if (!q) return contacts
    return contacts.filter(c => c.name.toLowerCase().includes(q))
  }, [contacts, query])

  function addContact(contact) {
    const id = contacts.length ? Math.max(...contacts.map(c => c.id)) + 1 : 1
    setContacts(prev => [...prev, { ...contact, id }])
  }

  function deleteContact(id) {
    setContacts(prev => prev.filter(c => c.id !== id))
  }

  if (loading) {
    return (
      <div className="container">
        <header>
          <h1>Contact List</h1>
        </header>
        <div className="loading">
          <div className="spinner"></div>
          Loading contacts...
        </div>
      </div>
    )
  }

  return (
    <div className="container">
      <header>
        <h1>📇 Contact List</h1>
        <input
          aria-label="search"
          placeholder="🔍 Search by name..."
          value={query}
          onChange={e => setQuery(e.target.value)}
        />
      </header>

      <main>
        <ContactList contacts={filtered} onDelete={deleteContact} />
        <AddContact onAdd={addContact} />
      </main>
    </div>
  )
}
