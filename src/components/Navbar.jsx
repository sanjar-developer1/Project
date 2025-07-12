import { useTheme } from "../context/ThemeContext";
import "./styles/navbar.css";

function Navbar() {
  const { theme, toggleTheme } = useTheme();

  return (
    //  <div className="logo">MySite</div>

    <nav className="navbar">
      <div className="navbar-search">
        <i className="fa fa-search"></i>
        <input type="text" placeholder="Search" className="search-input" />
      </div>

      <div className="navbar-moon">
        <button onClick={toggleTheme} className="navbar-btn">
          {theme === "light" ? (
            <i className="fa-solid fa-moon"></i>
          ) : (
            <i className="fa-solid fa-sun" style={{ color: "#FFD43B" }}></i>
          )}
        </button>
        <i className="fa-solid fa-cart-shopping"></i>
      </div>
    </nav>
  );
}

export default Navbar;
