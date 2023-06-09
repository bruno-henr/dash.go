import { Text } from "@chakra-ui/react";
import React from "react";

const Logo: React.FC = () => {
  return (
    <Text 
      fontSize={["2xl","3xl"]} 
      fontWeight="bold" 
      letterSpacing="tight"
    >
      dashgo
      <Text as="span" color="pink.500" ml="1">
        .
      </Text>
    </Text>
  );
};
export default Logo;
