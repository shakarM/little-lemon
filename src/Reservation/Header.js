import { Link, useNavigate } from "react-router-dom";
import "./Header.css";

export default function Header() {
  const navigate = useNavigate();

  return (
    <header>
      <div className="image-container mt-6 flex items-center justify-center  ">
        <Link to="/">
          {" "}
          <img
            src="https://png.pngtree.com/png-clipart/20230212/original/pngtree-lemon-slice-fresh-icon-logo-png-image_8952696.png"
            alt="png"
            className="w-[5rem]"
          />
        </Link>
        <h1 className="font-black text-[1.5rem]">Little Lemon Reservation</h1>
      </div>
    </header>
  );
}
