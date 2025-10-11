import { NavLink, Outlet } from "react-router-dom";
import css from "./Navigation.module.css";

const Navigation = () => {
  return (
    <>
      <nav className={css["navigation"]}>
        <ul className={css["navigation-list"]}>
          <li>
            <NavLink to="/">Home</NavLink>
          </li>
          <li>
            <NavLink to="components">Components</NavLink>
          </li>
          <li>
            <NavLink to="hooks">Hooks</NavLink>
          </li>
          <li>
            <NavLink to="request">Request</NavLink>
          </li>
          <li>
            <NavLink to="task">TaskManager</NavLink>
          </li>
        </ul>
      </nav>
      <Outlet />
    </>
  );
};

export default Navigation;
