import { Container, Flex, VStack } from '@chakra-ui/react'
import UserSearchForm from './UserSearchForm'
import UserList from './UserList'

const Main = () => {
  return (
    <main>
      <Flex justify='center' align='center' w='100vw' h='95vh'>
        <Container maxW='md' boxShadow='xl' p='2rem'>
          <VStack minHeight='50vh'>
            <UserSearchForm />
            <UserList />
          </VStack>
        </Container>
      </Flex>
    </main>
  )
}

export default Main
