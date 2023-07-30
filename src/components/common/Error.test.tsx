import { render, screen } from '@testing-library/react'
import '@testing-library/jest-dom/extend-expect'
import Error from './Error'

describe('Error component', () => {
  test('renders the error message correctly', () => {
    const errorMessage = 'This is an error message.'
    render(<Error>{errorMessage}</Error>)
    const errorText = screen.getByText(errorMessage)

    expect(errorText).toBeInTheDocument()
    expect(errorText).toHaveStyle('color: rgb(255, 0, 0)')
  })
})
