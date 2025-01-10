import axios from "axios";

// axios
//   .get("https://dummyjson.com/products")
//   .then((res) => console.log(res.data))
//   .catch((err) => console.log(err));

async function getData() {
  try {
    const res = await axios.get("https://dummyjson.com/products");
    console.log(res.data);
  } catch (error) {
    console.log(error);
  }
}

// getData();

const addNew = {
  title: "New product",
};

const newPost = async (payload) => {
  const res = await axios.post("https://dummyjson.com/products/add", payload);
  console.log(res);
};

newPost(addNew);
