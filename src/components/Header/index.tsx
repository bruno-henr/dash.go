"use client";
import React from "react";
import { Flex, Text, Input, Icon, HStack, Box, Avatar } from "@chakra-ui/react";
import {
  RiNotificationLine,
  RiSearchLine,
  RiUserAddLine,
} from "react-icons/ri";

export const Header: React.FC = () => {
  return (
    <Flex
      width="100%"
      as="header"
      maxWidth={1400}
      h="20"
      mx="auto"
      mt="4"
      align="center"
      px="6"
    >
      <Text fontSize="3xl" fontWeight="bold" letterSpacing="tight">
        dashgo
        <Text as="span" color="pink.500" ml="1">
          .
        </Text>
      </Text>

      <Flex
        as="label"
        flex="1"
        py="4"
        px="8"
        ml="6"
        maxWidth={400}
        alignSelf="center"
        color="gray.200"
        position="relative"
        bg="gray.800"
        borderRadius="full"
      >
        <Input
          color="gray.50"
          variant="unstyled"
          placeholder="Buscar na plataforma"
          _placeholder={{ color: "gray.400" }}
          px="4"
          mr="4"
        />
        <Icon as={RiSearchLine} fontSize="20" />
      </Flex>

      <Flex align="center" ml="auto">
        <HStack 
          spacing="8"
          mx="8"
          pr="8"
          py="1"
          color="gray.300"
          borderRightWidth={1}
          borderColor="gray.700"
        >
          <Icon as={RiNotificationLine} fontSize="20" />
          <Icon as={RiUserAddLine} fontSize="20" />
        </HStack>

        <Flex
          align='center'

        >
          <Box mr="4" textAlign="right">
            <Text>Bruno henrique</Text>
            <Text color="gray.300" fontSize='small'>
              brunohenrique@gmail.com
            </Text>
          </Box>

          <Avatar 
            size="md" 
            name="Bruno Henrique" 
            src="https://avatars.githubusercontent.com/u/52724925?s=96&v=4" 
          />
        </Flex>
      </Flex>
    </Flex>
  );
};