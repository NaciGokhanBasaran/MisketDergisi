import { Link } from "react-router-dom";

export default function NavbarOpen() {
  return (
    <div className="NavbarOpen">
      <ul>
        <li>
          <Link to="/">Anasayfa</Link>
        </li>
        <li>
          <Link to="/hakkimizda">Hakkımızda </Link>
        </li>
        <li>
          <Link to="/yazarlar">Yazarlar </Link>
        </li>
      </ul>
    </div>
  );
}
