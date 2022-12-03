import Navbar from "../../components/Navbar";
import Footer from "../../components/Footer";
import Data from "./Gorevliler";
import { GrNext } from "react-icons/gr";
import { useState } from "react";
export default function Hakkimizda() {
  const [num1, changeNum1] = useState(3);
  const [num2, changeNum2] = useState(4);
  const [num3, changeNum3] = useState(5);

  function handleChangeMin() {
    if (num1 > 0) {
      changeNum1(num1 - 1);
      changeNum2(num2 - 1);
      changeNum3(num3 - 1);
    }
  }
  function handleChangeAdd() {
    if (num3 < Data.length - 1) {
      changeNum1(num1 + 1);
      changeNum2(num2 + 1);
      changeNum3(num3 + 1);
    }
  }
  return (
    <div className="Hakkimizdadiv">
      <Navbar />
      <div className="Hero">
        <h1>Misket Dergisi Hakkında </h1>
      </div>
      <div className="Hakkimizda">
        <div className="Hakkimizda-resim">
          <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR2TRVPn2dWEtuMfCChycOZ3RkN-06xzs-hMCDJl9l2OpZyVHP3EVjEOSpP-DsmUS91gj8&usqp=CAU" />
        </div>
        <div className="Hakkimizda-text">
          <h1>Biz kimiz ?</h1>
          <br />
          <p>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Proin
            tristique eros sit amet ipsum ornare aliquet. Pellentesque tincidunt
            odio ac purus consequat, non ornare lacus pharetra. Duis imperdiet
            libero a velit lobortis, lobortis dignissim eros lobortis. Donec
            sagittis augue et iaculis finibus. Fusce ac semper arcu, a venenatis
            eros. Quisque mattis ligula vel tortor laoreet rhoncus. Aenean erat
            est,{" "}
          </p>
          <br />

          <div className="Submit-button">
            <button className="yazarol">Yazar Ol </button>
          </div>
        </div>
      </div>{" "}
      <div className="gorevlilerMobile">
        <div>
          <h1 className="">Yönetim Kurulu</h1>
        </div>

        <div className="gorevliList">
          {Data.map((data) => (
            <div className="gorevli">
              <img src={data.image}></img>
              <h1>{data.name}</h1>
              <h2>{data.görev}</h2>
            </div>
          ))}
        </div>
      </div>
      <div className="centered-label">
        <h1>Yönetim Kurulu</h1>
      </div>
      <div className="gorevliler">
        <button onClick={handleChangeMin}>{" <"}</button>
        <div className="gorevli">
          <img src={Data[num1].image} />
          <h1>{Data[num1].name}</h1>
          <h2>{Data[num1].görev}</h2>
        </div>
        <div className="gorevli">
          {" "}
          <img src={Data[num2].image} />
          <h1>{Data[num2].name}</h1>
          <h2>{Data[num2].görev}</h2>
        </div>
        <div className="gorevli">
          <img src={Data[num3].image} />
          <h1>{Data[num3].name}</h1>
          <h2>{Data[num3].görev}</h2>
        </div>

        <button onClick={handleChangeAdd}>{">"}</button>
      </div>
      <br />
      <br />
      <br />
      <Footer />
    </div>
  );
}
/* url(https://web-assets.bcg.com/dims4/default/d413228/2147483647/strip/true/crop/2880x1512+0+54/resize/1200x630!/quality/90/?url=http%3A%2F%2Fboston-consulting-group-brightspot.s3.amazonaws.com%2F33%2F27%2F5f1dffb148eca51da46706bf6da9%2Fbcg-istanbul-office.jpg)
<div
/*className="Hero"
style={{
  background: ""
}}
>
<h1>Misket Dergisi </h1>
</div>*/
/*
 {Data.map((data) => (
          <div className="gorevli">
            <img src={data.image}></img>
            <h1>{data.name}</h1>
            <h2>{data.görev}</h2>
            <a>{data.ig}</a>
          </div>
        ))}*/
