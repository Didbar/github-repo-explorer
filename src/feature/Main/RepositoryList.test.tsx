import '@testing-library/jest-dom/extend-expect'
import { render, screen } from '@testing-library/react'
import { NO_DATA_AVAILABLE } from 'src/constants'
import GitHubRepository from 'src/entities/Repository'
import RepositoryList from 'src/feature/Main/RepositoryLits'

const mockRepositoryList: GitHubRepository[] = [
  {
    id: 1,
    name: 'Test Repository 1',
    description: 'description for repo',
    stargazers_count: 42
  },
  {
    id: 2,
    name: 'Test Repository 2',
    description: '',
    stargazers_count: 64
  }
]

describe('RepositoryList component', () => {
  test('renders no data available message if repositoryList is empty', () => {
    render(<RepositoryList repositoryList={[]} />)
    const noDataMessage = screen.getByText(NO_DATA_AVAILABLE)

    expect(noDataMessage).toBeInTheDocument()
  })

  test('renders the correct number of repositories', () => {
    render(<RepositoryList repositoryList={mockRepositoryList} />)

    const repositories = screen.getAllByText(/test repository/i)

    expect(repositories.length).toBe(mockRepositoryList.length)
  })

  test('renders each repository with correct name and stargazers count', () => {
    render(<RepositoryList repositoryList={mockRepositoryList} />)

    mockRepositoryList.forEach(async (repo) => {
      const repoTitle = await screen.findByRole('heading', {
        name: new RegExp(repo.name)
      })
      const repoStars = await screen.findByText(
        new RegExp(repo.stargazers_count.toString())
      )

      expect(repoTitle).toBeVisible()
      expect(repoStars).toBeVisible()
    })
  })
})
