import { useState } from "react";
import axios from "axios";
import { useForm } from "react-hook-form";
import * as yup from "yup";
import { yupResolver } from "@hookform/resolvers/yup";

function FormRHF() {
  const schema = yup.object().shape({
    name: yup.string().required("Name is required"),
    email: yup.string().email().required("Email is required"),
  });

  // useForm
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({
    resolver: yupResolver(schema),
  });

  // submit form
  const onSubmitForm = (data) => {
    console.log(data);

    axios
      .post("http://localhost:3000/students", data)
      .then(() => console.log("Berhasil menambahkan data baru"))
      .catch((err) => console.log(err));
  };

  return (
    <div className="p-8 flex flex-col justify-center items-center">
      <h1 className="font-bold text-lg">Form</h1>
      <form
        className="flex flex-col gap-4 mt-4"
        onSubmit={handleSubmit(onSubmitForm)}
      >
        <div>
          <label htmlFor="name">Name</label>
          <input
            placeholder="Name"
            className="w-full rounded-lg border-[1px] border-gray-300 p-4 pe-12 text-sm focus:outline-sky-200"
            id="name"
            {...register("name")}
          />
          <p className="text-red-600">{errors.name?.message}</p>
        </div>

        <div>
          <label htmlFor="email">Email</label>
          <input
            placeholder="Email"
            className="w-full rounded-lg border-[1px] border-gray-300 p-4 pe-12 text-sm focus:outline-sky-200"
            id="email"
            {...register("email")}
          />
          <p className="text-red-600">{errors.email?.message}</p>
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

export default FormRHF;
