import { Text, VStack, useColorModeValue } from '@chakra-ui/react'
import { Fragment } from 'react'
import { NO_DATA_AVAILABLE } from '../../constants'
import GitHubRepository from '../../entities/Repository'
import Repository from './Repository'

interface RepositoryLitsProps {
  repositoryList: GitHubRepository[]
}
const RepositoryLits = ({ repositoryList }: RepositoryLitsProps) => {
  const AccordionPanelBackground = useColorModeValue('gray.200', 'gray.900')

  if (repositoryList.length === 0) return <Text>{NO_DATA_AVAILABLE}</Text>

  return (
    <VStack
      w='100%'
      overflow='scroll'
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
