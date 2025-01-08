import Card from "./Card";

function Places({ places }) {
  return (
    <div>
      <h1 className="text-2xl font-bold text-center">Places to visit</h1>
      <div className="grid grid-cols-2 gap-8">
        {places.map((item) => (
          <Card
            key={item.id}
            name={item.name}
            image={item.img}
            city={item.city}
          />
        ))}
      </div>
    </div>
  );
}

export default Places;
