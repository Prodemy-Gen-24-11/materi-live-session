import { useLocation, useParams, useSearchParams } from "react-router";
import { pokemon } from "../data/pokemon";

function Detail() {
  // useParams
  const { id } = useParams();
  console.log(id);
  // const data = pokemon.find((item) => item.id === parseInt(id));
  // console.log(data);
  // get data with useSearchParams (params showed in url)
  // const [searchParams] = useSearchParams();
  // console.log(searchParams.get("name"));

  // get data with useLocation (state not showed in url)
  const location = useLocation();
  console.log("name", location.state.name);

  return (
    <div className="text-center">
      <h1 className="font-bold text-xl">detail</h1>
      {/* <img src={data.img} alt={data.name} /> */}
    </div>
  );
}

export default Detail;
