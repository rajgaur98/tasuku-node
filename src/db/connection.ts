import mongoose from "mongoose";

const connect = () =>
  mongoose
    .connect("mongodb://localhost:27017/tasuku", {
      useNewUrlParser: true,
      useUnifiedTopology: true,
    })
    .then(() => console.log("mongodb connected"))
    .catch(() => console.log("error connecting to mongodb"));

export default connect;
