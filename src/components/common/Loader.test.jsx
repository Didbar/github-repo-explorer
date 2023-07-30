import { render, screen } from '@testing-library/react'
import Loader from './Loader'

describe('Loader component', () => {
  test('correctly renders loader', async () => {
    render(<Loader />)

    expect(screen.getByText(/loading/i)).toBeInTheDocument()
  })
})
