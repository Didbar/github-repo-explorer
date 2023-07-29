import { Container, Flex, Text, VStack } from '@chakra-ui/react'
import useUsers from '../../hooks/useUsers'
import Loader from '../common/Loader'
import UserList from './UserList'
import UserSearchForm from './UserSearchForm'
import Error from '../common/Error'
import { NO_SEARCH_QUERY_TEXT } from '../../constants'

const Main = () => {
  const { data, error, isLoading, isFetching } = useUsers()
  const noDataAvailable = <Text>{NO_SEARCH_QUERY_TEXT}</Text>

  return (
    <main>
      <Flex justify='center' align='center' w='100vw' h='95vh'>
        <Container maxW='md' boxShadow='xl' p='2rem'>
          <VStack minHeight='50vh'>
            <UserSearchForm />
            {isLoading && isFetching && <Loader />}
            {error && <Error>{error.message}</Error>}
            {data ? <UserList users={data.items} /> : noDataAvailable}
          </VStack>
        </Container>
      </Flex>
    </main>
  )
}

export default Main
