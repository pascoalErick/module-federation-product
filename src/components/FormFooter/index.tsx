import { Flex, Button } from "@chakra-ui/react";

type FormFooterProps = {
  onCancel: () => void;
  onConfirm?: () => void;
  textConfim?: string;
  textCancel?: string;
};

export function FormFooter({
  onCancel,
  onConfirm,
  textConfim = "Salvar",
  textCancel = "Cancelar",
}: FormFooterProps) {
  return (
    <Flex mt={"2rem"} justifyContent={"center"} gap={"1rem"}>
      <Button
        type="button"
        backgroundColor={"gray.500"}
        _hover={{
          backgroundColor: "gray.600",
        }}
        color={"white"}
        onClick={onCancel}
      >
        {textCancel}
      </Button>
      <Button
        type="submit"
        backgroundColor={"blue.400"}
        _hover={{
          backgroundColor: "blue.500",
        }}
        color={"white"}
        onClick={!!onConfirm && onConfirm}
      >
        {textConfim}
      </Button>
    </Flex>
  );
}
