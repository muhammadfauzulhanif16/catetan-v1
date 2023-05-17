import { Flex, Icon, SimpleGrid, TabPanel, Text } from '@chakra-ui/react'
import React from 'react'
import { NoteItem } from './NoteItem'
import { Note } from '@emotion-icons/fluentui-system-filled'

export const NotePanel = ({ datas, onArchiveNote, onDeleteNote }) => (
  <TabPanel px={0} py={[4, 8]}>
    {datas.length > 0
      ? (
      <SimpleGrid columns={{ base: 2, lg: 3, xl: 4 }} spacing={[4, 8]}>
        {datas.map((data) => (
          <NoteItem
            key={data.id}
            data={data}
            onArchiveNote={onArchiveNote}
            onDeleteNote={onDeleteNote}
          />
        ))}
      </SimpleGrid>
        )
      : (
      <Flex
        h='50vh'
        justifyContent='center'
        alignItems='center'
        direction='column'
        color='gray.400'
      >
        <Icon as={Note} w={16} h={16} mb={4} />

        <Text fontWeight={500} fontSize={[16, 20]} textAlign='center'>
          No notes yet. <br /> Add one or more notes.
        </Text>
      </Flex>
        )}
  </TabPanel>
)
