import { useState } from "react";

export default function User() {
  const [name, setName] = useState("Miyamura");

  function handleChange() {
    setName("Nanami");
  }

  // function onClick(name) {
  //   console.log("hello", name);
  // }

  return (
    <div>
      <h1 className="font-bold text-lg">Hello World</h1>
      <p>My Name is {name}</p>
      <button
        className="p-2 rounded bg-sky-300"
        onClick={handleChange}
      >
        Change Name
      </button>
    </div>
  );
}
