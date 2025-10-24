import React, { useState } from 'react'

export default function AddContact({ onAdd }) {
  const [name, setName] = useState('')
  const [phone, setPhone] = useState('')
  const [email, setEmail] = useState('')
  const [error, setError] = useState('')

  function handlePhoneChange(e) {
    const value = e.target.value.replace(/\D/g, '') // Remove non-digits
    if (value.length <= 10) {
      setPhone(value)
      setError('')
    }
  }

  function submit(e) {
    e.preventDefault()
    if (!name.trim()) {
      setError('Name is required')
      return
    }
    if (phone.length !== 10) {
      setError('Phone must be exactly 10 digits')
      return
    }
    if (!email.trim()) {
      setError('Email is required')
      return
    }
    
    onAdd({ name: name.trim(), phone: phone.trim(), email: email.trim() })
    setName('')
    setPhone('')
    setEmail('')
    setError('')
  }

  return (
    <form className="add-form" onSubmit={submit}>
      <h2>Add Contact</h2>
      <input 
        placeholder="Name" 
        value={name} 
        onChange={e => setName(e.target.value)}
        required
      />
      <input 
        placeholder="Phone (10 digits)" 
        value={phone} 
        onChange={handlePhoneChange}
        type="tel"
        pattern="[0-9]{10}"
        required
      />
      <input 
        placeholder="Email" 
        value={email} 
        onChange={e => setEmail(e.target.value)}
        type="email"
        required
      />
      {error && <div className="error-message">{error}</div>}
      <button type="submit">Add</button>
    </form>
  )
}
