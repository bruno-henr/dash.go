"use client";
import React from "react";
import {
  Flex,
  Text,
  Input,
  Icon,
  HStack,
  Box,
  Avatar,
  useBreakpointValue,
  IconButton,
} from "@chakra-ui/react";
import {
  RiMenuLine,
  RiNotificationLine,
  RiSearchLine,
  RiUserAddLine,
} from "react-icons/ri";
import Profile from "./components/Profile";
import NotificationNav from "./components/NotificationNav";
import SearchBox from "./components/SearchBox";
import Logo from "./components/Logo";
import { useSideBarDrawer } from "@/contexts/SideBarDrawerContext";

export const Header: React.FC = () => {
  const { onOpen } = useSideBarDrawer();

  const isWideVersion = useBreakpointValue({
    base: false,
    lb: true,
  });

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
      {!isWideVersion && (
        <IconButton
          aria-label='Open drawer'
          icon={<Icon as={RiMenuLine} />}
          fontSize="24"
          variant="unstyled"
          onCanPlay={onOpen}
          mr="2"
        />
      )}

      <Logo />

      {isWideVersion && <SearchBox />}

      <Flex align="center" ml="auto">
        <NotificationNav />

        <Profile showProfileData={isWideVersion} />
      </Flex>
    </Flex>
  );
};
