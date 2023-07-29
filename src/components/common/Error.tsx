import { Text } from '@chakra-ui/react'
import { ReactNode } from 'react'

interface Props {
  children: ReactNode
}

const Error = ({ children }: Props) => {
  return <Text color='red'>{children}</Text>
}

export default Error
