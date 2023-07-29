import { useQuery } from '@tanstack/react-query'
import ms from 'ms'
import { USERS_LIMIT } from '../constants'
import UserClient, { FetchResponseUser } from '../services/user-client'
import useUserQueryStore from '../store'

const userClient = new UserClient()

const useUsers = () => {
  const userQuery = useUserQueryStore((s) => s.userQuery)

  return useQuery<FetchResponseUser, Error>({
    queryKey: ['users', userQuery],
    enabled: !!userQuery.searchedUser,
    queryFn: () =>
      userClient.searchUsers({
        params: {
          q: userQuery.searchedUser,
          per_page: userQuery.limit || USERS_LIMIT
        }
      }),
    staleTime: ms('1m')
  })
}

export default useUsers
