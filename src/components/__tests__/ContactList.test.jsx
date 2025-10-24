import React from 'react'
import { test, expect } from 'vitest'
import { render, screen } from '@testing-library/react'
import ContactList from '../ContactList'

test('renders empty message when no contacts', () => {
  render(<ContactList contacts={[]} />)
  const node = screen.queryByText(/no contacts found/i)
  expect(node).toBeTruthy()
})

test('renders contacts', () => {
  const list = [{ id: 1, name: 'Test User', phone: '1', email: 'a@b' }]
  render(<ContactList contacts={list} />)
  const node = screen.queryByText(/Test User/)
  expect(node).toBeTruthy()
})
