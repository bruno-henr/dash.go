import { Link as ChakraLink, Icon, Text, LinkProps } from "@chakra-ui/react";
import Link from "next/link";
import React, { ElementType } from "react";
import { RiDashboardLine } from "react-icons/ri";
// import { Container } from './styles';

interface NavLinProps extends LinkProps {
  icon: ElementType;
  name: string;
  href: string;
}

const NavLink: React.FC<NavLinProps> = ({ icon, name, href, ...rest }) => {
  return (
    <Link href={href} passHref>
      <ChakraLink display={"flex"} alignItems="center" {...rest}>
        <Icon as={icon} fontSize={"20"} />
        <Text ml="4" fontWeight="medium">
          {name}
        </Text>
      </ChakraLink>
    </Link>
  );
};

export default NavLink;
