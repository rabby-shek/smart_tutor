const express = require("express");
const app = express();
const morgan = require("morgan");
const createError = require("http-errors");
const { userRouter } = require("./routers/userRouter");

//for development purpose
app.use(morgan("dev"));

// for taking the data from the form
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

// routes

app.use("/api", userRouter);

// client side error handling
app.use((req, res, next) => {
  next(createError(404, "Opps!, Page not found."));
});

// server side error handling
app.use((err, req, res, next) => {
  console.error(err.stack);
  return res.status(err.status || 500).json({
    success: false,
    message: err.message,
  });
});

module.exports = app;
