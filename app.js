const express = require("express");
const morgan = require("morgan");

const tourRouter = require("./routes/tourRoutes");
const userRouter = require("./routes/userRoutes");

const app = express();

// MIDDLEWARE
app.use(express.json());

if(process.env.NODE_ENV === 'development'){
  app.use(morgan("dev"));
}

app.use(express.static(`${__dirname}/public`))

app.use((req, res, next) => {
  console.log("Hello from the middleware");
  next();
});

app.use((req, res, next) => {
  req.requestTime = new Date().toISOString();
  next();
});

// app.get("/", (req, res) => {
//   res.status(200).send("Hello from the server");
// });

// ROUTE HANDLER

// ROUTES

// app.get("/api/v1/tours", getAllTours);
// app.post("/api/v1/tours", createTour);
// app.get("/api/v1/tours/:id?", getTour);
// app.patch("/api/v1/tours/:id?", updateTour);
// app.delete("/api/v1/tours/:id?", deleteTour);

app.use("/api/v1/tours", tourRouter);
app.use("/api/v1/users", userRouter);

module.exports = app;
