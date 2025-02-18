import { useState } from "react";

function FormOneState() {
  // create state to store data form
  const [dataForm, setDataForm] = useState({
    name: "kucing",
    email: "",
    city: "Bandung",
    gender: "female",
    image: "",
    agree: false,
  });

  const options = [
    {
      id: 1,
      name: "Jakarta",
    },
    {
      id: 2,
      name: "Bandung",
    },
  ];

  // on change function
  const onChangeForm = (e) => {
    setDataForm({
      ...dataForm,
      [e.target.name]: e.target.value,
    });
  };

  const onSubmitForm = (e) => {
    e.preventDefault();
    console.log("form data", dataForm);
  };

  return (
    <div className="p-8 flex flex-col justify-center items-center">
      <h1 className="font-bold text-lg">Form</h1>
      <form className="flex flex-col gap-4 mt-4" onSubmit={onSubmitForm}>
        <div>
          <label htmlFor="name">Name</label>
          <input
            placeholder="Name"
            className="w-full rounded-lg border-[1px] border-gray-300 p-4 pe-12 text-sm focus:outline-sky-200"
            name="name"
            id="name"
            value={dataForm.name}
            onChange={onChangeForm}
          />
        </div>

        <div>
          <label htmlFor="email">Email</label>
          <input
            placeholder="Email"
            className="w-full rounded-lg border-[1px] border-gray-300 p-4 pe-12 text-sm focus:outline-sky-200"
            name="email"
            id="email"
            value={dataForm.email}
            onChange={onChangeForm}
          />
        </div>

        <div>
          <label htmlFor="city">City</label>
          <select
            placeholder="City"
            className="p-4 pe-12 w-full rounded-lg border-[1px] border-gray-300 text-gray-700 sm:text-sm"
            name="city"
            id="city"
            value={dataForm.city}
            onChange={onChangeForm}
          >
            {options.map((option) => (
              <option key={option.id} value={option.name}>
                {option.name}
              </option>
            ))}
          </select>
        </div>

        <div className="flex gap-8">
          <p>Gender</p>
          <div className="flex gap-2">
            <input
              type="radio"
              id="male"
              name="gender"
              value="male"
              checked={dataForm.gender == "male"}
              onChange={onChangeForm}
            />
            <label htmlFor="male">Male</label>
          </div>

          <div className="flex gap-2">
            <input
              type="radio"
              id="female"
              name="gender"
              value="female"
              checked={dataForm.gender == "female"}
              onChange={onChangeForm}
            />
            <label htmlFor="female">Female</label>
          </div>
        </div>

        <div className="flex gap-2">
          <input
            type="checkbox"
            name="agree"
            id="agree"
            checked={dataForm.agree}
            onChange={(e) =>
              setDataForm({
                ...dataForm,
                agree: e.target.checked,
              })
            }
          />
          <label htmlFor="agree">I agree to terms and conditions</label>
        </div>

        <div>
          <label for="upload">Upload</label>
          <br />
          <input
            id="upload"
            name="image"
            type="file"
            onChange={(e) => {
              setDataForm({
                ...dataForm,
                image: e.target.files[0],
              });
            }}
          />
        </div>

        <button
          className="rounded-lg bg-sky-400 p-2 text-white self-center w-full"
          type="submit"
        >
          Submit
        </button>
      </form>
    </div>
  );
}

export default FormOneState;
