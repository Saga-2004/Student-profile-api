import mongoose from "mongoose";

let dbConnection = () => {
  mongoose
    .connect(process.env.MONGODB_URL)
    .then(() => {
      console.log("DB Connection Success");
    })
    .catch((err) => {
      console.log("DB Connection Un-Success");
    });
};

export default dbConnection;
