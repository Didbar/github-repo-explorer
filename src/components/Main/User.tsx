import {
  VStack,
  AccordionButton,
  AccordionPanel,
  AccordionIcon,
  Box,
  Heading,
  Text,
  AccordionItem
} from '@chakra-ui/react'
import { GithubUser } from '../../services/user-client'
import useRepositories from '../../hooks/useRepositories'
import Loader from '../common/Loader'
import RepositoryLits from './RepositoryLits'
import { useState } from 'react'

interface UserProps {
  user: GithubUser
}

const User = ({ user }: UserProps) => {
  const { data, error, isLoading } = useRepositories(user.login)
  const [showDetails, setShowDetails] = useState(false)

  const handleUsernameClick = () => {
    setShowDetails(!showDetails)
  }

  if (isLoading) return <Loader />
  if (error) return <Text>{error.message}</Text>

  return (
    <AccordionItem onClick={handleUsernameClick}>
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
    </AccordionItem>
  )
}

export default User
