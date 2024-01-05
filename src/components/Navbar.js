import { NavLink } from "react-router-dom";
import "./Navbar.css";

export default function Navbar() {
  return (
    <nav className="">
      <ul>
        <div className="image-container">
          <img
            src="https://png.pngtree.com/png-clipart/20230212/original/pngtree-lemon-slice-fresh-icon-logo-png-image_8952696.png"
            alt="png"
          />
        </div>
        <div className="links-contaier">
          <NavLink className="navlink active" to="/">
            Home
          </NavLink>
          <NavLink className="navlink" to="/menu">
            Menu
          </NavLink>
          <NavLink className="navlink" to="/reservation">
            Reservation
          </NavLink>
        </div>
      </ul>
    </nav>
  );
}
