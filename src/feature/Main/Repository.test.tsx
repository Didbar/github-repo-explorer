import '@testing-library/jest-dom/extend-expect'
import { render, screen } from '@testing-library/react'
import { REPO_HAS_NO_DESCRIPTION } from 'src/constants'
import Repository from 'src/feature/Main/Repository'

function renderComponent(desc = 'Test Repository Description') {
  const mockRepo = {
    id: 1,
    name: 'Test Repository',
    stargazers_count: 42,
    description: desc
  }
  render(<Repository repo={mockRepo} />)

  return mockRepo
}

describe('Repository component', () => {
  test('renders the repository name and star count correctly', () => {
    const mockRepo = renderComponent()
    const repositoryName = screen.getByText(mockRepo.name)
    const starCount = screen.getByText(mockRepo.stargazers_count.toString())

    expect(repositoryName).toBeInTheDocument()
    expect(starCount).toBeInTheDocument()
  })

  test('renders the star icon correctly', () => {
    renderComponent()

    const starIcon = screen.getByRole('star-icon')

    expect(starIcon).toBeInTheDocument()
  })

  test('renders the description correctly', () => {
    const mockRepo = renderComponent()

    const description = screen.getByText(mockRepo.description)

    expect(description).toBeInTheDocument()
  })

  test('renders default description text when repository has no description', () => {
    renderComponent('')

    const defaultDescription = screen.getByText(REPO_HAS_NO_DESCRIPTION)

    expect(defaultDescription).toBeInTheDocument()
  })
})
