import { Box, Stack, Text } from "@chakra-ui/react";
import React, { ReactNode } from "react";
import { RiContactsLine, RiDashboardLine } from "react-icons/ri";

interface NavProps {
  title: string;
  children: ReactNode
}

const NavSection: React.FC<NavProps> = ({ title, children }) => {
  return (
    <Box>
      <Text fontSize="small" color="gray.400" fontWeight="bold">
        {title}
      </Text>
      <Stack spacing="4" mt="8" align="stretch">
        {children}
      </Stack>
    </Box>
  );
};

export default NavSection;
