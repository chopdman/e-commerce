import { createBrowserRouter } from "react-router-dom";
import Home from "../pages/Home";
import ProductsPage from "../pages/ProductsPage";
import ProductDetails from "../pages/ProductDetail";
import CustomizeDialog from "../components/CustomizationDialog";
import CartPage from "../pages/CartPage";
import NotFound from "../components/NotFound";
import About from "../pages/About";
import { ProductTable } from "../components/ProductTable";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Home />,
    children: [
      {
        index: true,
        element: (
          <div className="flex  items-center justify-center ">
            Welcome to the Website
          </div>
        ),
      },
      {
        path: "shop",
        children: [
          { path: "products", element: <ProductsPage /> },
          {
            path: "product/:productId",
            element: <ProductDetails />,
            children: [{ path: "customize", element: <CustomizeDialog /> }],
          },
          { path: "cart", element: <CartPage /> },
        ],
      },
      {
        path: "about",
        element: <About />,
      },
      {
        path: "table",
        element:<ProductTable/>
      },
      {
        path: "*",
        element: <NotFound />,
      },
    ],
  },
]);

export default router;
