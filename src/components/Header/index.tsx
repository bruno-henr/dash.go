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
} from "@chakra-ui/react";
import {
  RiNotificationLine,
  RiSearchLine,
  RiUserAddLine,
} from "react-icons/ri";
import Profile from "./components/Profile";
import NotificationNav from "./components/NotificationNav";
import SearchBox from "./components/SearchBox";
import Logo from "./components/Logo";

export const Header: React.FC = () => {
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
      <Logo />

      {isWideVersion && <SearchBox />}

      <Flex align="center" ml="auto">
        <NotificationNav />

        <Profile showProfileData={isWideVersion} />
      </Flex>
    </Flex>
  );
};
