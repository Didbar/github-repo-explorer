import {
  AccordionButton,
  AccordionIcon,
  AccordionItem,
  AccordionPanel,
  Box,
  Heading
} from '@chakra-ui/react'
import { useState } from 'react'
import useRepositories from '../../hooks/useRepositories'
import Error from '../common/Error'
import Loader from '../common/Loader'
import RepositoryLits from './RepositoryLits'
import GithubUser from '../../entities/User'

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
  if (error) return <Error>{error.message}</Error>

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
      <AccordionPanel pb={4} width='100%' maxH='325px' overflow='scroll'>
        <RepositoryLits repositoryList={data} />
      </AccordionPanel>
    </AccordionItem>
  )
}

export default User
