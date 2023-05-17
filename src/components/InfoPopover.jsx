import {
  Icon,
  Popover,
  PopoverBody,
  PopoverCloseButton,
  PopoverContent,
  PopoverTrigger
} from '@chakra-ui/react'
import { Info } from '@emotion-icons/fluentui-system-filled'
import React from 'react'

export const InfoPopover = ({ color, info }) => (
  <Popover placement='top-end'>
    <PopoverTrigger>
      <Icon as={Info} color={color} w={6} h={6} />
    </PopoverTrigger>

    <PopoverContent>
      <PopoverBody>{info}</PopoverBody>
      <PopoverCloseButton />
    </PopoverContent>
  </Popover>
)
