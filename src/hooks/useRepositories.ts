import { useQuery } from '@tanstack/react-query'
import UserClient, { GitHubRepository } from '../services/user-client'
import ms from 'ms'

const userClient = new UserClient()

const useRepositories = (username: string) => {
  return useQuery<GitHubRepository[], Error>({
    queryKey: ['user', username, 'repos'],
    queryFn: () => userClient.getUserRepositories(username),
    staleTime: ms('1m')
  })
}

export default useRepositories
