import { Text, VStack, useColorModeValue } from '@chakra-ui/react'
import { Fragment } from 'react'
import { NO_DATA_AVAILABLE } from 'src/constants'
import GitHubRepository from 'src/entities/Repository'
import Repository from 'src/feature/Main/Repository'

interface RepositoryLitsProps {
  repositoryList: GitHubRepository[]
}
const RepositoryLits = ({ repositoryList }: RepositoryLitsProps) => {
  const accordionPanelBackground = useColorModeValue('gray.200', 'gray.900')

  if (repositoryList.length === 0) return <Text>{NO_DATA_AVAILABLE}</Text>

  return (
    <VStack
      w='100%'
      overflow='scroll'
      p='1rem 0.5rem'
      bg={accordionPanelBackground}
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
