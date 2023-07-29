import { useQuery } from '@tanstack/react-query'
import UserClient from '../services/user-client'
import ms from 'ms'
import GitHubRepository from '../entities/Repository'

const userClient = new UserClient()

const useRepositories = (username: string) => {
  return useQuery<GitHubRepository[], Error>({
    queryKey: ['user', username, 'repos'],
    queryFn: () => userClient.getUserRepositories(username),
    staleTime: ms('1m')
  })
}

export default useRepositories
