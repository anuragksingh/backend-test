import express from "express";
const app = express();
import { mongoDBlink } from "./config/db.js";
import user from "./routes/user.routers.js";
import todo from './routes/task.routers.js'
const PORT = 8000;


//DB connteced
mongoDBlink();

app.use(express.json());

// router
app.use("/api/v1/user", user);
app.use("/api/v1/todo", todo)


app.listen(PORT, () => {
  console.log(`Port is running on ${PORT}`);
});
