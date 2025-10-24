import React from 'react'

export default function ContactItem({ contact, onDelete }) {
  return (
    <li className="contact-item">
      <div className="info">
        <div className="name">{contact.name}</div>
        <div className="meta">{contact.phone} • {contact.email}</div>
      </div>
      <button 
        className="delete-btn" 
        onClick={() => onDelete(contact.id)}
        aria-label="Delete contact"
      >
        🗑️ Delete
      </button>
    </li>
  )
}
