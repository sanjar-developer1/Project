import Navbar from "./components/Navbar";
import Sidebar from "./components/Sidebar";
import { ThemeProvider } from "./context/ThemeContext";
import Product from "./components/Product";
import "./App.css";

function App() {
  return (
    <ThemeProvider>
      <div className="app-layout">
        <Sidebar />
        <div className="main-content">
          <Navbar />
          <Product />
        </div>
      </div>
    </ThemeProvider>
  );
}

export default App;
