const express = require("express");
const cors = require("cors");
const path = require("path");
const morgan = require("morgan");

const planetsRouter = require("./routes/planets/planets.router");
const launchesRouter = require("./routes/launches/launches.router");

const app = express();

app.use(
  cors({
    origin: "http://localhost:5173",
  })
);

app.use(morgan("combined"));
app.use(express.json());

// API routes with proper base paths
app.use("/planets", planetsRouter);
app.use("/launches", launchesRouter);

// Static files
app.use(express.static(path.join(__dirname, "..", "public")));

// Place this AFTER all API routes
app.get("/*path", (req, res) => {
  res.sendFile(path.resolve(__dirname, "..", "public", "index.html"));
});

module.exports = app;
