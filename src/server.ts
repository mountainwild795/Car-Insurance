import app from "./app";
// import mongoose from "mongoose";

const port = process.env.PORT;

// mongoose
//   .connect(env.MONGO_CONNECTION_STRING)
//   .then(() => {
//     console.log("Mongoose connected");
app.listen(port, () => {
  console.log("server running on the port " + port);
});
// })
// .catch(console.error);
