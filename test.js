import mongoose from "mongoose";

mongoose.connect(
"mongodb+srv://taniya:taniya321@cluster0.lpkdltj.mongodb.net/testDB"
)
.then(() => {
  console.log("MongoDB Connected ✅");
})
.catch((err) => {
  console.log("Connection Error ❌");
  console.log(err);
});