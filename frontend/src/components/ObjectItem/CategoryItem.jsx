import { useContext } from "react";
import { IoMdTrash } from "react-icons/io";
import { AppContext } from "../../store/AppContext";
import classes from "./ObjectItem.module.css";

export default function CategoryItem({ object }) {
  const { deleteCategory } = useContext(AppContext);

  function handleDelete() {
    const proceed = window.confirm("Deseja deletar a categoria?");

    if (proceed) {
      deleteCategory(object.id);
    }
  }

  return (
    <>
      <div className={classes.objectItemContainer}>
        <div className={classes.text}>{object.name}</div>
        <button className={classes.button} onClick={handleDelete}>
          <IoMdTrash size={20} />
        </button>
      </div>
    </>
  );
}
