import { NavLink } from "react-router-dom";
import classes from "./ObjectNavigation.module.css";

export default function CategoryNavigation() {
  return (
    <header className={classes.header}>
      <nav>
        <ul className={classes.list}>
          <li>
            <NavLink
              to="/categorias"
              className={({ isActive }) =>
                isActive ? classes.active : undefined
              }
              end
            >
              Todos as categorias
            </NavLink>
          </li>
          <li>
            <NavLink
              to="/categorias/novo"
              className={({ isActive }) =>
                isActive ? classes.active : undefined
              }
            >
              Nova categoria
            </NavLink>
          </li>
        </ul>
      </nav>
    </header>
  );
}
