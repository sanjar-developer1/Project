import { useTheme } from "../context/ThemeContext";
import "./styles/navbar.css";

function Navbar({ allProducts, setProducts }) {
  const { theme, toggleTheme } = useTheme();

  const handleSearch = (e) => {
    const value = e.target.value.toLowerCase();
    const filtered = allProducts.filter((item) =>
      item.title.toLowerCase().includes(value)
    );
    setProducts(filtered);
  };

  return (
    <nav className="navbar">
      <div className="navbar-search">
        <i className="fa fa-search"></i>
        <input
          type="text"
          placeholder="Search"
          className="search-input"
          onChange={handleSearch}
        />
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
