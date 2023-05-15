'use client'
import React from 'react';
// components
import { Header } from '@/components/Header';
import { SideBar } from '@/components/SideBar';
import { Box,  Button,  Divider,  Flex, HStack, Heading, SimpleGrid, VStack } from '@chakra-ui/react';
import { Input } from '../../../components/Form/Input'

const UserCreate: React.FC = () => (
    <Box>
        <Header />

        <Flex w="100%" my="6" maxWidth={1400} mx="auto" px="6">
            <SideBar />
            <Box flex='1' borderRadius={8} bg='gray.800' p='8'>
                <Heading size='lg' fontWeight='normal'>Criar usuários</Heading>

                <Divider my='6' borderColor='gray.700' />

                <VStack spacing='8'>
                    <SimpleGrid minChildWidth={'240px'} spacing={'8'} w='100%'>
                        <Input name='name' label='Nome completo' />
                        <Input name='email' label='E-mail' type='email' />
                    </SimpleGrid>

                    <SimpleGrid minChildWidth={'240px'} spacing={'8'} w='100%'>
                        <Input name='password' type='password' label='Senha' />
                        <Input name='password_confirmation' type='password' label='Confirme a senha' />
                    </SimpleGrid>
                </VStack>

                <Flex mt='8' justify={'flex-end'}>
                    <HStack spacing='4'>
                        <Button colorScheme='whiteAlpha'>Cancelar</Button>
                        <Button colorScheme='pink'>Salvar</Button>
                    </HStack>
                </Flex>
            </Box>
        </Flex>
    </Box>
)

export default UserCreate;