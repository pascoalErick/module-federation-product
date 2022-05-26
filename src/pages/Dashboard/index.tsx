import { Box, SimpleGrid, Text, theme } from "@chakra-ui/react";

import Chart from "react-apexcharts";
import { ApexOptions } from "apexcharts";

export default function Dashboard() {
  const chartOptions: ApexOptions = {
    chart: {
      toolbar: {
        show: false,
      },
      zoom: {
        enabled: false,
      },
      foreColor: theme.colors.gray[500],
    },
    grid: {
      show: false,
    },
    dataLabels: {
      // enabled: false,
    },
    tooltip: {
      enabled: false,
    },
    xaxis: {
      type: "datetime",
      axisBorder: {
        color: theme.colors.gray[600],
      },
      axisTicks: {
        color: theme.colors.gray[600],
      },
      categories: [
        "2022-01-06T00:00:00.000Z",
        "2022-01-07T00:00:00.000Z",
        "2022-01-08T00:00:00.000Z",
        "2022-01-09T00:00:00.000Z",
        "2022-01-10T00:00:00.000Z",
        "2022-01-11T00:00:00.000Z",
      ],
    },
    fill: {
      opacity: 0.3,
      type: "gradient",
      gradient: {
        shade: "dark",
        opacityFrom: 0.7,
        opacityTo: 0.3,
      },
    },
  };

  const chartSeries = [{ name: "series1", data: [32, 3, 109, 5, 32, 90] }];
  const chartSeries2 = [{ name: "series2", data: [32, 3, 200, 5, 32, 700] }];

  return (
    <SimpleGrid flex="1" minChildWidth={320} gap="4" mt={4}>
      <Box bgColor="gray.100" p={["6", "8"]} borderRadius={8} pb="4">
        <Text as="h2" fontSize="lg" mb="4">
          Produtos cadastrados na semana
        </Text>

        <Chart
          options={chartOptions}
          series={chartSeries}
          type="area"
          height={160}
        />
      </Box>
      <Box bgColor="gray.100" p={["6", "8"]} borderRadius={8}>
        <Text as="h2" fontSize="lg" mb="4">
          Produtos cadastrados no mês
        </Text>

        <Chart
          options={chartOptions}
          series={chartSeries2}
          type="area"
          height={160}
        />
      </Box>
    </SimpleGrid>
  );
}
