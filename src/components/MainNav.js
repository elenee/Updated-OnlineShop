import React from "react";
import { NavLink } from "react-router-dom";
import "./MainNav.css";
import { IoLogoReact } from "react-icons/io5";

const MainNav = () => {
  return (
    <header className="header">
      <nav>
          <IoLogoReact />
          <div className="list">
            <ul>
              <li>
                <NavLink
                  to="/"
                  className={({ isActive }) =>
                    isActive ? "active" : undefined
                  }
                  end
                >
                  Home
                </NavLink>
              </li>
              <li>
                <NavLink
                  to="/products"
                  className={({ isActive }) =>
                    isActive ? "active" : undefined
                  }
                >
                  Products
                </NavLink>
              </li>
            </ul>
          </div>
      </nav>
    </header>
  );
};

export default MainNav;
