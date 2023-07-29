import { Text, VStack, Accordion } from '@chakra-ui/react'
import { GithubUser } from '../../services/user-client'
import User from './User'
import { Fragment } from 'react'
import { generateUserInfoText } from '../../utils/userUtils'

interface UserListProps {
  searchedUser: string
  users: GithubUser[]
}
const UserList = ({ users, searchedUser }: UserListProps) => {
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
