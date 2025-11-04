require("dotenv").config();
const express = require("express");
const cors = require("cors");
const connectDB = require("./config/db");
const authRoutes = require("./routes/authRoutes");

const app = express();
app.use(cors());
app.use(express.json());

app.use("/api", authRoutes);

app.get("/", (req, res) => {
  res.send("Auth Backend Running...");
});

const PORT = process.env.PORT || 4000;
connectDB();

app.listen(PORT, () => console.log(`Server started on port ${PORT}`));
