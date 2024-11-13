import { NavLink } from "react-router-dom";
import classes from "./ObjectNavigation.module.css";

export default function ProductNavigation() {
  return (
    <header className={classes.header}>
      <nav>
        <ul className={classes.list}>
          <li>
            <NavLink
              to="/produtos"
              className={({ isActive }) =>
                isActive ? classes.active : undefined
              }
              end
            >
              Todos os produtos
            </NavLink>
          </li>
          <li>
            <NavLink
              to="/produtos/novo"
              className={({ isActive }) =>
                isActive ? classes.active : undefined
              }
            >
              Novo produto
            </NavLink>
          </li>
        </ul>
      </nav>
    </header>
  );
}
