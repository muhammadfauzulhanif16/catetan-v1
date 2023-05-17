import { Button, Flex } from '@chakra-ui/react'
import { Add } from '@emotion-icons/fluentui-system-filled'
import React from 'react'

export const AddNoteButton = ({ onOpen }) => (
  <Flex
    justifyContent='center'
    position='fixed'
    bottom={0}
    w='full'
    left={0}
    mb={{ base: 4, md: 8 }}
  >
    <Button
      onClick={onOpen}
      leftIcon={<Add width={24} />}
      bgColor='blue.200'
      _hover={{ bgColor: 'blue.300' }}
      boxShadow='2xl'
    >
      Add new note
    </Button>
  </Flex>
)
