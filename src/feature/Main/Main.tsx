import { Container, Flex, Text, VStack } from '@chakra-ui/react'
import Error from 'src/components/Error'
import Loader from 'src/components/Loader'
import { NO_SEARCH_QUERY_TEXT } from 'src/constants'
import useUsers from 'src/hooks/useUsers'
import UserList from 'src/feature/Main/UserList'
import UserSearchForm from 'src/feature/Main/UserSearchForm'

const Main = () => {
  const { data, error, isInitialLoading } = useUsers()
  const noDataAvailable = <Text>{NO_SEARCH_QUERY_TEXT}</Text>

  return (
    <main>
      <Flex justify='center' align='center' w='100vw' h='95vh'>
        <Container maxW='md' boxShadow='xl' p='2rem'>
          <VStack minHeight='50vh'>
            <UserSearchForm />
            {isInitialLoading && <Loader />}
            {error && <Error>{error.message}</Error>}
            {data ? <UserList users={data.items} /> : noDataAvailable}
          </VStack>
        </Container>
      </Flex>
    </main>
  )
}

export default Main
