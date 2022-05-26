import {
  Box,
  Button,
  Divider,
  Flex,
  Heading,
  HStack,
  SimpleGrid,
  VStack,
} from "@chakra-ui/react";
import { yupResolver } from "@hookform/resolvers/yup";
import { useForm } from "react-hook-form";
import { useNavigate } from "react-router-dom";
import { Input } from "../../components/form/Input";
import { Yup } from "../../utils/Yup";

type ProudctCreateFormData = {
  name: string;
  code: string;
  location: string;
  alias: string;
};

export default function ProductCreate() {
  const navigate = useNavigate();

  const formSchema = Yup.object().shape({
    name: Yup.string().required(),
    code: Yup.string().required(),
  });

  const { register, formState, handleSubmit } = useForm({
    resolver: yupResolver(formSchema),
  });
  const { errors } = formState;

  async function handleCreate(formData: ProudctCreateFormData) {
    await new Promise((resolve) => {
      setTimeout(() => {
        resolve("");
      }, 2000);
    });
    console.log("formData", formData);
    goBack();
  }

  function goBack() {
    navigate("/product/products");
  }

  return (
    <Box>
      <Box
        as="form"
        onSubmit={handleSubmit(handleCreate)}
        flex="1"
        bgColor="gray.50"
        padding={["6", "8"]}
        borderRadius={8}
      >
        <Heading size="lg" fontWeight="normal">
          Criar produto
        </Heading>

        <Divider my="6" borderColor="gray.400" />

        <VStack spacing={["6", "8"]}>
          <SimpleGrid minChildWidth="240px" spacing={["6", "8"]} w="100%">
            <Input
              label="Nome"
              {...register("name")}
              isInvalid={!!errors.name}
              errorMessage={errors.name?.message}
            />
            <Input
              label="Código"
              {...register("code")}
              isInvalid={!!errors.code}
              errorMessage={errors.code?.message}
            />
          </SimpleGrid>

          <SimpleGrid minChildWidth="240px" spacing={["6", "8"]} w="100%">
            <Input
              label="Local"
              {...register("location")}
              isInvalid={!!errors.location}
              errorMessage={errors.location?.message}
            />
            <Input
              label="Apelido"
              {...register("alias")}
              isInvalid={!!errors.alias}
              errorMessage={errors.alias?.message}
            />
          </SimpleGrid>
        </VStack>
        <Flex mt={["6", "8"]} justifyContent="flex-end">
          <HStack spacing="4">
            <Button colorScheme="gray" onClick={goBack}>
              Cancelar
            </Button>
            <Button
              type="submit"
              colorScheme="orange"
              isLoading={formState.isSubmitting}
            >
              Salvar
            </Button>
          </HStack>
        </Flex>
      </Box>
    </Box>
  );
}
