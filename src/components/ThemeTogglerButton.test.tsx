import { render, screen } from '@testing-library/react'
import ThemeToggleButton from 'src/components/ThemeToggleButton'

describe('ThemeTogglerButton component', () => {
  test('correctly renders theme toggler icon', async () => {
    render(<ThemeToggleButton />)

    const icon = await screen.findByRole('theme-toggler')

    expect(icon).toBeVisible()
  })
})
