import { useContext } from "react";
import ObjectList from "../components/ObjectList/ObjectList";
import { AppContext } from "../store/AppContext";

export default function Products() {
  const { products, loading } = useContext(AppContext);

  return (
    <>
      {loading ? (
        <p style={{ textAlign: "center", color: "white" }}>Carregando...</p>
      ) : (
        <ObjectList data={products} type="products" />
      )}
    </>
  );
}
