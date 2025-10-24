import React, { useState, useMemo, useEffect } from 'react'
import ContactList from './components/ContactList'
import AddContact from './components/AddContact'

const STORAGE_KEY = 'tria:contacts'

const defaultContacts = [
  { id: 1, name: 'Alice Johnson', phone: '555-1234', email: 'alice@example.com' },
  { id: 2, name: 'Bob Lee', phone: '555-5678', email: 'bob@example.com' },
  { id: 3, name: 'Carla Gomez', phone: '555-9012', email: 'carla@example.com' }
]

function load() {
  try {
    const raw = localStorage.getItem(STORAGE_KEY)
    if (!raw) return defaultContacts
    return JSON.parse(raw)
  } catch (e) {
    return defaultContacts
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
  const [contacts, setContacts] = useState(() => load())
  const [query, setQuery] = useState('')

  useEffect(() => {
    save(contacts)
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

  return (
    <div className="container">
      <header>
        <h1>Contact List</h1>
        <input
          aria-label="search"
          placeholder="Search by name..."
          value={query}
          onChange={e => setQuery(e.target.value)}
        />
      </header>

      <main>
        <ContactList contacts={filtered} />
        <AddContact onAdd={addContact} />
      </main>
    </div>
  )
}
