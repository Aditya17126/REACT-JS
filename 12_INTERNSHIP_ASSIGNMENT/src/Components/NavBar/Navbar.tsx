import "./NavBar.css";
import toggle_night from "../../assets/night.png";
import toggle_day from "../../assets/day.png";
import search_icon_light from "../../assets/search-w.png";
import search_icon_dark from "../../assets/search-b.png";
import logo_light from "../../assets/logo-white.png";
import logo_black from "../../assets/logo-black.png";

function Navbar({ theme, setTheme }) {
  const toggle_mode = () => {
    theme == "light" ? setTheme("dark") : setTheme("light");
  };
  return (
    <div className="navbar">
      <div className="logo">
        <h1>ADITYA GUPTA</h1>
      </div>

      <div className="search_box">
        <input type="text" placeholder="Search" />
        <img
          src={theme == "light" ? search_icon_light : search_icon_dark}
          alt=""
        />
      </div>

      <ul>
        <li>Home</li>
        <li>Products</li>
        <li>Contacts</li>
        <li>About</li>
      </ul>

      <img
        onClick={function () {
          toggle_mode();
        }}
        src={theme == "light" ? toggle_day : toggle_night}
        alt=""
        className="toggle_icon"
      />
    </div>
  );
}

export default Navbar;
