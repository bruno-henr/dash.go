import { Link, Icon, Text, LinkProps } from "@chakra-ui/react";
import React, { ElementType } from "react";
import { RiDashboardLine } from "react-icons/ri";

// import { Container } from './styles';

interface NavLinProps extends LinkProps {
  icon: ElementType;
  name: string;
}

const NavLink: React.FC<NavLinProps> = ({ icon, name, ...rest }) => {
  return (
    <Link display={"flex"} alignItems="center" {...rest}>
      <Icon as={icon} fontSize={"20"} />
      <Text ml="4" fontWeight="medium">
        {name}
      </Text>
    </Link>
  );
};

export default NavLink;
