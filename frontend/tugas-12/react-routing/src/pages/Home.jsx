import { createSearchParams, Link, Outlet, useNavigate } from "react-router";
import { pokemon as data } from "../data/pokemon";
import Card from "../components/Card";

function Home() {
  const navigate = useNavigate();

  // const onClickCard = () => {
  //   navigate(`/detail`);
  // };

  // passing data with search params
  // const onClickCard = (id, name) => {
  //   navigate({
  //     pathname: `/detail/${id}`,
  //     search: createSearchParams({
  //       name: name,
  //     }).toString(),
  //   });
  // };

  // passing data with state
  const onClickCard = (id, name) => {
    navigate(`/detail/${id}`, {
      state: {
        name: name,
      },
    });
  };

  return (
    <section className="flex flex-col justify-cente mt-8 p-8">
      <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
        {data.map(({ id, name, img }) => (
          // <Link to={`/detail/${id}`} key={id}>
            <Card
              title={name}
              image={img}
              key={id}
              onClick={() => onClickCard(id, name)}
            />
          // </Link>
        ))}
      </div>

      <Outlet />
    </section>
  );
}

export default Home;
