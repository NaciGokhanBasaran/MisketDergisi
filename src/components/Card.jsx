import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";
import DergiBilgi from "../pages/DergiBilgi/DergiBilgi";

export default function Card(props) {
  return (
    <div class="card">
      <Link to={props.url}>
        <img class="card__image" src={`${props.image}`} alt=""></img>
      </Link>
    </div>
  );
}
