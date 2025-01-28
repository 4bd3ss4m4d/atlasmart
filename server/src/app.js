import express from "express";
import connectMongoDB from "./database/mongoClient.js";

const app = express();

// Connect to Database
connectMongoDB();

app.get("/", (req, res) => {
  res.send("Welcome to the Atlasmart Backend!");
});

export default app;
