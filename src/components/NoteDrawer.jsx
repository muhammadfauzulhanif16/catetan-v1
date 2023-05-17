import {
  Drawer,
  DrawerBody,
  DrawerCloseButton,
  DrawerContent,
  DrawerHeader,
  DrawerOverlay,
  Input,
  Textarea
} from '@chakra-ui/react'
import React from 'react'

export const NoteDrawer = ({ isOpen, onClose, firstField, data }) => {
  return (
    <Drawer
      isOpen={isOpen}
      placement='right'
      initialFocusRef={firstField}
      onClose={onClose}
      closeOnOverlayClick={false}
    >
      <DrawerOverlay />
      <DrawerContent borderStartRadius={8}>
        <DrawerCloseButton />
        <DrawerHeader borderBottomWidth='1px'>View a note</DrawerHeader>

        <DrawerBody>
          <Input
            variant='unstyled'
            mb={4}
            value={data.createdAt}
            color='gray.400'
          />
          <Input
            fontSize={24}
            variant='unstyled'
            size='lg'
            mb={4}
            value={data.title}
          />
          <Textarea
            variant='unstyled'
            color='gray.600'
            resize='none'
            value={data.body}
          />
        </DrawerBody>
      </DrawerContent>
    </Drawer>
  )
}
