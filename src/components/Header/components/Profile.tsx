"use client";
import { Avatar, Box, Flex, Text } from "@chakra-ui/react";
import React from "react";

interface IProfileProps {
  showProfileData?: boolean;
}

const Profile: React.FC<IProfileProps> = ({ showProfileData }) => {
  return (
    <Flex align="center">
      {showProfileData && (
        <Box mr="4" textAlign="right">
          <Text>Bruno henrique</Text>
          <Text color="gray.300" fontSize="small">
            brunohenrique@gmail.com
          </Text>
        </Box>
      )}

      <Avatar
        size="md"
        name="Bruno Henrique"
        src="https://avatars.githubusercontent.com/u/52724925?s=96&v=4"
      />
    </Flex>
  );
};

export default Profile;
