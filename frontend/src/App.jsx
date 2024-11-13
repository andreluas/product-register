import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Categories from "./pages/Categories";
import CategoryRootLayout from "./pages/CategoryRoot";
import ErrorPage from "./pages/Error";
import HomePage from "./pages/HomePage";
import NewCategory from "./pages/NewCategory";
import NewProduct from "./pages/NewProduct";
import ProductRootLayout from "./pages/ProductRoot";
import Products from "./pages/Products";
import RootLayout from "./pages/Root";
import AppProvider from "./store/AppContext";

const router = createBrowserRouter([
  {
    path: "/",
    element: <RootLayout />,
    errorElement: <ErrorPage />,
    children: [
      { index: true, element: <HomePage /> },
      {
        path: "categorias",
        element: <CategoryRootLayout />,
        children: [
          {
            index: true,
            element: <Categories />,
          },
          {
            path: "novo",
            element: <NewCategory />,
          },
        ],
      },
      {
        path: "produtos",
        element: <ProductRootLayout />,
        children: [
          {
            index: true,
            element: <Products />,
          },
          {
            path: "novo",
            element: <NewProduct />,
          },
        ],
      },
    ],
  },
]);

function App() {
  return (
    <AppProvider>
      <RouterProvider router={router} />
    </AppProvider>
  );
}

export default App;
