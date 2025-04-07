import React, { useContext } from "react";
import { GlobalContext } from "../../context";
import axios from "axios";
import { useNavigate } from "react-router-dom";
const AddNewBlog = () => {
  const { formData, setFormData } = useContext(GlobalContext);
  const navigate = useNavigate();

  async function handleSaveBlogToDatabase() {
    const response = await axios.post("http://localhost:5000/api/blogs/add", {
      title: formData.title,
      description: formData.description,
    });
    const result = await response.data;

    if (result) {
      setFormData({
        title: "",
        description: "",
      });
      navigate("/");
    }
  }
  return (
    <div className="p-6 space-y-2 ">
      <h1 className="">Add A Blog</h1>
      <div className="flex flex-col w-md gap-5 bg-gradient-to-r from-slate-400 to-slate-700 text-white p-10 rounded-2xl shadow-xl">
        <div className="flex  ">
          <input
            type="text"
            name="title"
            placeholder="Enter Blog Title"
            className="w-full outline-none placeholder:text-gray-300"
            id="title"
            value={formData.title}
            onChange={(e) =>
              setFormData({
                ...formData,
                title: e.target.value,
              })
            }
          />
        </div>

        <textarea
          name="description"
          placeholder="Enter Blog Description"
          id="description"
          className="w-full outline-none placeholder:text-gray-300 mb-5"
          value={formData.description}
          onChange={(e) => {
            setFormData({
              ...formData,
              description: e.target.value,
            });
          }}
        />
        <button
          className="bg-slate-400 py-1 rounded-xl hover:scale-105 duration-500"
          onClick={handleSaveBlogToDatabase}
        >
          Add New Blog
        </button>
      </div>
    </div>
  );
};

export default AddNewBlog;
