import { HStack, Heading, Text } from '@chakra-ui/react'
import { BsStarFill } from 'react-icons/bs'
import { REPO_HAS_NO_DESCRIPTION } from 'src/constants'
import GitHubRepository from 'src/entities/Repository'

interface RepositoryProps {
  repo: GitHubRepository
}
const Repository = ({
  repo: { name, stargazers_count, description }
}: RepositoryProps) => {
  return (
    <>
      <HStack w='100%' justify='space-between'>
        <Heading fontSize='md'>{name}</Heading>
        <HStack>
          <Text>{stargazers_count}</Text>
          <BsStarFill role='star-icon' />
        </HStack>
      </HStack>
      <Text>{description || REPO_HAS_NO_DESCRIPTION}</Text>
    </>
  )
}

export default Repository
