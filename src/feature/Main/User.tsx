import {
  AccordionButton,
  AccordionIcon,
  AccordionItem,
  AccordionPanel,
  Box,
  Heading
} from '@chakra-ui/react'
import Error from 'src/components/Error'
import Loader from 'src/components/Loader'
import GithubUser from 'src/entities/User'
import useRepositories from 'src/hooks/useRepositories'
import RepositoryLits from 'src/feature/Main/RepositoryLits'

interface UserProps {
  user: GithubUser
}

const User = ({ user: { login } }: UserProps) => {
  const { data, error, isLoading } = useRepositories(login)

  if (isLoading) return <Loader />
  if (error) return <Error>{error.message}</Error>

  return (
    <AccordionItem>
      <Heading>
        <AccordionButton>
          <Box as='span' flex='1' textAlign='left'>
            {login}
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
