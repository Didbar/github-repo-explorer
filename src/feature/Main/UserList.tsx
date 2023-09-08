import { Accordion, Text, VStack } from '@chakra-ui/react'
import GithubUser from 'src/entities/User'
import User from 'src/feature/Main/User'
import useUserQueryStore from 'src/store'
import { generateUserInfoText } from 'src/utils/userUtils'

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
          <User user={user} key={user.id} />
        ))}
      </Accordion>
    </VStack>
  )
}

export default UserList
