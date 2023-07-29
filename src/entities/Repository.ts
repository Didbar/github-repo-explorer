export default interface GitHubRepository {
  id: number
  name: string
  description: string | null
  stargazers_count: number
}
