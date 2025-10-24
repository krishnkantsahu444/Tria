import React from 'react'
import ContactItem from './ContactItem'

export default function ContactList({ contacts }) {
  if (!contacts || contacts.length === 0) {
    return <div className="empty">No contacts found.</div>
  }

  return (
    <ul className="contact-list">
      {contacts.map(c => (
        <ContactItem key={c.id} contact={c} />
      ))}
    </ul>
  )
}
