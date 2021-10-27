import axios from "axios";
import React from "react";
import { useForm } from "react-hook-form";
import "./AddServices.css";
const AddServices = () => {
  const { register, handleSubmit, reset } = useForm();
  const onSubmit = (data) => {
    axios
      .post("https://stormy-crag-33356.herokuapp.com/services", data)
      .then((res) => {
        if (res.data.insertedId) {
          alert("Successfully Inserted");
          reset();
        }
        console.log(res);
      });

    console.log(data);
  };

  return (
    <div className="add-service">
      <h1>Add Services</h1>

      <form onSubmit={handleSubmit(onSubmit)}>
        <input {...register("name", { required: true })} placeholder="Name" />
        <textarea {...register("description")} placeholder="Description" />
        <input type="number" {...register("price")} placeholder="Price" />
        <input type="text" {...register("url")} placeholder="Image Url" />
        <input type="submit" />
      </form>
    </div>
  );
};

export default AddServices;
