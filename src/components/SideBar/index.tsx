"use client";

import { Box, Stack, Text, Icon, Link } from "@chakra-ui/react";
import React from "react";
import {
  RiContactsLine,
  RiDashboardLine,
  RiGitMergeLine,
  RiInputMethodLine,
} from "react-icons/ri";
import NavSection from "./components/NavSection";
import NavLink from "./components/NavLink";

export const SideBar: React.FC = () => {
  return (
    <Box as="aside" w="64" mr="8">
      <Stack spacing="12" align="flex-start">
        <NavSection title="GERAL">
          <NavLink icon={RiDashboardLine} name="Dashboard" />

          <NavLink icon={RiContactsLine} name="Usuários" />
        </NavSection>

        <NavSection title="GERAL">
          <NavLink icon={RiInputMethodLine} name="Formulários" />
          <NavLink icon={RiGitMergeLine} name="Automação" />
        </NavSection>
      </Stack>
    </Box>
  );
};
