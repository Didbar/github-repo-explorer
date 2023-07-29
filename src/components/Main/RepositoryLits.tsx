import { Text, VStack, useColorModeValue } from '@chakra-ui/react'
import { GitHubRepository } from '../../services/user-client'
import Repository from './Repository'
import { Fragment } from 'react'

interface RepositoryLitsProps {
  repositoryList: GitHubRepository[]
}
const RepositoryLits = ({ repositoryList }: RepositoryLitsProps) => {
  const AccordionPanelBackground = useColorModeValue('gray.200', 'gray.900')

  if (repositoryList.length === 0) return <Text>No data available</Text>

  return (
    <VStack
      p='1rem 0.5rem'
      bg={AccordionPanelBackground}
      align='flex-start'
      borderRadius='4px'>
      {repositoryList.map((repo) => (
        <Fragment key={repo.id}>
          <Repository repo={repo} />
        </Fragment>
      ))}
    </VStack>
  )
}

export default RepositoryLits
