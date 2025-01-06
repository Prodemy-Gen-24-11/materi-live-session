function Greeting({ img, onClickBtn }) {
  const role = "user";

  return (
    <div>
      <h1>Functional Component</h1>
      <img src={img} alt="img" width={80} height={60} />
      <br/>
      <button onClick={() => onClickBtn(role)}>Click here</button>
    </div>
  );
}

export default Greeting;
