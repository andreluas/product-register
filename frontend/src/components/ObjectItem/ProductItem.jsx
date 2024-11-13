import { useContext, useEffect, useState } from "react";
import { IoMdTrash } from "react-icons/io";
import { AppContext } from "../../store/AppContext";
import { formatPrice } from "../../utils/formatPrice";
import classes from "./ObjectItem.module.css";

export default function ProductItem({ object }) {
  const [productCategory, setProductCategory] = useState("");
  const { deleteProduct } = useContext(AppContext);

  useEffect(() => {
    async function getCategoryById() {
      try {
        const response = await fetch(
          `http://localhost:8080/api/v1/categories/${object.categoryId}`
        );
        if (!response.ok) throw new Error("Erro ao carregar categoria");
        const data = await response.json();
        setProductCategory(data.name);
      } catch (error) {
        console.error(error);
      }
    }

    getCategoryById();
  }, []);

  function handleDelete() {
    const proceed = window.confirm("Deseja deletar o produto?");

    if (proceed) {
      deleteProduct(object.id);
    }
  }

  return (
    <>
      <div className={classes.objectItemContainer}>
        <div className={classes.text}>{object.name}</div>
        <div className={classes.text}>{formatPrice(object.price)}</div>
        <div className={classes.text}>{object.amount} qtd</div>
        <div className={classes.category}>{productCategory}</div>
        <button className={classes.button} onClick={handleDelete}>
          <IoMdTrash size={20} />
        </button>
      </div>
    </>
  );
}
