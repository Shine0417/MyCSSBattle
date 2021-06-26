import mongoose from "mongoose";
import dotenv from "dotenv-defaults";
//create db
console.log(dotenv.config().error);

mongoose
  .connect(process.env.MONGO_URL, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
    useFindAndModify: false,
    useCreateIndex: true,
  })
  .then((response) => console.log("mongo db connection created"));

const db = mongoose.connection;
db.on("error", (err) => console.log(err));
db.once("open", async () => {
  console.log("mongo db connected")
});

export default db;