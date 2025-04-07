import React, { useContext, useEffect } from "react";
import { GlobalContext } from "../../context";
import axios from "axios";
import { FaTrash, FaEdit } from "react-icons/fa";
import { useNavigate } from "react-router-dom";
import toast, { Toaster } from "react-hot-toast";
const Home = () => {
  const { blogList, setBlogList, pending, setPending } =
    useContext(GlobalContext);
  const navigate = useNavigate();

  async function fetchListOfBlogs() {
    setPending(true);
    const response = await axios.get("http://localhost:5000/api/blogs");
    const result = await response.data;
    if (result && result.blogList && result.blogList.length) {
      setBlogList(result.blogList);
      setPending(false);
    } else {
      setPending(false);
      setBlogList([]);
    }
  }
  useEffect(() => {
    fetchListOfBlogs();
  }, []);

  async function handleDeleteBlog(getCurrentId) {
    const response = await axios.delete(
      `http://localhost:5000/api/blogs/delete/${getCurrentId}`
    );

    const result = await response.data;

    if (result?.message) {
      fetchListOfBlogs();
      // navigate(0);
    }
    toast.success("Successfully deleted");
  }
  return (
    <div className=" max-w-8xl mx-auto p-8 space-y-5">
      <Toaster position="top-center" />
      <h1>Blog Lists</h1>
      {pending ? (
        <h1>Loading Blogs ! Please wait</h1>
      ) : (
        <div className="grid lg:grid-cols-4 md:grid-cols-2 grid-cols-1 gap-4 ">
          {blogList && blogList.length ? (
            blogList.map((blogItem) => (
              <div
                key={blogItem._id}
                className="px-10 py-10 border-2 border-slate-500 shadow-xl rounded-xl space-y-5 "
              >
                <p>{blogItem.title}</p>
                <p>{blogItem.description}</p>
                <div className="flex space-x-6">
                  <FaEdit size={30} />
                  <FaTrash
                    size={30}
                    onClick={() => handleDeleteBlog(blogItem._id)}
                  />
                </div>
              </div>
            ))
          ) : (
            <h3>No Blogs Added</h3>
          )}
        </div>
      )}
    </div>
  );
};

export default Home;
