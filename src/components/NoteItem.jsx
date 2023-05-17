import { Box, Flex, Text } from '@chakra-ui/react'
import React from 'react'
import { NoteMenu } from './NoteMenu'

export const NoteItem = ({ data, onArchiveNote, onDeleteNote }) => (
  <Flex bg='gray.100' p={4} borderRadius={8} direction='column'>
    <Box h='full'>
      <Text noOfLines={1} color='gray.400' mb={1}>
        {data.createdAt}
      </Text>
      <Text noOfLines={1} fontSize={[16, 20]} fontWeight={500} mb={1}>
        {data.title}
      </Text>
      <Text noOfLines={2} color='gray.600'>
        {data.body}
      </Text>
    </Box>

    <NoteMenu
      data={data}
      onArchiveNote={onArchiveNote}
      onDeleteNote={onDeleteNote}
    />
  </Flex>
)
