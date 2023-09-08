import { useQuery } from '@tanstack/react-query'
import ms from 'ms'
import GitHubRepository from 'src/entities/Repository'
import UserClient from 'src/services/user-client'

const userClient = new UserClient()

const useRepositories = (username: string) => {
  return useQuery<GitHubRepository[], Error>({
    queryKey: ['user', username, 'repos'],
    queryFn: () => userClient.getUserRepositories(username),
    staleTime: ms('1m')
  })
}

export default useRepositories
