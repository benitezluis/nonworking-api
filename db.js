import mongoose from "mongoose";

const connectDb = () => {
  return mongoose.connect("mongodb://localhost:27017/workingdays", {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  });
};

export default connectDb;
