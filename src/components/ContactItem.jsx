import React from 'react'

export default function ContactItem({ contact }) {
  return (
    <li className="contact-item">
      <div className="info">
        <div className="name">{contact.name}</div>
        <div className="meta">{contact.phone} • {contact.email}</div>
      </div>
    </li>
  )
}
