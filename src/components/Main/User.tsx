import {
  VStack,
  AccordionButton,
  AccordionPanel,
  AccordionIcon,
  Box,
  Heading
} from '@chakra-ui/react'
import { GithubUser } from '../../services/user-client'
import RepositoryLits from './RepositoryLits'

interface UserProps {
  user: GithubUser
}

const User = ({ user }: UserProps) => {
  return (
    <>
      <Heading>
        <AccordionButton>
          <Box as='span' flex='1' textAlign='left'>
            {user.login}
          </Box>
          <AccordionIcon />
        </AccordionButton>
      </Heading>
      <AccordionPanel pb={4}>
        <VStack maxH='325px' overflow='scroll'>
          <RepositoryLits />
          <RepositoryLits />
          <RepositoryLits />
          <RepositoryLits />
        </VStack>
      </AccordionPanel>
    </>
  )
}

export default User
