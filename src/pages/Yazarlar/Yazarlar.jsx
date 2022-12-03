import Navbar from "../../components/Navbar";
import Data from "./YazarlarData.jsx";
import Footer from "../../components/Footer";

export default function Yazarlar() {
  return (
    <div>
      <Navbar />
      <div className="label">
        <h1>Yazarlar</h1>
      </div>
      <br />
      <br />
      <br />
      <div className="Yazarlar">
        {Data.map((yazar) => (
          <div className="yazar">
            <a href={yazar.ig}>
              <img href="google.com" alt="" />
            </a>
            <h1>{yazar.name}</h1>
            <p>{yazar.is}</p>
          </div>
        ))}
      </div>
      <br />
      <br />
      <br />
      <br />
      <Footer />
    </div>
  );
}
