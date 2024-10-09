const express = require("express");

const connectDB = require("./db");

const authenticate = require("./middleware/authenticate");
const routes = require('./routes') 

const app = express();
app.use(express.json());
app.use(routes)



app.get("/private", authenticate, async (req, res) => {
  console.log("I am user", req.user);

  return res.status(200).json({ message: "I am Private route" });
});

app.get("/public", (req, res) => {
  return res.status(200).json({ message: "I am public route" });
});

app.get("/", (_, res) => {
  const obj = {
    name: "Razu Ahamad",
    gmail: "abdullahalfarabi@example.com",
  };
  res.json(obj);
});

app.use((err, req, res, next) => {
  console.log(err);

  res.status(500).json({ message: "Server Error Occurred" });
});

connectDB("mongodb://localhost:27017/attendance-db")
  .then(() => {
    console.log("Database Connected");

    app.listen(4000, () => {
      console.log("I am listening on port 4000");
    });
  })
  .catch((e) => console.log(e));
