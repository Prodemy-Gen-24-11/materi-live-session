import { useEffect, useState } from "react";
import axios from "axios";
import useSWR from "swr";

function App() {
  // const [data, setData] = useState([]);
  const [num, setNum] = useState(0);
  // const [isLoading, setLoading] = useState(false);

  // function fetchData() {
  //   fetch("http://localhost:3000/cats")
  //     .then((res) => res.json())
  //     .then((result) => setData(result))
  //     .catch((err) => console.log(err));
  // }

  function postData() {
    const payload = {
      name: "Meong",
      breed: "British Short Hair",
    };

    // fetch("http://localhost:3000/cats", {
    //   method: "POST",
    //   body: JSON.stringify(payload),
    //   headers: {
    //     "Content-Type": "application/json",
    //   },
    // }).then(() => console.log("New cat added!"));

    axios
      .post("http://localhost:3000/cats", payload)
      .then(() => {
        console.log("New data added!");
        // fetchAllData(); // manual fetch
        mutate();
      })
      .catch((err) => console.log(err));
  }

  // function fetchAllData() {
  //   setLoading(true);
  //   axios
  //     .get("http://localhost:3000/cats")
  //     .then((res) => {
  //       setData(res.data);
  //       setLoading(false);
  //     })
  //     .catch((err) => console.log(err));
  // }

  const getData = (url) => axios.get(url).then((res) => res.data);
  const { data, isLoading, error, mutate } = useSWR("http://localhost:3000/cats", getData);

  if (error) {
    return <p>{error.message}</p>;
  }

  // useEffect(() => {
  //   fetchAllData();
  //   // console.log("run");
  // }, []);

  return (
    <>
      <h1 className="font-bold text-center">Blog</h1>
      <div className="flex flex-col items-center">
        <div className="flex gap-4">
          {/* <button className=" bg-blue-300 rounded p-2 w-32" onClick={fetchData}>
            Fetch Data
          </button> */}

          <button className=" bg-blue-300 rounded p-2 w-32" onClick={postData}>
            Post Data
          </button>
          {/* <button onClick={() => setNum(num + 1)}>Count</button> */}
        </div>

        <div className="grid grid-cols-3 gap-4">
          {isLoading ? (
            <p>Loading...</p>
          ) : (
            data?.map((cat) => <p key={cat.id}>{cat.name}</p>)
          )}

          {/* {data?.map((cat) => <p key={cat.id}>{cat.name}</p>)} */}
        </div>

        {/* <p>{num}</p> */}
      </div>
    </>
  );
}

export default App;
