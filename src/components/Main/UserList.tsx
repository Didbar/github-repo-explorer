import { Text, VStack, Accordion, AccordionItem } from '@chakra-ui/react'
import { GithubUser } from '../../services/user-client'
import User from './User'

interface UserListProps {
  users: GithubUser[]
}
const UserList = ({ users }: UserListProps) => {
  return (
    <VStack w='100%' align='flex-start' my={2}>
      <Text fontSize='sm'>Showing users for 'User Here'</Text>
      <Accordion allowToggle w='100%' my={2}>
        {users.map((user) => (
          <AccordionItem key={user.id}>
            <User user={user} />
          </AccordionItem>
        ))}
      </Accordion>
    </VStack>
  )
}

export default UserList
