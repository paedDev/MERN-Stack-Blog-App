import mongoose from "mongoose";
import Blog from "../model/Blog.js";

//fetch list of blogs
//add a new blog
// delete a blog
//update a blog

export const fetchListOfBlogs = async (req, res) => {
  let blogList;
  try {
    blogList = await Blog.find();
  } catch (e) {
    console.log(error);
  }
  if (!blogList) {
    return res.status(404).json({ message: "No Blogs Found" });
  }

  return res.status(200).json({ blogList });
};

export const addNewBlog = async (req, res) => {
  const { title, description } = req.body;
  const currentDate = new Date();
  if (!title || !description) {
    return res
      .send(400)
      .json({ message: "Title and Description are required. " });
  }
  const newlyCreatedBlog = new Blog({
    title,
    description,
    date: currentDate,
  });
  try {
    await newlyCreatedBlog.save();
    return res.status(201).json({ newlyCreatedBlog });
  } catch (e) {
    console.error("Error saving blog:", e);
    return ress
      .status(500)
      .json({ message: "Failed to save blog. Please try again." });
  }
};

export const deleteABlog = async (req, res) => {
  const id = req.params.id;
  try {
    const findCurrentBlog = await Blog.findByIdAndDelete(id);
    if (!findCurrentBlog) {
      return res.status(404).json({ message: "Blog not found" });
    }
    return res.status(200).json({ message: "Successfully Deleted" });
  } catch (e) {
    console.log(e);
    return res
      .status(500)
      .json({ message: "Unable to delete! Please try again" });
  }
};

export const updateABlog = async (req, res) => {
  const id = req.params.id;
  const { title, description } = req.body;
  let currentBlogToUpdate;

  try {
    currentBlogToUpdate = await Blog.findByIdAndUpdate(id, {
      title,
      description,
    });
  } catch (e) {
    console.log(e);
    return res.send(500).json({
      message: "Something went wrong while updating ! Please try again",
    });
  }
  if (!currentBlogToUpdate) {
    return res.status(500).json({ message: "Unable to update" });
  }
  return res.send(200).json({ currentBlogToUpdate });
};
