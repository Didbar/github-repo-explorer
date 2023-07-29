import { Container, Flex, Text, VStack } from '@chakra-ui/react'
import UserSearchForm from './UserSearchForm'
import UserList from './UserList'
import useUsers from '../../hooks/useUsers'
import Loader from '../common/Loader'

const Main = () => {
  const testUsername = 'meta'
  const { data, error, isLoading } = useUsers(testUsername)

  if (isLoading) return <Loader />
  if (error) return <Text>{error.message}</Text>

  return (
    <main>
      <Flex justify='center' align='center' w='100vw' h='95vh'>
        <Container maxW='md' boxShadow='xl' p='2rem'>
          <VStack minHeight='50vh'>
            <UserSearchForm />
            <UserList users={data.items} />
          </VStack>
        </Container>
      </Flex>
    </main>
  )
}

export default Main
