import express from "express";
import cors from "cors";
import bodyParser from "body-parser";
import taskRoutes from "./routes/tasks.js";
import db from './Config/db.js'

const app = express();
const PORT = 3000;


app.use(cors());
app.use(bodyParser.json());

// Connect to DB when the server is initialized
db.connection.once('open', () => {
    console.log('db connected successfully!');
  });
  

app.use("/tasks", taskRoutes);

app.listen(PORT, () => console.log(`Server running on http://localhost:${PORT}`));
