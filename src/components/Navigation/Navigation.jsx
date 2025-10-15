import { NavLink, Outlet } from "react-router-dom";
import css from "./Navigation.module.css";
import classnames from "classnames";

const navLinkClass = ({ isActive }) => {
  return classnames(isActive && css.isActive);
};

const Navigation = () => {
  return (
    <>
      <nav className={css["navigation"]}>
        <ul className={css["navigation-list"]}>
          <li>
            <NavLink className={navLinkClass} to="/">
              Home
            </NavLink>
          </li>
          <li>
            <NavLink className={navLinkClass} to="components">
              Components
            </NavLink>
          </li>
          <li>
            <NavLink className={navLinkClass} to="hooks">
              Hooks
            </NavLink>
          </li>
          <li>
            <NavLink className={navLinkClass} to="request">
              Request
            </NavLink>
          </li>
          <li>
            <NavLink className={navLinkClass} to="task">
              TaskManager
            </NavLink>
          </li>
        </ul>
      </nav>
      <Outlet />
    </>
  );
};

export default Navigation;
