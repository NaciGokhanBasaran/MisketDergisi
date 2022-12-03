import Navbar from "../../components/Navbar";
import Footer from "../../components/Footer";
import Data from "../../components/Data";
import { useState } from "react";
import { BsFillArrowRightSquareFill } from "react-icons/bs";
import { BsFillArrowLeftSquareFill } from "react-icons/bs";
export default function DergiBilgi(props) {
  let yazi =
    "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Proin tristique eros sit amet ipsum ornare aliquet. Pellentesque tincidunt odio ac purus consequat, non ornare lacus pharetra. Duis imperdiet libero a velit lobortis, lobortis dignissim eros lobortis. Donec sagittis augue et iaculis finibus. Fusce ac semper arcu, a venenatis eros. Quisque mattis ligula vel tortor laoreet rhoncus. Aenean erat est, ";
  const [number1, changeNumber1] = useState(0);
  const [number2, changeNumber2] = useState(1);
  const [number3, changeNumber3] = useState(2);
  function addNum() {
    console.log(number1);

    if (number1 == Data.length - 1) {
      changeNumber1(0);
      changeNumber2(number2 + 1);
      changeNumber3(number3 + 1);
    } else if (number2 == Data.length - 1) {
      changeNumber2(0);
      changeNumber1(number1 + 1);
      changeNumber3(number3 + 1);
    } else if (number3 == Data.length - 1) {
      changeNumber3(0);
      changeNumber1(number1 + 1);
      changeNumber2(number2 + 1);
    } else {
      changeNumber1(number1 + 1);
      changeNumber2(number2 + 1);
      changeNumber3(number3 + 1);
    }
  }
  function remProps() {
    console.log(number1);

    if (number1 == 0) {
      changeNumber1(Data.length - 1);
      changeNumber2(number2 - 1);
      changeNumber3(number3 - 1);
    } else if (number2 == 0) {
      changeNumber2(Data.length - 1);
      changeNumber1(number1 - 1);
      changeNumber3(number3 - 1);
    } else if (number3 == 0) {
      changeNumber3(Data.length - 1);
      changeNumber1(number1 - 1);
      changeNumber2(number2 - 1);
    } else {
      changeNumber1(number1 - 1);
      changeNumber2(number2 - 1);
      changeNumber3(number3 - 1);
    }
  }

  return (
    <div className="DergiBilgiDiv">
      <Navbar />
      <div className="dergiBilgi">
        <div className="dergiResim">
          <iframe
            src="https://online.fliphtml5.com/zmcsm/gxuh/"
            seamless="seamless"
            scrolling="no"
            frameborder="0"
            allowtransparency="true"
            allowfullscreen="true"
          ></iframe>
        </div>
        <div className="dergiYazi">
          <h1>{props.name}</h1>
          <div className="dergiYazi">
            <p className="misketdergi-yazi">{yazi}</p>
          </div>
          <br />
          <br />
          <div className="Submit-button">
            <button href="#"> Hemen Oku </button>
          </div>
        </div>
      </div>
      <div className="digerSayilarMobile">
        <h1>Diğer sayılar</h1>
        <br />
        <br />
        <div className="digersayilarlist">
          {Data.map((data) => (
            <a href={"/" + data.url}>
              <div className="digersayilarMobilimg">
                <img src={data.image}></img>
              </div>
            </a>
          ))}
        </div>
      </div>
      <div className="digerSayilar">
        <button onClick={remProps}>
          {" "}
          <BsFillArrowLeftSquareFill />{" "}
        </button>
        <div className="digerSayilarImg">
          <a href={"/" + Data[number1]["url"]}>
            <img className="img1" src={Data[number1]["image"]} />
          </a>
          <a href={"/" + Data[number2]["url"]}>
            <img className="img2" src={Data[number2]["image"]} />
          </a>
          <a href={"/" + Data[number3]["url"]}>
            <img className="img3" src={Data[number3]["image"]} />
          </a>
        </div>
        <button onClick={addNum}>
          {" "}
          <BsFillArrowRightSquareFill />{" "}
        </button>
      </div>

      <Footer />
    </div>
  );
}
/**
 * Yazı ile resimi ayır
 * resimin boyunu ayarla
 * diğer sayılar kısmı ekle
 */
