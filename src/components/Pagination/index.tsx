import { Box, Stack } from "@chakra-ui/react";
import { PaginationItem } from "./PaginationItem";

export function Pagination() {
  return (
    <Stack
      direction={["column", "row"]}
      justifyContent="space-between"
      alignItems="center"
      mt="8"
    >
      <Box>
        <strong>1</strong> - <strong>10</strong> de <strong>100</strong>
      </Box>

      <Stack spacing="2" direction="row">
        <PaginationItem number={1} isCurrent />
        <PaginationItem number={2} />
        <PaginationItem number={3} />
        <PaginationItem number={4} />
        <PaginationItem number={5} />
      </Stack>
    </Stack>
  );
}
