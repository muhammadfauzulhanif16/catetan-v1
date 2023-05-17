import React from 'react'
import {
  Icon,
  Input,
  InputGroup,
  InputLeftElement,
  SimpleGrid,
  Text
} from '@chakra-ui/react'
import { Search } from '@emotion-icons/fluentui-system-filled'

export const HeaderApp = ({ search, onSearchNote }) => (
  <SimpleGrid
    fontWeight={600}
    py={2}
    justifyContent='space-between'
    alignItems='center'
    columns={2}
  >
    <Text fontSize={32}>Catetan</Text>

    <InputGroup>
      <InputLeftElement>
        <Icon as={Search} />
      </InputLeftElement>
      <Input
        placeholder='Search note...'
        bgColor='gray.100'
        onChange={onSearchNote}
        type='search'
        value={search}
      />
    </InputGroup>
  </SimpleGrid>
)
