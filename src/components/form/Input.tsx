import {
  FormControl,
  FormErrorMessage,
  FormLabel,
  Input as ChakraInput,
  InputProps as ChakraInputProps,
} from "@chakra-ui/react";
import { forwardRef, ForwardRefRenderFunction } from "react";

type InputProps = {
  name: string;
  label?: string;
  errorMessage?: string;
} & ChakraInputProps;

const InputBase: ForwardRefRenderFunction<HTMLInputElement, InputProps> = (
  { name, label, isInvalid, errorMessage, ...restProps },
  ref
) => {
  return (
    <>
      <FormControl isInvalid={isInvalid}>
        {!!label && <FormLabel htmlFor={name}>{label}</FormLabel>}
        <ChakraInput
          name={name}
          id={name}
          variant="filled"
          size="lg"
          bgColor="gray.200"
          _hover={{
            bgColor: "gray.100",
          }}
          focusBorderColor="#dd6b20"
          {...restProps}
          ref={ref}
        />
        {errorMessage && <FormErrorMessage>{errorMessage}</FormErrorMessage>}
      </FormControl>
    </>
  );
};

export const Input = forwardRef(InputBase);
