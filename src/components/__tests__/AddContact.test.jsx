import React from 'react'
import { test, expect, vi } from 'vitest'
import { render, screen } from '@testing-library/react'
import userEvent from '@testing-library/user-event'
import AddContact from '../AddContact'

test('calls onAdd when form submitted', async () => {
  const user = userEvent.setup()
  const onAdd = vi.fn()
  render(<AddContact onAdd={onAdd} />)

  await user.type(screen.getByPlaceholderText(/name/i), 'New Name')
  await user.type(screen.getByPlaceholderText(/phone/i), '123')
  await user.type(screen.getByPlaceholderText(/email/i), 'n@e')
  await user.click(screen.getByRole('button', { name: /add/i }))

  expect(onAdd).toHaveBeenCalledTimes(1)
  const arg = onAdd.mock.calls[0][0]
  expect(arg).toBeTruthy()
  expect(arg.name).toBe('New Name')
})
