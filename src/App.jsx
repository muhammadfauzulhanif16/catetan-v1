import React, { useState } from 'react'
import { Box, useDisclosure, useToast } from '@chakra-ui/react'
import { HeaderApp } from './components/HeaderApp'
import { AddNoteModal } from './components/AddNoteModal'
import { NoteTabs } from './components/NoteTabs'
import { AddNoteButton } from './components/AddNoteButton'

export const App = () => {
  const { isOpen, onOpen, onClose } = useDisclosure()
  const toast = useToast()

  let [notes, setNotes] = useState([])
  const [note, setNote] = useState({
    title: {
      content: '',
      max: 50
    },
    body: {
      content: ''
    }
  })
  const [search, setSearch] = useState('')

  const onTitleChange = (e) => {
    if (e.target.value.length <= 50) {
      setNote({
        title: {
          content: e.target.value,
          max: note.title.max - note.title.content.length
        },
        body: {
          content: note.body.content
        }
      })
    }
  }
  const onBodyChange = (e) => {
    setNote({
      title: {
        content: note.title.content,
        max: note.title.max
      },
      body: {
        content: e.target.value
      }
    })
  }

  const onAddNote = () => {
    const newNote = {
      id: +new Date(),
      title: note.title.content,
      body: note.body.content,
      archived: false,
      createdAt: new Date().toLocaleString()
    }

    setNotes([...notes, newNote])

    setNote({
      title: {
        content: '',
        max: 50
      },
      body: {
        content: ''
      }
    })

    toast({
      title: `Note "${newNote.title}" created successfully.`,
      status: 'success',
      duration: 4000,
      position: 'top-right',
      isClosable: true
    })

    onClose()
  }

  const onArchiveNote = (id) => {
    const newNotes = notes.map((note) =>
      note.id === id
        ? {
            ...note,
            archived: !note.archived
          }
        : note
    )

    setNotes(newNotes)
  }

  const onDeleteNote = (data) => {
    const newNotes = notes.filter((note) => note.id !== data.id)

    setNotes(newNotes)

    toast({
      title: `Note "${data.title}" deleted successfully.`,
      status: 'success',
      duration: 4000,
      position: 'top-right',
      isClosable: true
    })
  }

  const onSearchNote = (e) => {
    setSearch(e.target.value)
  }

  notes = notes.filter((note) => {
    return note === ''
      ? note
      : note.title.toLowerCase().includes(search.toLowerCase())
  })

  return (
    <Box
      bgColor='gray.50'
      h='100vh'
      color='gray.900'
      px={[4, 8, 16]}
      fontFamily='Instrument Sans'
    >
      <HeaderApp search={search} onSearchNote={onSearchNote} />

      <NoteTabs
        notes={notes}
        onArchiveNote={onArchiveNote}
        onDeleteNote={onDeleteNote}
      />

      <AddNoteModal
        isOpen={isOpen}
        onClose={onClose}
        note={note}
        onTitleChange={onTitleChange}
        onBodyChange={onBodyChange}
        onAddNote={onAddNote}
      />

      <AddNoteButton onOpen={onOpen} />
    </Box>
  )
}
