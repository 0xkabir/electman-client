import React from "react";
import toast from "react-hot-toast";
import { useForm } from "react-hook-form";
import useTitle from "../../hooks/useTitle";

const AddService = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
    reset
  } = useForm();
  useTitle("Add Service");
  const imgHostKey = process.env.REACT_APP_imgHostKey;

  const handleAddService = (data) => {
    const thumbnail = data.thumbnail[0];
    const fullimg = data.fullimg[0];
    const formData = new FormData();
    formData.append("image", thumbnail);
    const url = `https://api.imgbb.com/1/upload?key=${imgHostKey}`;
    fetch(url, {
      method: "POST",
      body: formData,
    })
      .then((res) => res.json())
      .then((thumbData) => {
        if (thumbData.success) {
          formData.append("image", fullimg);
          fetch(`https://api.imgbb.com/1/upload?key=${imgHostKey}`, {
            method: "POST",
            body: formData,
          })
            .then((response) => response.json())
            .then((fullimgData) => {
              if (fullimgData.success) {
                const serviceObj = {
                  name: data.name,
                  imgurl: thumbData.data.url,
                  fullimg: fullimgData.data.url,
                  price: data.price,
                  intro: data.intro,
                  description: data.description,
                };
                fetch('https://electman-server.vercel.app/services', {
                  method: "POST",
                  headers: {
                    "content-type": "application/json",
                  },
                  body: JSON.stringify(serviceObj),
                })
                  .then((response) => response.json())
                  .then((data) => {
                    if (data.acknowledged) {
                      reset()
                      toast.success("Service added successfully");
                    }
                  });
              }
            });
        }
      });

    console.log(data);
  };
  return (
    <div className="text-center">
      <h2 className="text-5xl font-medium text-center my-10">Add a Service</h2>
      <form onSubmit={handleSubmit(handleAddService)}>
        <div className="form-control text-left w-11/12 md:w-3/4 lg:w-1/2 mx-auto">
          <label className="label text-gray-600">
            {" "}
            <span>Service Name</span>
          </label>
          <input
            type="text"
            {...register("name", {
              required: "Name is Required",
            })}
            className="w-full my-1 rounded border-2 border-gray-400 focus:border-orange-600 focus:ring-0"
          />
          {errors.name && <p className="text-red-500">{errors.name.message}</p>}
        </div>
        <div className="form-control text-left w-11/12 md:w-3/4 lg:w-1/2 mx-auto">
          <label className="label text-gray-600">
            {" "}
            <span>Thumbnail Image</span>
          </label>
          <input
            type="file"
            {...register("thumbnail", {
              required: "Thumbnail image is required",
            })}
            className="w-full my-1 rounded border-2 border-gray-400"
          />
          {errors.name && (
            <p className="text-red-500">{errors.thumbnail.message}</p>
          )}
        </div>
        <div className="form-control text-left w-11/12 md:w-3/4 lg:w-1/2 mx-auto">
          <label className="label text-gray-600">
            {" "}
            <span>Full Size Image</span>
          </label>
          <input
            type="file"
            {...register("fullimg", {
              required: "Full image is required",
            })}
            className="w-full my-1 rounded border-2 border-gray-400"
          />
          {errors.name && (
            <p className="text-red-500">{errors.fullimg.message}</p>
          )}
        </div>
        <div className="form-control text-left w-11/12 md:w-3/4 lg:w-1/2 mx-auto">
          <label className="label text-gray-600">
            {" "}
            <span>Service Price (in $)</span>
          </label>
          <input
            type="text"
            {...register("price", {
              required: "Service price is Required",
            })}
            className="w-full my-1 rounded border-2 border-gray-400 focus:border-orange-600 focus:ring-0"
          />
          {errors.name && (
            <p className="text-red-500">{errors.price.message}</p>
          )}
        </div>
        <div className="form-control text-left w-11/12 md:w-3/4 lg:w-1/2 mx-auto">
          <label className="label text-gray-600">
            {" "}
            <span>Service Introduction</span>
          </label>
          <textarea
            type="text"
            rows="2"
            {...register("intro", {
              required: "Service price is Required",
            })}
            className="w-full my-1 rounded border-2 border-gray-400 focus:border-orange-600 focus:ring-0"
          />
          {errors.name && (
            <p className="text-red-500">{errors.intro.message}</p>
          )}
        </div>
        <div className="form-control text-left w-11/12 md:w-3/4 lg:w-1/2 mx-auto">
          <label className="label text-gray-600">
            {" "}
            <span>Service Description</span>
          </label>
          <textarea
            type="text"
            rows="5"
            {...register("description", {
              required: "Service description is Required",
            })}
            className="w-full my-1 rounded border-2 border-gray-400 focus:border-orange-600 focus:ring-0"
          />
          {errors.name && (
            <p className="text-red-500">{errors.description.message}</p>
          )}
        </div>

        <button
          type="submit"
          className="px-4 py-1 rounded font-medium border border-orange-600 text-orange-600 hover:bg-orange-600 hover:text-white"
        >
          Add Service
        </button>
      </form>
    </div>
  );
};

export default AddService;
