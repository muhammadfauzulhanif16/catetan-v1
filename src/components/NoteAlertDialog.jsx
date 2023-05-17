import {
  AlertDialog,
  AlertDialogBody,
  AlertDialogContent,
  AlertDialogFooter,
  AlertDialogHeader,
  AlertDialogOverlay,
  Button
} from '@chakra-ui/react'
import React from 'react'

export const NoteAlertDialog = ({
  data,
  isOpen,
  onClose,
  onDeleteNote,
  cancelRef
}) => (
  <AlertDialog
    isOpen={isOpen}
    leastDestructiveRef={cancelRef}
    onClose={onClose}
    isCentered
    closeOnOverlayClick={false}
  >
    <AlertDialogOverlay>
      <AlertDialogContent m={4}>
        <AlertDialogHeader fontSize='lg' fontWeight='bold'>
          Delete a note
        </AlertDialogHeader>

        <AlertDialogBody>{`Are you sure to delete this note "${data.title}"?`}</AlertDialogBody>

        <AlertDialogFooter>
          <Button ref={cancelRef} onClick={onClose} variant='ghost'>
            Cancel
          </Button>
          <Button colorScheme='red' onClick={() => onDeleteNote(data)} ml={3}>
            Delete
          </Button>
        </AlertDialogFooter>
      </AlertDialogContent>
    </AlertDialogOverlay>
  </AlertDialog>
)
