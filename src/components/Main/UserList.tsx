import { Text, VStack, Accordion } from '@chakra-ui/react'
import { GithubUser } from '../../services/user-client'
import User from './User'
import { Fragment } from 'react'
import { generateUserInfoText } from '../../utils/userUtils'
import useUserQueryStore from '../../store'

interface UserListProps {
  users: GithubUser[]
}
const UserList = ({ users }: UserListProps) => {
  const searchedUser = useUserQueryStore((s) => s.userQuery.searchedUser)
  return (
    <VStack w='100%' align='flex-start' my={2}>
      <Text fontSize='sm'>{generateUserInfoText(searchedUser)}</Text>
      <Accordion allowToggle w='100%' my={2}>
        {users.map((user) => (
          <Fragment key={user.id}>
            <User user={user} />
          </Fragment>
        ))}
      </Accordion>
    </VStack>
  )
}

export default UserList
