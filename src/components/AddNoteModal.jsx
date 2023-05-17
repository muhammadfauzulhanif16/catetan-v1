import {
  Button,
  Input,
  InputGroup,
  InputRightElement,
  Modal,
  ModalBody,
  ModalContent,
  ModalFooter,
  ModalHeader,
  ModalOverlay,
  Textarea
} from '@chakra-ui/react'
import React from 'react'
import { InfoPopover } from './InfoPopover'

export const AddNoteModal = ({
  isOpen,
  onClose,
  note,
  setNote,
  onTitleChange,
  onBodyChange,
  onAddNote
}) => (
  <Modal
    closeOnOverlayClick={false}
    isOpen={isOpen}
    onClose={onClose}
    isCentered
    size='xl'
  >
    <ModalOverlay />
    <ModalContent m={4}>
      <ModalHeader>Add a new note</ModalHeader>
      <ModalBody>
        <InputGroup>
          <Input
            fontSize={24}
            variant='unstyled'
            size='lg'
            placeholder='Title'
            value={note.title.content}
            onChange={onTitleChange}
          />

          <InputRightElement>
            <InfoPopover
              color={
                !note.title.content || note.title.content.length > 50
                  ? 'red.400'
                  : 'green.400'
              }
              info={`Max ${note.title.max} chars left`}
            />
          </InputRightElement>
        </InputGroup>

        <InputGroup>
          <Textarea
            variant='unstyled'
            placeholder='Type anything'
            resize='none'
            value={note.body.content}
            onChange={onBodyChange}
          />

          <InputRightElement>
            <InfoPopover
              color={!note.body.content ? 'red.400' : 'green.400'}
              info="Can't be empty"
            />
          </InputRightElement>
        </InputGroup>
      </ModalBody>

      <ModalFooter>
        <Button
          bgColor='blue.200'
          _hover={{ bgColor: 'blue.300' }}
          mr={3}
          onClick={onAddNote}
          isDisabled={!note.title.content || !note.body.content}
        >
          Save
        </Button>
        <Button
          variant='ghost'
          onClick={() => {
            onClose()
            setNote({
              title: {
                content: note.title.content,
                max: 50
              },
              body: {
                content: note.body.content
              }
            })
          }}
        >
          Cancel
        </Button>
      </ModalFooter>
    </ModalContent>
  </Modal>
)
