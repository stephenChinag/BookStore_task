import express from "express";

import mongoose from "mongoose";
import booksRoute from "./routes/booksRoute.js";
import cors from "cors";

const app = express();

// Middleware for parsing request body
app.use(express.json());

// Middleware for handling CORS POLICY
// Option 1: Allow All Origins with Default of cors(*)
app.use(cors());

app.get("/", (request, response) => {
  console.log(request);
  return response.status(234).send("My Book Task");
});

app.use("/books", booksRoute);

mongoose
  .connect(
    "mongodb+srv://stephenchinag:V6PpZZqSGcKQFRHu@cluster0.xpjx268.mongodb.net/?retryWrites=true&w=majority"
  )
  .then(() => {
    console.log("App connected to database");
    app.listen(5555, () => {
      console.log(`App is listening to port:`);
    });
  })
  .catch((error) => {
    console.log(error);
  });
