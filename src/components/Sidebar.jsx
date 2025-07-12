import "./styles/sidebar.css";
import { useState } from "react";
import logo from "../assets/logo-base.svg";
import { useTheme } from "../context/ThemeContext"; // theme olish

function Sidebar() {
  const [open, setOpen] = useState(true);
  const { theme } = useTheme(); // bu yerda theme: "light" yoki "dark"

  const menu = [
    { icon: "fa-home", title: "Home" },
    { icon: "fa-compass", title: "Discover" },
    { icon: "fa-shop", title: "Popular Products" },
    { icon: "fa-user-tie", title: "Top Authors" },
    { icon: "fa-square-rss", title: "Feed" },
    { icon: "fa-headset", title: "Concat" },
  ];

  return (
    <div
      className={`sidebar ${open ? "open" : "closed"}`}
      style={{
        backgroundColor: theme === "light" ? "#f9fafb" : "#191922",
      }}
    >
      <div className="sidebar-logo">
        {open && <img src={logo} alt="Logo" loading="lazy" />}
        <i
          className="fa-solid fa-bars-staggered toggle"
          onClick={() => setOpen(!open)}
        ></i>
      </div>

      <ul className="sidebar-menu">
        {menu.map((item, index) => (
          <li key={index} className="menu-item">
            <i className={`fa-solid ${item.icon}`}></i>
            {open && <span>{item.title}</span>}
          </li>
        ))}
      </ul>
    </div>
  );
}

export default Sidebar;
