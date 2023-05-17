import {
  Box,
  Tab,
  TabIndicator,
  TabList,
  TabPanels,
  Tabs
} from '@chakra-ui/react'
import React from 'react'
import { NotePanel } from './NotePanel'

export const NoteTabs = ({ notes, onArchiveNote, onDeleteNote }) => {
  const notesFiltering = (notes, filter) => {
    return notes.filter(({ archived }) => archived === filter)
  }

  const notesActive = notesFiltering(notes, false)
  const notesArchived = notesFiltering(notes, true)

  const notesFilter = [
    { title: 'All Notes', datas: notesActive },
    { title: 'Archived', datas: notesArchived }
  ]

  return (
    <Tabs isFitted position='relative' variant='unstyled'>
      <Box pos='sticky' top={0} bgColor='gray.50'>
        <TabList>
          {notesFilter.map(({ title }, id) => (
            <Tab fontWeight={500} key={id} fontSize={[16, 20]}>
              {title}
            </Tab>
          ))}
        </TabList>

        <TabIndicator
          mt='-1.5px'
          height='2px'
          bgColor='blue.200'
          borderRadius='1px'
        />
      </Box>

      <TabPanels>
        {notesFilter.map(({ datas }, id) => (
          <NotePanel
            key={id}
            datas={datas}
            onArchiveNote={onArchiveNote}
            onDeleteNote={onDeleteNote}
          />
        ))}
      </TabPanels>
    </Tabs>
  )
}
