type MenuBase = {
  label: string;
  path: string;
  auth: string;
};

type Menu = MenuBase & {
  submenus?: MenuBase[];
};

const BASE_MF_PATH = "/product";

const menu: Menu[] = [
  {
    label: "Produtos",
    path: `${BASE_MF_PATH}`,
    auth: "product",
    submenus: [
      {
        label: "Dashboard",
        path: `${BASE_MF_PATH}/dashboard`,
        auth: "product-dashboard",
      },
      {
        label: "Meus produtos",
        path: `${BASE_MF_PATH}/products`,
        auth: "product-dashboard",
      },
    ],
  },
];

export default menu;
