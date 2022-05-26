import React from "react";
import {
  Text,
  Table,
  Thead,
  Tr,
  Th,
  Tbody,
  Td,
  Heading,
  Flex,
  Button,
  Box,
  Checkbox,
  Icon,
  useBreakpointValue,
} from "@chakra-ui/react";
import { Link, useNavigate } from "react-router-dom";
import { RiAddLine, RiPencilLine } from "react-icons/ri";
import { BasePage } from "../../components/BasePage";
import { Pagination } from "../../components/Pagination";
import { api } from "../../services/api";

type Product = {
  id: number;
  name: string;
  code: string;
  price: number;
};

export default function ProductList() {
  const navigate = useNavigate();
  const [products, setProducts] = React.useState<Product[]>([]);

  function handleNavigate(path: string) {
    navigate(path);
  }

  React.useEffect(() => {
    // api.get("products").then(({ data }) => setProducts(data));
  }, []);

  function handleDelete(id: number) {
    api.delete(`products/${id}`).then(() => {
      const newProducts = products.filter((product) => product.id !== id);
      setProducts(newProducts);
    });
  }

  function handleGoToUpdate(id: number) {
    handleNavigate(`update/${id}`);
  }

  function handleGoToView(id: number) {
    handleNavigate(`view/${id}`);
  }

  const isWideScreen = useBreakpointValue({
    base: false,
    lg: true,
  });

  return (
    <BasePage>
      <Box flex="1" bgColor="gray.50" padding="8" borderRadius={8}>
        <Flex justify="space-between" align="center" mb="8">
          <Heading size="lg" fontWeight="normal">
            Produtos
          </Heading>

          <Link to="create">
            <Button
              size="sm"
              fontSize="sm"
              colorScheme="orange"
              leftIcon={<Icon as={RiAddLine} fontSize="20" />}
            >
              Criar novo
            </Button>
          </Link>
        </Flex>

        <Table colorScheme="whiteAlpha">
          <Thead>
            <Tr>
              <Th width="8" px={["4", "4", "6"]} color="gray.500">
                <Checkbox colorScheme="orange" borderColor="gray.400" />
              </Th>
              <Th>Nome</Th>
              {isWideScreen && <Th>Data de cadastro</Th>}
              {isWideScreen && <Th width="8"></Th>}
            </Tr>
          </Thead>

          <Tbody>
            <Tr>
              <Td px={["4", "4", "6"]}>
                <Checkbox colorScheme="orange" borderColor="gray.400" />
              </Td>
              <Td>
                <Box>
                  <Text fontWeight="bold">Teclado</Text>
                </Box>
              </Td>
              {isWideScreen && <Td>07 de Janeiro, 2022</Td>}
              {isWideScreen && (
                <Td>
                  <Button
                    colorScheme="blue"
                    size="sm"
                    leftIcon={<Icon as={RiPencilLine} fontSize="16" />}
                  >
                    Editar
                  </Button>
                </Td>
              )}
            </Tr>
            <Tr>
              <Td px={["4", "4", "6"]}>
                <Checkbox colorScheme="orange" borderColor="gray.400" />
              </Td>
              <Td>
                <Box>
                  <Text fontWeight="bold">Mouse</Text>
                </Box>
              </Td>
              {isWideScreen && <Td>07 de Janeiro, 2022</Td>}
              {isWideScreen && (
                <Td>
                  <Button
                    as="a"
                    colorScheme="blue"
                    size="sm"
                    leftIcon={<Icon as={RiPencilLine} fontSize="16" />}
                  >
                    Editar
                  </Button>
                </Td>
              )}
            </Tr>
          </Tbody>
        </Table>
        <Pagination />
      </Box>
    </BasePage>
  );
}
