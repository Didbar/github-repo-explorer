import {
  VStack,
  AccordionButton,
  AccordionPanel,
  AccordionIcon,
  Box,
  Heading,
  Text
} from '@chakra-ui/react'
import { GithubUser } from '../../services/user-client'
import useRepositories from '../../hooks/useRepositories'
import Loader from '../common/Loader'
import RepositoryLits from './RepositoryLits'

interface UserProps {
  user: GithubUser
}

const User = ({ user }: UserProps) => {
  const { data, error, isLoading } = useRepositories(user.login)

  if (isLoading) return <Loader />
  if (error) return <Text>{error.message}</Text>

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
          <RepositoryLits repositoryList={data} />
        </VStack>
      </AccordionPanel>
    </>
  )
}

export default User
