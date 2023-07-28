import {
  Text,
  VStack,
  Accordion,
  AccordionItem,
  AccordionButton,
  AccordionPanel,
  AccordionIcon,
  Box,
  Heading
} from '@chakra-ui/react'
import RepositoryLits from './RepositoryLits'

const UserList = () => {
  return (
    <VStack w='100%' align='flex-start' my={2}>
      <Text fontSize='sm'>Showing users for 'User Here'</Text>
      <Accordion allowToggle w='100%' my={2}>
        <AccordionItem>
          <Heading>
            <AccordionButton>
              <Box as='span' flex='1' textAlign='left'>
                UserName1
              </Box>
              <AccordionIcon />
            </AccordionButton>
          </Heading>
          <AccordionPanel pb={4}>
            <VStack maxH='325px' overflow='scroll'>
              <RepositoryLits />
              <RepositoryLits />
              <RepositoryLits />
              <RepositoryLits />
            </VStack>
          </AccordionPanel>
        </AccordionItem>
        <AccordionItem>
          <Heading>
            <AccordionButton>
              <Box as='span' flex='1' textAlign='left'>
                UserName1
              </Box>
              <AccordionIcon />
            </AccordionButton>
          </Heading>
          <AccordionPanel pb={4}>
            <VStack maxH='325px' overflow='scroll'>
              <RepositoryLits />
              <RepositoryLits />
              <RepositoryLits />
              <RepositoryLits />
            </VStack>
          </AccordionPanel>
        </AccordionItem>

        <AccordionItem>
          <Heading>
            <AccordionButton>
              <Box as='span' flex='1' textAlign='left'>
                UserName1
              </Box>
              <AccordionIcon />
            </AccordionButton>
          </Heading>
          <AccordionPanel pb={4}>
            <VStack maxH='325px' overflow='scroll'>
              <RepositoryLits />
              <RepositoryLits />
              <RepositoryLits />
              <RepositoryLits />
            </VStack>
          </AccordionPanel>
        </AccordionItem>
        <AccordionItem>
          <Heading>
            <AccordionButton>
              <Box as='span' flex='1' textAlign='left'>
                UserName1
              </Box>
              <AccordionIcon />
            </AccordionButton>
          </Heading>
          <AccordionPanel pb={4}>
            <VStack maxH='325px' overflow='scroll'>
              <RepositoryLits />
              <RepositoryLits />
              <RepositoryLits />
              <RepositoryLits />
            </VStack>
          </AccordionPanel>
        </AccordionItem>
        <AccordionItem>
          <Heading>
            <AccordionButton>
              <Box as='span' flex='1' textAlign='left'>
                UserName1
              </Box>
              <AccordionIcon />
            </AccordionButton>
          </Heading>
          <AccordionPanel pb={4}>
            <VStack maxH='325px' overflow='scroll'>
              <RepositoryLits />
              <RepositoryLits />
              <RepositoryLits />
              <RepositoryLits />
            </VStack>
          </AccordionPanel>
        </AccordionItem>
      </Accordion>
    </VStack>
  )
}

export default UserList
