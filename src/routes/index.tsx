type Route = {
  path: string;
  component: React.ReactElement;
};

const routes = () => {
  //@ts-ignore
  const Dashboard = React.lazy(() => import("../pages/Dashboard"));
  //@ts-ignore
  const ProductList = React.lazy(() => import("../pages/ProductList"));
  //@ts-ignore
  const ProductCreate = React.lazy(() => import("../pages/ProductCreate"));

  const routes: Route[] = [
    {
      path: "/product/dashboard",
      component: <Dashboard />,
    },
    {
      path: "/product/products",
      component: <ProductList />,
    },
    {
      path: "/product/products/create",
      component: <ProductCreate />,
    },
  ];

  return routes;
};

export default routes();
