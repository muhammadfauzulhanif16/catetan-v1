import {
  IconButton,
  Menu,
  MenuButton,
  MenuItem,
  MenuList,
  useDisclosure
} from '@chakra-ui/react'
import React, { useRef } from 'react'
import { NoteAlertDialog } from './NoteAlertDialog'
import { NoteDrawer } from './NoteDrawer'
import { MoreHorizontal } from '@emotion-icons/fluentui-system-filled'

export const NoteMenu = ({ data, onArchiveNote, onDeleteNote }) => {
  const {
    isOpen: isOpenDelete,
    onOpen: onOpenDelete,
    onClose: onCloseDelete
  } = useDisclosure()
  const {
    isOpen: isOpenView,
    onOpen: onOpenView,
    onClose: onCloseView
  } = useDisclosure()
  const cancelRef = useRef()

  return (
    <Menu>
      <MenuButton
        as={IconButton}
        aria-label='Options'
        icon={<MoreHorizontal size={32} />}
        variant='ghost'
        color='blue.200'
        _hover={{ color: 'blue.300' }}
      />

      <MenuList>
        <MenuItem onClick={onOpenView}>
          View
          <NoteDrawer data={data} isOpen={isOpenView} onClose={onCloseView} />
        </MenuItem>

        <MenuItem onClick={() => onArchiveNote(data.id)}>
          {data.archived ? 'Unarchive' : 'Archive'}
        </MenuItem>

        <MenuItem onClick={onOpenDelete}>
          Delete
          <NoteAlertDialog
            data={data}
            isOpen={isOpenDelete}
            onClose={onCloseDelete}
            cancelRef={cancelRef}
            onDeleteNote={onDeleteNote}
          />
        </MenuItem>
      </MenuList>
    </Menu>
  )
}
