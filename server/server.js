import express from "express";
import cors from "cors";
import connectDb from "./db/index.js";
import blogRouter from "./route/blog-route.js";
const app = express();
connectDb();
const PORT = 5000;
app.use(cors());

app.use(express.json());
app.use("/api/blogs", blogRouter);

app.use("/api", (req, res) => {
  res.send("Hello World");
});

app.listen(PORT, (req, res) => {
  console.log(`Listining to port ${PORT}`);
});
