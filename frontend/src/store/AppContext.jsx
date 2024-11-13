import { createContext, useEffect, useState } from "react";

export const AppContext = createContext();

export default function AppProvider({ children }) {
  const [categories, setCategories] = useState([]);
  const [products, setProducts] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    async function fetchCategories() {
      try {
        const response = await fetch("http://localhost:8080/api/v1/categories");
        if (!response.ok) throw new Error("Erro ao carregar dados");
        const data = await response.json();
        setCategories(data);
        setLoading(false);
      } catch (error) {
        console.error(error);
        setLoading(false);
      }
    }

    async function fetchProducts() {
      try {
        const response = await fetch("http://localhost:8080/api/v1/products");
        if (!response.ok) throw new Error("Erro ao carregar dados");
        const data = await response.json();
        setProducts(data);
        setLoading(false);
      } catch (error) {
        console.error(error);
        setLoading(false);
      }
    }

    fetchCategories();
    fetchProducts();
  }, [categories, products]);

  async function deleteCategory(id) {
    try {
      const response = await fetch(
        `http://localhost:8080/api/v1/categories/${id}`,
        {
          method: "DELETE",
        }
      );
      if (!response.ok) throw new Error("Erro ao deletar categoria");
      setCategories((prevCategories) =>
        prevCategories.filter((cat) => cat.id !== id)
      );
    } catch (error) {
      console.error(error);
      alert("Ocorreu um erro ao deletar a categoria.");
    }
  }

  async function deleteProduct(id) {
    try {
      const response = await fetch(
        `http://localhost:8080/api/v1/products/${id}`,
        {
          method: "DELETE",
        }
      );
      if (!response.ok) throw new Error("Erro ao deletar produto");
      setProducts((prevProducts) =>
        prevProducts.filter((cat) => cat.id !== id)
      );
    } catch (error) {
      console.error(error);
      alert("Ocorreu um erro ao deletar o produto.");
    }
  }

  return (
    <AppContext.Provider
      value={{ categories, products, loading, deleteCategory, deleteProduct }}
    >
      {children}
    </AppContext.Provider>
  );
}
