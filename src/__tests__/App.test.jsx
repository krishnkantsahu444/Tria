import React from 'react'
import { test, expect } from 'vitest'
import { render, screen } from '@testing-library/react'
import userEvent from '@testing-library/user-event'
import App from '../App'

test('search filters contacts', async () => {
  const user = userEvent.setup()
  render(<App />)
  const input = screen.getByPlaceholderText(/search by name/i)
  await user.type(input, 'alice')
  const node = screen.queryByText(/Alice Johnson/)
  expect(node).toBeTruthy()
})
