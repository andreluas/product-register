import { NavLink } from "react-router-dom";
import classes from "./MainNavigation.module.css";

export default function MainNavigation() {
  return (
    <header className={classes.header}>
      <nav className={classes.nav}>
        <h1 className={classes.title}>ProductRegister</h1>
        <ul className={classes.list}>
          <li>
            <NavLink
              to="/"
              className={({ isActive }) =>
                isActive ? classes.active : undefined
              }
              end
            >
              Home
            </NavLink>
          </li>
          <li>
            <NavLink
              to="/produtos"
              className={({ isActive }) =>
                isActive ? classes.active : undefined
              }
              end
            >
              Produtos
            </NavLink>
          </li>
          <li>
            <NavLink
              to="/categorias"
              className={({ isActive }) =>
                isActive ? classes.active : undefined
              }
              end
            >
              Categorias
            </NavLink>
          </li>
        </ul>
      </nav>
    </header>
  );
}
