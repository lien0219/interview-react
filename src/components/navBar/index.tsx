import React from "react";
import { Link, useLocation } from "react-router-dom";
import "./index.css";
import { Menu } from "antd";

const Navbar: React.FC = () => {
  const location = useLocation();
  const path = location.pathname;

  let selectedKey = "1";
  if (path === "/about") selectedKey = "2";
  if (path === "/contact") selectedKey = "3";

  const menuItems = [
    {
      key: "1",
      label: <Link to="/">home</Link>,
    },
    {
      key: "2",
      label: <Link to="/about">about</Link>,
    },
    {
      key: "3",
      label: <Link to="/contact">contact</Link>,
    },
  ];

  return (
    <nav className="navbar">
      <div className="menu-container">
        <Menu
          mode="horizontal"
          theme="dark"
          selectedKeys={[selectedKey]}
          items={menuItems}
          style={{ flex: 1, minWidth: 0 }}
        />
      </div>
    </nav>
  );
};

export default Navbar;
