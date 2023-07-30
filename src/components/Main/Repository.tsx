import { HStack, Heading, Text } from '@chakra-ui/react'
import { BsStarFill } from 'react-icons/bs'
import GitHubRepository from '../../entities/Repository'
import { REPO_HAS_NO_DESCRIPTION } from '../../constants'

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
          <BsStarFill role='star-icon' />
        </HStack>
      </HStack>
      <Text>{repo.description ? repo.description : REPO_HAS_NO_DESCRIPTION}</Text>
    </>
  )
}

export default Repository
