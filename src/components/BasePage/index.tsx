import { Box } from "@chakra-ui/react";
import { ReactNode } from "react";
import { Container } from "../Container";

export type BasePageProps = {
  children: ReactNode;
};

export function BasePage({ children }: BasePageProps) {
  return (
    <Box my={"1rem"}>
      <Container>{children}</Container>
    </Box>
  );
}
