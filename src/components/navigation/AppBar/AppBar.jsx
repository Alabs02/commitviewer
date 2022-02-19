// STYLES
import "./AppBar.scss";

import { Fragment } from "react";
import { NavLink } from "react-router-dom";

export const NavItems = ({links}) => {
  return links.map((link, index) => (
    <NavLink
      key={index}
      to={link.to}
      className={
        ({ isActive }) => isActive
          ? "appbar__link--active"
          : "appbar__link--inactive"
      }
    >
      <span className="appbar__text fw-normal">{link.title}</span>
    </NavLink>
  ));
};

const AppBar = () => {
  const navItems = [
    {
      title: "About",
      to: "/about"
    },
    {
      title: "Contact",
      to: "/contact"
    },
  ];

  return (
    <Fragment>
      <div className="appbar">
        <div className="appbar__body">
          <div className="appbar__brand fw-bold text-navy">CommitViewer</div>

          <div className="appbar__navigation">
            <NavItems links={navItems} />
          </div>
        </div>
      </div>
    </Fragment>
  );
}

export default AppBar;