import { render } from '@testing-library/react'
import Navbar from './Navbar'

vi.mock('../common/ThemeToggleButton.tsx', () => ({
  default: () => 'Mocked ThemeToggleButton'
}))

describe('Navbar component', () => {
  test('renders the ThemeToggleButton', () => {
    const { getByText } = render(<Navbar />)
    const themeToggleButton = getByText('Mocked ThemeToggleButton')

    expect(themeToggleButton).toBeInTheDocument()
  })

  test('places the ThemeToggleButton in the flex-end of HStack', () => {
    const { container } = render(<Navbar />)
    const hStack = container.querySelector('div')

    expect(hStack).toHaveStyle('justify-content: flex-end')
  })
})
