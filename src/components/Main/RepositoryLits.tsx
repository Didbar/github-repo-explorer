import { HStack, Heading, Text, VStack, useColorModeValue } from '@chakra-ui/react'
import { BsStarFill } from 'react-icons/bs'

const RepositoryLits = () => {
  return (
    <VStack
      p='1rem 0.5rem'
      bg={useColorModeValue('gray.200', 'gray.900')}
      borderRadius='4px'>
      <HStack w='100%' justify='space-between'>
        <Heading fontSize='md'>Repository Title</Heading>
        <HStack>
          <Text>12</Text>
          <BsStarFill />
        </HStack>
      </HStack>
      <Text>
        Lorem, ipsum dolor sit amet consectetur adipisicing elit. Similique pariatur ex
        rerum dolore, cupiditate in veritatis cum nesciunt perferendis aperiam?
      </Text>
    </VStack>
  )
}

export default RepositoryLits
