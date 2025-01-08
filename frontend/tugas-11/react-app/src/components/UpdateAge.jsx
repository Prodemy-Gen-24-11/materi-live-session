import { useState } from "react";

function UpdateAge() {
  const [userData, setUserData] = useState({
    name: "Felis Catus",
    age: 9,
  });

  function changeAge() {
    setUserData({
      ...userData,
      age: 12,
    });
  }

  return (
    <div className="p-4">
      <h1 className="font-bold">User Data</h1>
      <p>Name: {userData.name}</p>
      <p>Age: {userData.age}</p>
      <button className="p-2 mt-2 bg-sky-400 rounded" onClick={changeAge}>
        Change Age
      </button>
    </div>
  );
}

export default UpdateAge;
