require("dotenv").config();

const express = require("express");

require("./configs/db.config");

const app = express();

// Routes

const router = require("./configs/reoutes.config");
app.use("/api/v1", router);

// Error Handlers

app.use((req, res, next) => {
  res.status(404).json({ message: "Route not found" });
});

app.use((err, req, res, next) => {
  console.error(err);

  res.status(500).json({ message: "Internal Server Error" });
});

const port = process.env.PORT || 3000;
app.listen(port, () => console.info(`Application running at port ${port}`));