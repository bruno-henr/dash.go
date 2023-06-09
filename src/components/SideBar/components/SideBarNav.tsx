import React from "react";
import { Box, Stack, Text, Icon, Link } from "@chakra-ui/react";

import NavSection from "./NavSection";
import NavLink from "./NavLink";
import {
  RiContactsLine,
  RiDashboardLine,
  RiGitMergeLine,
  RiInputMethodLine,
} from "react-icons/ri";

const SideBarNav: React.FC = () => {
  return (
    <Stack spacing="12" align="flex-start">
      <NavSection title="GERAL">
        <NavLink icon={RiDashboardLine} href="/dashboard" name="Dashboard" />

        <NavLink icon={RiContactsLine} href="/users" name="Usuários" />
      </NavSection>

      <NavSection title="GERAL">
        <NavLink icon={RiInputMethodLine} href="/forms" name="Formulários" />
        <NavLink icon={RiGitMergeLine} href="/automation" name="Automação" />
      </NavSection>
    </Stack>
  );
};

export default SideBarNav;
