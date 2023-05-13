'use client'
import React from 'react';
// components
import { Header } from '@/components/Header';
import { SideBar } from '@/components/SideBar';
import { Box, Button, Checkbox, Flex, Heading, Icon, Table, Tbody, Td, Text, Th, Thead, Tr } from '@chakra-ui/react';
import { RiAddLine, RiPencilLine } from 'react-icons/ri';

// import { Container } from './styles';

const users: React.FC = () => (
    <Box>
        <Header />
        <Flex w="100%" my="6" maxWidth={1400} mx="auto" px="6">
            <SideBar />
            <Box flex='1' borderRadius={8} bg='gray.800' p='8'>
                <Flex mb='8' justify={'space-between'} align={'center'}>
                    <Heading size='lg' fontWeight={'normal'}>Usuários</Heading>

                    <Button 
                        as='a' 
                        size='sm' 
                        fontSize='sm' 
                        colorScheme='pink' 
                        leftIcon={<Icon  as={RiAddLine} fontSize='16' />}
                    >
                        Criar novo
                    </Button>
                </Flex>

                <Table colorScheme='whiteAlpha'>
                    <Thead>
                        <Tr>
                            <Th px='6' color='gray.300' width='8'>
                                <Checkbox colorScheme='pink' />
                            </Th>
                            <Th>Usuário</Th>
                            <Th>Data de cadastro</Th>
                            <Th>Ações</Th>
                        </Tr>
                    </Thead>
                    <Tbody>
                        <Tr>
                            <Td px='6' >
                                <Checkbox colorScheme='pink' />
                            </Td>
                            <Td>
                                <Box>
                                    <Text fontWeight={'bold'}>Bruno Henrique</Text>
                                    <Text fontWeight={'sm'} color={'gray.300'}>Bruno.henrique@gmail.com</Text>
                                </Box>
                            </Td>
                            <Td>22/22/222</Td>
                            <Td>
                                <Button 
                                    as='a' 
                                    size='sm' 
                                    fontSize='sm' 
                                    colorScheme='purple' 
                                    leftIcon={<Icon as={RiPencilLine} />}
                                >
                                    Editar
                                </Button>
                            </Td>
                        </Tr>
                    </Tbody>
                </Table>
            </Box>
        </Flex>
    </Box>
)

export default users;