'use client'
import { Avatar, Box, Flex, Text } from "@chakra-ui/react";
import React from "react";

// import { Container } from './styles';

const Profile: React.FC = () => {
  return (
    <Flex align="center">
      <Box mr="4" textAlign="right">
        <Text>Bruno henrique</Text>
        <Text color="gray.300" fontSize="small">
          brunohenrique@gmail.com
        </Text>
      </Box>

      <Avatar
        size="md"
        name="Bruno Henrique"
        src="https://avatars.githubusercontent.com/u/52724925?s=96&v=4"
      />
    </Flex>
  );
};

export default Profile;
