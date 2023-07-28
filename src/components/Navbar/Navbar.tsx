import { HStack } from '@chakra-ui/react'
import ThemeToggleButton from './ThemeToggleButton'

const Navbar = () => {
  return (
    <HStack justify='flex-end'>
      <ThemeToggleButton />
    </HStack>
  )
}

export default Navbar
