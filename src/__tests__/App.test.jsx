import React from 'react'
import { test, expect } from 'vitest'
import { render, screen, waitFor } from '@testing-library/react'
import userEvent from '@testing-library/user-event'
import App from '../App'

test('search filters contacts', async () => {
  const user = userEvent.setup()
  render(<App />)
  
  // Wait for the app to load (API call completes)
  await waitFor(() => {
    expect(screen.queryByText(/loading/i)).toBeNull()
  }, { timeout: 3000 })
  
  const input = screen.getByPlaceholderText(/search by name/i)
  await user.type(input, 'leanne')
  const node = screen.queryByText(/Leanne/i)
  expect(node).toBeTruthy()
})
