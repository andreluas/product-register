import CategoryItem from "../ObjectItem/CategoryItem";
import ProductItem from "../ObjectItem/ProductItem";
import classes from "./ObjectList.module.css";

export default function ObjectList({ data, type }) {
  if (!data || data.length === 0) {
    return <p>Sem dados para serem exibidos.</p>;
  }

  return (
    <section className={classes.section}>
      {data.map((item) =>
        type === "category" ? (
          <CategoryItem key={item.id} object={item} />
        ) : (
          <ProductItem key={item.id} object={item} />
        )
      )}
    </section>
  );
}
