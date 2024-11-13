import { useContext } from "react";
import ObjectList from "../components/ObjectList/ObjectList";
import ObjectNavigation from "../components/ObjectNavigation/ProductNavigation";
import { AppContext } from "../store/AppContext";

export default function Categories() {
  const { categories, loading } = useContext(AppContext);

  return (
    <>
      {loading ? (
        <p style={{ textAlign: "center", color: "white" }}>Carregando...</p>
      ) : (
        <ObjectList data={categories} type="category" />
      )}
    </>
  );
}
