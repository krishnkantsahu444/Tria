import React, { useState } from 'react'

export default function AddContact({ onAdd }) {
  const [name, setName] = useState('')
  const [phone, setPhone] = useState('')
  const [email, setEmail] = useState('')

  function submit(e) {
    e.preventDefault()
    if (!name.trim()) return
    onAdd({ name: name.trim(), phone: phone.trim(), email: email.trim() })
    setName('')
    setPhone('')
    setEmail('')
  }

  return (
    <form className="add-form" onSubmit={submit}>
      <h2>Add Contact</h2>
      <input placeholder="Name" value={name} onChange={e => setName(e.target.value)} />
      <input placeholder="Phone" value={phone} onChange={e => setPhone(e.target.value)} />
      <input placeholder="Email" value={email} onChange={e => setEmail(e.target.value)} />
      <button type="submit">Add</button>
    </form>
  )
}
