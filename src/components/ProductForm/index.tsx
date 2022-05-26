import { Box, Flex, Input } from "@chakra-ui/react";
import React from "react";
import { Controller, useFormContext } from "react-hook-form";

export type ProductForm = {
  name: string;
  code: string;
  price: number;
};

type ProductFormProps = {
  initialValues?: ProductForm;
  isDisabled?: boolean;
};

export function ProductForm({ initialValues, isDisabled }: ProductFormProps) {
  const useForm = useFormContext();

  React.useEffect(() => {
    if (!!initialValues) {
      useForm.setValue("name", initialValues.name);
      useForm.setValue("code", initialValues.code);
      useForm.setValue("price", initialValues.price);
    }
  }, [initialValues]);

  return (
    <Box>
      <Flex gap={"1rem"}>
        <Controller
          name="name"
          rules={{ required: true }}
          control={useForm.control}
          render={({ field }) => (
            <Input placeholder="Nome" {...field} disabled={isDisabled} />
          )}
        />

        <Controller
          name="code"
          rules={{ required: true }}
          control={useForm.control}
          render={({ field }) => (
            <Input placeholder="Código" {...field} disabled={isDisabled} />
          )}
        />

        <Controller
          name="price"
          rules={{ required: true }}
          control={useForm.control}
          render={({ field }) => (
            <Input
              placeholder="Preço"
              type={"number"}
              {...field}
              disabled={isDisabled}
            />
          )}
        />
      </Flex>
    </Box>
  );
}
