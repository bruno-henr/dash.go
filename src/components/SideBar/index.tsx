"use client"

import { Box, Stack, Text,Icon, Link } from '@chakra-ui/react';
import React from 'react';
import { RiContactsLine, RiDashboardLine, RiGitMergeLine, RiInputMethodLine } from 'react-icons/ri';

export const SideBar: React.FC = () => {
  return (
    <Box as='aside' w='64' mr='8'>
        <Stack spacing='12' align='flex-start'>
            <Box>
                <Text fontSize='small' color='gray.400' fontWeight='bold'>GERAL</Text>
                <Stack spacing='4' mt='8' align='stretch'>
                    <Link display={'flex'} alignItems="center">
                        <Icon as={RiDashboardLine} fontSize={'20'} />
                        <Text ml='4' fontWeight='medium'>Dashboard</Text>
                    </Link>

                    <Link display={'flex'} alignItems="center">
                        <Icon as={RiContactsLine} fontSize={'20'} />
                        <Text ml='4' fontWeight='medium'>Usuários</Text>
                    </Link>
                </Stack>
            </Box>

            <Box>
                <Text fontSize='small' color='gray.400' fontWeight='bold'>AUTOMAÇÂO</Text>
                <Stack spacing='4' mt='8' align='stretch'>
                    <Link display={'flex'} alignItems="center">
                        <Icon as={RiInputMethodLine} fontSize={'20'} />
                        <Text ml='4' fontWeight='medium'>Formulários</Text>
                    </Link>

                    <Link display={'flex'} alignItems="center">
                        <Icon as={RiGitMergeLine} fontSize={'20'} />
                        <Text ml='4' fontWeight='medium'>Automação</Text>
                    </Link>
                </Stack>
            </Box>
        </Stack>
    </Box>
  )
}
