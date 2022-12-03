import Data from "./Data";
import Card from "./Card";

export default function Cards() {
  return (
    <div className="cards">
      {Data.map((data) => (
        <Card image={data.image} name={data.name} url={data.url} />
      ))}
    </div>
  );
}
