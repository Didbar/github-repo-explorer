import '@testing-library/jest-dom/extend-expect'
import { render, screen } from '@testing-library/react'
import UserSearchForm from './UserSearchForm'

describe('UserSearchForm component', () => {
  test('component correctly shows input element', () => {
    render(<UserSearchForm />)

    const input = screen.getByPlaceholderText(/Enter username/i)

    expect(input).toBeVisible()
  })

  test('component correctly shows button element', () => {
    render(<UserSearchForm />)

    const button = screen.getByRole('button', { name: /search/i })

    expect(button).toBeVisible()
  })
})
