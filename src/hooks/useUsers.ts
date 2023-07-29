import { useQuery } from '@tanstack/react-query'
import UserClient, { FetchResponseUser } from '../services/user-client'
import ms from 'ms'

const userClient = new UserClient()

const useUsers = (username: string) => {
  return useQuery<FetchResponseUser, Error>({
    queryKey: ['users'],
    queryFn: () => userClient.searchUsers(username),
    staleTime: ms('1m')
  })
}

export default useUsers
