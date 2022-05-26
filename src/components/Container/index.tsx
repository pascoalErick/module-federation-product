import { Box } from "@chakra-ui/react";
import { ReactNode } from "react";

export type ContainerProps = {
  children: ReactNode;
};

export function Container({ children }: ContainerProps) {
  return (
    <Box maxW={"130rem"} m={"0 auto"} px={"1rem"}>
      {children}
    </Box>
  );
}
