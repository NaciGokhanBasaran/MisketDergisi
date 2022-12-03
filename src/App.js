import "./styles.css";
import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";
import Data from "./components/Data";
import DergiBilgi from "./pages/DergiBilgi/DergiBilgi";
import Anasayfa from "./pages/Anasayfa/Anasayfa";
import Hakkimizda from "./pages/Hakkimizda/Hakkimizda.jsx";
import Yazarlar from "./pages/Yazarlar/Yazarlar";

export default function App() {
  return (
    <Router>
      <div className="App">
        <Routes>
          <Route exact path="/" element={<Anasayfa />}></Route>
          <Route exact path="/hakkimizda" element={<Hakkimizda />}></Route>
          <Route exact path="/Yazarlar" element={<Yazarlar />}></Route>

          {Data.map((data) => (
            <Route
              exact
              path={data.url}
              element={
                <DergiBilgi
                  image={data.image}
                  pdf={data.pdf}
                  name={data.name}
                />
              }
            ></Route>
          ))}
        </Routes>
      </div>
    </Router>
  );
}
/*
Bu websitesi Naci Gökhan Başaran tarafından İstanbul Üsküdar Lisesinin Misket Dergisi için hazırlanmıştır .Kereme ve Tarığa yardımlarından dolayı teşekkür ederim
*/
