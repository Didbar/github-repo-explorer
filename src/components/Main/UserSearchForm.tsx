import { FormControl, Input, Button } from '@chakra-ui/react'
import { FormEvent, useRef } from 'react'
import useUserQueryStore from '../../store'

const UserSearchForm = () => {
  const usernameRef = useRef<HTMLInputElement>(null)
  const setSearchedUser = useUserQueryStore((s) => s.setSearchedUser)

  const handleSubmit = (e: FormEvent) => {
    e.preventDefault()
    if (usernameRef.current) {
      setSearchedUser(usernameRef.current.value)
      usernameRef.current.value = ''
    }
  }
  return (
    <form onSubmit={handleSubmit} style={{ width: '100%' }}>
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
