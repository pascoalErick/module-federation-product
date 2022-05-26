import { Button } from "@chakra-ui/react";

type PaginationItemProps = {
  number: number;
  isCurrent?: boolean;
};

export function PaginationItem({
  number,
  isCurrent = false,
}: PaginationItemProps) {
  if (isCurrent) {
    return (
      <Button
        size="sm"
        fontSize="xs"
        width="4"
        colorScheme="orange"
        disabled
        _disabled={{
          cursor: "default",
        }}
      >
        {number}
      </Button>
    );
  }

  return (
    <Button
      size="sm"
      fontSize="xs"
      width="4"
      bgColor="gray.200"
      _hover={{ bgColor: "gray.100" }}
    >
      {number}
    </Button>
  );
}
