import UserGreeting from "./ClassComponent";
import Greeting from "./FunctionalComponent";

function App() {
  const color = "blue";
  const urlImg =
    "https://i.natgeofe.com/n/4cebbf38-5df4-4ed0-864a-4ebeb64d33a4/NationalGeographic_1468962_3x4.jpg";

  const name = "Oreo";
  const isLoggedIn = true;

  const messages = [
    {
      id: 1,
      message: "hello",
    },
    {
      id: 2,
      message: "good bye",
    },
  ];

  // If-else conditional rendering
  // if (isLoggedIn) {
  //   return (
  //     <h1>Hello {name}</h1>
  //   )
  // } else {
  //   return (
  //     <h1>User is not logged in</h1>
  //   )
  // }

  // ternary conditional rendering
  // return (
  //   <div>
  //     {isLoggedIn ? <h1>Hello {name}</h1> : <h1>User is not logged in</h1>}

  //     {messages.length > 0 && (
  //       <ul>
  //         {messages.map((item) => (
  //           <li key={item.id}>{item.message}</li>
  //         ))}
  //       </ul>
  //     )}
  //   </div>
  // );

  // return (
  //   <>
  //     <h1>Learn JSX</h1>
  //     <p>{color}</p>
  //     <img src={urlImg} alt="cat" width={20} height={20} />
  //   </>
  // );

  const onClickButton = (role) => {
    alert(`this is ${role}`);
  };

  return (
    <div>
      <UserGreeting />
      <Greeting img={urlImg} onClickBtn={onClickButton} />
    </div>
  );
}

export default App;
