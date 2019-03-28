import * as React from 'react'
import { Box } from '../atoms/Box'
import { Text } from '../atoms/Text'
import { Container } from '../atoms/Container'

export const Footer: React.FunctionComponent = props => (
  <Box as="footer" bg="#070f29">
    <Container py={[6, 9]}>
      <Box width={[1]}>
        <Text fontWeight={5} fontSize={3} color="white">
          Nebulous
        </Text>
        <Box pt={4}>
          <Text color="indigo.7">© 2019 Nebulous</Text>
        </Box>
      </Box>
    </Container>
  </Box>
)
