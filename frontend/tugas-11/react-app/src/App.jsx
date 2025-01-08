import Counter from "./components/Counter";
import Places from "./components/Places";
import TodoList from "./components/ToDoList";
import UpdateAge from "./components/UpdateAge";
import User from "./components/User";

const places = [
  {
    id: 1,
    name: "Beach",
    city: "Lombok",
    description:
      "a landform alongside a body of water which consists of loose particles. ",
    img: "https://www.novo-monde.com/app/uploads/2023/03/pink-beach-lombok-1024x680.jpg",
    price: 50000,
  },
  {
    id: 2,
    name: "Mountain",
    city: "Dieng",
    description:
      "elevated portion of the Earth's crust, generally with steep sides that show significant exposed bedrock.",
    img: "https://cdn.paradisotour.co.id/wp-content/uploads/2024/02/pesona-alam-dieng.jpg",
    price: 60000,
  },
];

function App() {
  return (
    <div className="p-8">
      {/* <Places places={places} /> */}
      {/* <User /> */}
      {/* <Counter /> */}
      {/* <UpdateAge /> */}
      <TodoList />
    </div>
  );
}

export default App;
