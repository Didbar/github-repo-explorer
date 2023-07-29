import { HStack, Heading, Text } from '@chakra-ui/react'
import { BsStarFill } from 'react-icons/bs'
import { GitHubRepository } from '../../services/user-client'

interface RepositoryProps {
  repo: GitHubRepository
}
const Repository = ({ repo }: RepositoryProps) => {
  return (
    <>
      <HStack w='100%' justify='space-between'>
        <Heading fontSize='md'>{repo.name}</Heading>
        <HStack>
          <Text>{repo.stargazers_count}</Text>
          <BsStarFill />
        </HStack>
      </HStack>
      <Text>{repo.description ? repo.description : 'No description available'}</Text>
    </>
  )
}

export default Repository
