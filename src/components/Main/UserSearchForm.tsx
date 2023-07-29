import { FormControl, Input, Button } from '@chakra-ui/react'
import { useRef } from 'react'

interface Props {
  onSearch: (username: string) => void
}
const UserSearchForm = ({ onSearch }: Props) => {
  const usernameRef = useRef<HTMLInputElement>(null)
  return (
    <form
      onSubmit={(e) => {
        e.preventDefault()
        if (usernameRef.current) {
          onSearch(usernameRef.current.value)
          usernameRef.current.value = ''
        }
      }}>
      <FormControl>
        <Input
          type='username'
          placeholder='Enter username'
          borderRadius='4px'
          ref={usernameRef}
        />

        <Button
          colorScheme='blue'
          variant='outline'
          w='100%'
          my={4}
          borderRadius='4px'
          type='submit'>
          Search
        </Button>
      </FormControl>
    </form>
  )
}

export default UserSearchForm
