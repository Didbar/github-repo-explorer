import { Container, Flex, Text, VStack } from '@chakra-ui/react'
import UserSearchForm from './UserSearchForm'
import UserList from './UserList'
import useUsers from '../../hooks/useUsers'
import Loader from '../common/Loader'
import { useState } from 'react'

const Main = () => {
  const [searchedUser, setSearchedUser] = useState('')
  const { data, error, isLoading } = useUsers(searchedUser)

  return (
    <main>
      <Flex justify='center' align='center' w='100vw' h='95vh'>
        <Container maxW='md' boxShadow='xl' p='2rem'>
          <VStack minHeight='50vh'>
            <UserSearchForm onSearch={(username) => setSearchedUser(username)} />
            {isLoading && <Loader />}
            {error && <Text color='red'>{error.message}</Text>}
            {data && <UserList users={data.items} searchedUser={searchedUser} />}
          </VStack>
        </Container>
      </Flex>
    </main>
  )
}

export default Main
