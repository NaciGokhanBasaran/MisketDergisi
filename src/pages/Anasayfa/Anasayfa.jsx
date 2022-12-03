import Navbar from "../../components/Navbar";
import Cards from "../../components/Cards";
import Text from "../../components/Text";
import CardsDiv from "../../components/CardDiv";
import Footer from "../../components/Footer";

export default function Anasayfa() {
  return (
    <div className="Anasayfa">
      <Navbar />
      <Text />
      <CardsDiv />
      <Cards />
      <br />
      <Footer />
    </div>
  );
}
