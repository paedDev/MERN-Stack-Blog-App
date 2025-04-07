//Na2hEDBRCU6KzLCR password
//username
//mongodb+srv://jannoelpaed17:Na2hEDBRCU6KzLCR@blogapp.fsj1nck.mongodb.net/
//mongodb+srv://jannoelpaed17:Na2hEDBRCU6KzLCR@blogapp.fsj1nck.mongodb.net/?retryWrites=true&w=majority&appName=BlogApp

import mongoose from "mongoose";

export default function connectDb() {
  mongoose.set("strictQuery", false);
  mongoose
    .connect(
      "mongodb+srv://jannoelpaed17:Na2hEDBRCU6KzLCR@blogapp.fsj1nck.mongodb.net/?retryWrites=true&w=majority&appName=BlogApp"
    )
    .then(() => console.log(`Connected to mongodb`))
    .catch((e) => console.log(e));
}
