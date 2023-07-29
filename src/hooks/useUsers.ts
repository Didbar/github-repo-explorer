import { useQuery } from '@tanstack/react-query'
import UserClient, { FetchResponseUser } from '../services/user-client'
import ms from 'ms'
import useUserQueryStore from '../store'
import { UserLimit } from '../constants'

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
          per_page: userQuery.limit || UserLimit
        }
      }),
    staleTime: ms('1m')
  })
}

export default useUsers
