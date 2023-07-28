import { FormControl, Input, Button } from '@chakra-ui/react'

const UserSearchForm = () => {
  return (
    <FormControl>
      <Input type='username' placeholder='Enter username' borderRadius='4px' />

      <Button colorScheme='blue' variant='outline' w='100%' my={4} borderRadius='4px'>
        Search
      </Button>
    </FormControl>
  )
}

export default UserSearchForm
