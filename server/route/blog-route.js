import express from "express";

import {
  fetchListOfBlogs,
  addNewBlog,
  updateABlog,
  deleteABlog,
} from "../controller/blog-controller.js";
const blogRouter = express.Router();
blogRouter.get("/", fetchListOfBlogs);
blogRouter.post("/add", addNewBlog);
blogRouter.put("/update/:id", updateABlog);
blogRouter.delete("/delete/:id", deleteABlog);

export default blogRouter;
