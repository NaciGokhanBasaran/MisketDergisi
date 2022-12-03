import { useState } from "react";
import NavbarOpen from "./NavbarOpen";
import Hamburger from "hamburger-react";
import { Link } from "react-router-dom";

export default function Navbar() {
  const [open, setOpen] = useState(false);
  return (
    <div>
      <div className="Navbar">
        <div className="nav-img">
          <a href="https://iul.meb.k12.tr/">
            {" "}
            <img src={require("../images/iülLogo.png")} />
          </a>
        </div>
        <div className="nav-items">
          <ul>
            <li>
              <Link to="/">Anasayfa</Link>
            </li>{" "}
            <li>
              <Link to="/hakkimizda">Hakkımızda </Link>
            </li>
            <li>
              <Link to="/Yazarlar"> Yazarlar</Link>{" "}
            </li>{" "}
          </ul>
        </div>
        <div className="Menu">
          <Hamburger
            toggled={open}
            toggle={setOpen}
            color="black"
            size={100}
            onClick={() => setOpen(!open)}
          />
        </div>
      </div>
      {open && <NavbarOpen />}
    </div>
  );
}
